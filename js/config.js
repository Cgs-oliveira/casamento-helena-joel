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
    number: "5511999999999",
    // {nome} é substituído pelo nome digitado pelo convidado
    messageTemplate:
      "Olá! Eu, {nome}, confirmo minha presença no casamento da Helena e do Joel! 💚",
  },

  // Chave Pix usada como padrão nos cards que ainda não têm link de pagamento
  // ou QR code próprios (fluxo "copiar chave + valor sugerido").
  pix: {
    key: "helena.joel@exemplo.com",
    keyLabel: "Chave Pix (e-mail)",
  },

  // Cada item mostra a foto do produto (pasta img/ImgLista) na lista e no modal de detalhe.
  // Também aceita opcionalmente: paymentLink: "https://provedor-de-pagamento.com/link-do-item" (Opção A: provedor)
  gifts: [
    { id: "liquidificador", name: "Liquidificador", value: 180, image: "img/ImgLista/Liquidificador.jpg" },
    { id: "aparelho-de-jantar", name: "Aparelho de Jantar", value: 220, image: "img/ImgLista/AparelhodeJantar.webp" },
    { id: "ferro-de-passar", name: "Ferro de Passar", value: 140, image: "img/ImgLista/FerrodePassar.jpg" },
    { id: "jogo-de-toalha-de-banho", name: "Jogo de Toalha de Banho", value: 130, image: "img/ImgLista/JogodeToalhadeBanho.jpg" },
    { id: "faqueiro", name: "Faqueiro", value: 190, image: "img/ImgLista/Faqueiro.jpg" },
    { id: "sanduicheira", name: "Sanduicheira", value: 150, image: "img/ImgLista/Sanduicheira.jpg" },
    { id: "conjunto-de-copos", name: "Conjunto de Copos", value: 120, image: "img/ImgLista/ConjuntodeCopos.jpg" },
    { id: "jogo-de-cama", name: "Jogo de Cama", value: 210, image: "img/ImgLista/JogodeCama.jpg" },
    { id: "cafeteira", name: "Cafeteira", value: 160, image: "img/ImgLista/Cafeteira.jpg" },
    { id: "conjunto-de-tacas", name: "Conjunto de Taças", value: 135, image: "img/ImgLista/ConjuntodeTaças.jpg" },
    { id: "conjunto-de-panelas", name: "Conjunto de Panelas", value: 250, image: "img/ImgLista/ConjuntodePanelas.jpg" },
    { id: "aparelho-de-xicara", name: "Aparelho de Xícara", value: 170, image: "img/ImgLista/AparelhodeXícara.jpg" },
    { id: "aspirador", name: "Aspirador", value: 230, image: "img/ImgLista/Aspirador.jpg" },
    { id: "tigelas-e-travessas", name: "Tigelas e Travessas", value: 125, image: "img/ImgLista/TigelasTravessas.jpg" },
    { id: "kit-churrasco", name: "Kit Churrasco", value: 145, image: "img/ImgLista/KitChurrasco.jpg" },
    { id: "batedeira", name: "Batedeira", value: 240, image: "img/ImgLista/Batedeira.jpg" },
  ],
};
