let imagenes = [
  {
    nombre: "Gintoki Sakata",
    img: "http://localhost:3000/gintoki.webp",
  },
  {
    nombre: "Shinpachi Shimura",
    img: "http://localhost:3000/shinpachi-shimura.webp",
  },
  {
    nombre: "Kagura",
    img: "http://localhost:3000/kagura.webp",
  },
  {
    nombre: "Sadaharu",
    img: "http://localhost:3000/sadaharu.webp",
  },
  {
    nombre: "Katsura Kotauro",
    img: "http://localhost:3000/zura.webp",
  },
];

const imagenesController = {
  muestraImagenes(req, res) {
    res.json(imagenes).status(200);
  },
};

module.exports = imagenesController;
