(function () {
  "use strict";

  const cfg = WEDDING_CONFIG;

  function openPanel(panel) {
    panel.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closePanel(panel) {
    panel.hidden = true;
    document.body.style.overflow = "";
  }

  function formatCurrency(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function renderGiftsList() {
    const list = document.getElementById("gifts-list");
    list.innerHTML = "";

    cfg.gifts.forEach((gift) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gift-card";
      btn.innerHTML = `
        ${gift.image ? `<img class="gift-card__thumb" src="${gift.image}" alt="" />` : ""}
        <span class="gift-card__info">
          <p class="gift-card__name">${gift.name}</p>
          ${gift.description ? `<p class="gift-card__desc">${gift.description}</p>` : ""}
        </span>
        <span class="gift-card__value">${formatCurrency(gift.value)}</span>
      `;
      btn.addEventListener("click", () => handleGiftClick(gift));
      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  function handleGiftClick(gift) {
    // Opção A: link de pagamento configurado para este item -> abre direto
    if (gift.paymentLink) {
      window.open(gift.paymentLink, "_blank", "noopener");
      return;
    }
    // Opção B (ou padrão): mostra modal com foto do item + chave Pix + valor
    showGiftDetail(gift);
  }

  function showGiftDetail(gift) {
    document.getElementById("gift-detail-title").textContent = gift.name;
    const descEl = document.getElementById("gift-detail-desc");
    descEl.textContent = gift.description || "";
    descEl.hidden = !gift.description;
    document.getElementById("gift-detail-value").textContent = `Valor sugerido: ${formatCurrency(gift.value)}`;

    // Se o item tem um código Pix "copia e cola" próprio (já com o valor embutido), usa ele.
    // Caso contrário, cai de volta para a chave Pix genérica configurada em cfg.pix.key.
    const hasOwnCode = Boolean(gift.pixCode);
    const pixToCopy = hasOwnCode ? gift.pixCode : cfg.pix.key;

    const pixKeyEl = document.getElementById("gift-detail-pixkey");
    pixKeyEl.textContent = hasOwnCode ? "Código Pix copia e cola gerado para este item" : cfg.pix.key;
    pixKeyEl.title = pixToCopy;

    const copyBtn = document.getElementById("gift-detail-copy");
    copyBtn.textContent = hasOwnCode ? "Copiar código Pix" : "Copiar chave Pix";

    const photoImg = document.getElementById("gift-detail-photo");
    if (gift.image) {
      photoImg.src = gift.image;
      photoImg.alt = gift.name;
      photoImg.hidden = false;
    } else {
      photoImg.removeAttribute("src");
      photoImg.hidden = true;
    }

    copyBtn.onclick = () => copyToClipboard(pixToCopy);

    openPanel(document.getElementById("gift-detail"));
  }

  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast("Chave Pix copiada!"))
      .catch(() => showToast("Não foi possível copiar. Copie manualmente."));
  }

  let toastTimer;
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2500);
  }

  function initGiftDetailModal() {
    const giftDetail = document.getElementById("gift-detail");

    document.getElementById("gift-detail-close").addEventListener("click", () => closePanel(giftDetail));

    giftDetail.addEventListener("click", (e) => {
      if (e.target === giftDetail) closePanel(giftDetail);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !giftDetail.hidden) closePanel(giftDetail);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.title = `Lista de Presentes — ${cfg.couple.bride} & ${cfg.couple.groom}`;
    const pageTitle = document.getElementById("gifts-page-title");
    if (pageTitle) pageTitle.textContent = "Lista de Presentes";

    renderGiftsList();
    initGiftDetailModal();
  });
})();
