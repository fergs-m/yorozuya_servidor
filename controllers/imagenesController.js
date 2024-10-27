let imagenes = [
  {
    nombre: "Gintoki Sakata",
    img: "https://yorozuyaservidor.vercel.app/gintoki.webp",
  },
  {
    nombre: "Shinpachi Shimura",
    img: "https://yorozuyaservidor.vercel.app/shinpachi-shimura.webp",
  },
  {
    nombre: "Kagura",
    img: "https://yorozuyaservidor.vercel.app/kagura.webp",
  },
  {
    nombre: "Sadaharu",
    img: "https://yorozuyaservidor.vercel.app/sadaharu.webp",
  },
  {
    nombre: "Katsura Kotauro",
    img: "https://yorozuyaservidor.vercel.app/zura.webp"
  }
];

const imagenesController = {
  muestraImagenes(req, res) {
    res.json(imagenes).status(200);
  },
};

module.exports = imagenesController;
