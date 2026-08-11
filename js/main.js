(function () {
  "use strict";

  const cfg = WEDDING_CONFIG;

  /* ---------- Preenche o conteúdo a partir do config.js ---------- */
  function populateContent() {
    document.getElementById("bride-name").textContent = cfg.couple.bride;
    document.getElementById("groom-name").textContent = cfg.couple.groom;
    document.getElementById("quote").textContent = cfg.quote;

    const photo = document.getElementById("couple-photo");
    photo.src = cfg.photo.src;
    photo.alt = cfg.photo.alt;

    document.getElementById("date-day").textContent = cfg.date.day;
    document.getElementById("date-month").textContent = cfg.date.monthYear;
    document.getElementById("date-weekday").textContent = cfg.date.weekdayTime;

    populateVenue("ceremony", cfg.ceremony);
    populateVenue("reception", cfg.reception);

    const coverLabel = document.getElementById("cover-label");
    if (cfg.cover && cfg.cover.label) coverLabel.textContent = cfg.cover.label;

    document.getElementById("monogram-bride").textContent = cfg.couple.bride.charAt(0).toUpperCase();
    document.getElementById("monogram-groom").textContent = cfg.couple.groom.charAt(0).toUpperCase();

    document.title = `${cfg.couple.bride} & ${cfg.couple.groom} — Convite de Casamento`;
  }

  function populateVenue(prefix, venue) {
    const link = document.getElementById(`venue-${prefix}`);
    link.href = venue.mapsUrl;
    document.getElementById(`${prefix}-label`).textContent = venue.label;
    document.getElementById(`${prefix}-name`).textContent = venue.name;
  }

  /* ---------- Capa: clique para abrir (efeito de "abrir convite físico") ---------- */
  function initCover() {
    const cover = document.getElementById("cover");
    const invite = document.getElementById("invite");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Tempos alinhados ao CSS: a capa desliza para fora em 0.6s (troca de página).
    // Com reduced-motion, é quase instantâneo.
    const REVEAL_DELAY = reduceMotion ? 0 : 150;
    const HIDE_DELAY = reduceMotion ? 50 : 620;

    cover.addEventListener("click", openInvite);
    cover.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openInvite();
      }
    });

    let opened = false;
    function openInvite() {
      if (opened) return;
      opened = true;

      cover.classList.add("is-open");
      cover.setAttribute("aria-hidden", "true");
      invite.removeAttribute("aria-hidden");

      // O convite começa a surgir enquanto a capa ainda está desaparecendo.
      setTimeout(() => invite.classList.add("is-visible"), REVEAL_DELAY);

      setTimeout(() => {
        cover.hidden = true;
      }, HIDE_DELAY);
    }
  }

  /* ---------- Modal de RSVP ---------- */
  function openPanel(panel) {
    panel.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closePanel(panel) {
    panel.hidden = true;
    document.body.style.overflow = "";
  }

  function initRsvpModal() {
    const rsvpModal = document.getElementById("rsvp-modal");

    document.getElementById("btn-rsvp").addEventListener("click", () => openPanel(rsvpModal));
    document.getElementById("rsvp-close").addEventListener("click", () => closePanel(rsvpModal));

    rsvpModal.addEventListener("click", (e) => {
      if (e.target === rsvpModal) closePanel(rsvpModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !rsvpModal.hidden) closePanel(rsvpModal);
    });
  }

  /* ---------- RSVP via WhatsApp ---------- */
  function initRsvpForm() {
    document.getElementById("rsvp-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("rsvp-name");
      const name = nameInput.value.trim();
      if (!name) return;

      const message = cfg.whatsapp.messageTemplate.replace("{nome}", name);
      const url = `https://wa.me/${cfg.whatsapp.number}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener");

      closePanel(document.getElementById("rsvp-modal"));
      nameInput.value = "";
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    populateContent();
    initCover();
    initRsvpModal();
    initRsvpForm();
  });
})();
