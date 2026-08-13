/**
 * Configuração do site — edite este arquivo para personalizar o convite.
 * Todos os textos, valores e links usados no site vêm daqui.
 */
const WEDDING_CONFIG = {
  couple: {
    bride: "Helena",
    groom: "Joel",
  },

  // Frase/citação exibida em itálico
  quote: "“E os dois se tornarão um só.”",

  cover: {
    label: "Toque para abrir o convite",
  },

  date: {
    day: "17",
    monthYear: "Outubro de 2026",
    weekdayTime: "Sábado · 18h",
  },

  // Cerimônia e recepção têm endereços diferentes, cada um com seu próprio link de mapa
  ceremony: {
    label: "Cerimônia",
    name: "Igreja de São Pedro",
    mapsUrl: "https://maps.app.goo.gl/2HT9zPVr9Z3dW9hX9",
  },

  reception: {
    label: "Recepção",
    name: "Paraíso Beach",
    mapsUrl: "https://maps.app.goo.gl/bCqA1Dr3HGLbXeS48",
  },

  photo: {
    src: "img/ImgCasal.jpeg",
    alt: "Foto do casal Helena e Joel",
  },

  whatsapp: {
    // Número da noiva/organizador(a) no formato internacional, só dígitos
    number: "5588993327302",
    // {nome} é substituído pelo nome digitado pelo convidado
    messageTemplate:
      "Olá! Eu, {nome}, confirmo minha presença no casamento da Helena e do Joel! ",
  },

  // Chave Pix usada como padrão nos cards que ainda não têm link de pagamento
  // ou QR code próprios (fluxo "copiar chave + valor sugerido").
  pix: {
    key: "helena.joel@exemplo.com",
    keyLabel: "Chave Pix (e-mail)",
  },

  // Cada item mostra a foto do produto (pasta img/ImgLista) na lista e no modal de detalhe.
  // pixCode: código Pix "copia e cola" (Br Code) gerado especificamente para o valor deste item.
  //          Se vazio, o modal usa a chave Pix genérica em pix.key acima.
  // Também aceita opcionalmente: paymentLink: "https://provedor-de-pagamento.com/link-do-item" (Opção A: provedor)
  gifts: [
    { id: "liquidificador", name: "Liquidificador", value: 180, image: "img/ImgLista/Liquidificador.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406180.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510qesGlsqFvm63048AFB" },
    { id: "aparelho-de-jantar", name: "Aparelho de Jantar", value: 220, image: "img/ImgLista/AparelhodeJantar.webp", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406220.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510PXhSFJI54M63046BFC" },
    { id: "ferro-de-passar", name: "Ferro de Passar", value: 140, image: "img/ImgLista/FerrodePassar.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406140.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510t2gDjilV7D6304C1AB" },
    { id: "jogo-de-toalha-de-banho", name: "Jogo de Toalha de Banho", value: 130, image: "img/ImgLista/JogodeToalhadeBanho.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406130.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO6214051080BmJHjtT2630485AF" },
    { id: "faqueiro", name: "Faqueiro", value: 190, image: "img/ImgLista/Faqueiro.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406190.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510ehwUIwXYed63047520" },
    { id: "sanduicheira", name: "Sanduicheira", value: 150, image: "img/ImgLista/Sanduicheira.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406150.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510rHOA23FeSm6304F876" },
    { id: "conjunto-de-copos", name: "Conjunto de Copos", value: 120, image: "img/ImgLista/ConjuntodeCopos.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406120.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510KTu51fthUY63049DC5" },
    { id: "jogo-de-cama", name: "Jogo de Cama", value: 210, image: "img/ImgLista/JogodeCama.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406210.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510CwVcYiF81h63046C65" },
    { id: "cafeteira", name: "Cafeteira", value: 160, image: "img/ImgLista/Cafeteira.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406160.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510rDoK0BJhoS63041D99" },
    { id: "conjunto-de-tacas", name: "Conjunto de Taças", value: 135, image: "img/ImgLista/ConjuntodeTaças.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406135.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO621405105K7FBce5mu6304F622" },
    { id: "conjunto-de-panelas", name: "Conjunto de Panelas", value: 250, image: "img/ImgLista/ConjuntodePanelas.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406250.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510RrlN7TGlsv6304361C" },
    { id: "aparelho-de-xicara", name: "Aparelho de Xícara", value: 170, image: "img/ImgLista/AparelhodeXícara.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406170.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510gCz60Jo7Xd63043BDF" },
    { id: "aspirador", name: "Aspirador", value: 230, image: "img/ImgLista/Aspirador.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406230.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510bGFJf3fG9H6304C824" },
    { id: "tigelas-e-travessas", name: "Tigelas e Travessas", value: 125, image: "img/ImgLista/TigelasTravessas.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406125.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO621405101gclM9VUEa6304A90E" },
    { id: "kit-churrasco", name: "Kit Churrasco", value: 145, image: "img/ImgLista/KitChurrasco.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406145.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510unww2L0qO16304EA72" },
    { id: "batedeira", name: "Batedeira", value: 240, image: "img/ImgLista/Batedeira.jpg", pixCode: "00020126580014BR.GOV.BCB.PIX01365187451b-2240-4b6f-8eff-b3a51eeda5db5204000053039865406240.005802BR592564.174.526 JOEL DE HOLAND6009SAO PAULO62140510y5Vs1x7VFx6304E631" },
  ],
};
