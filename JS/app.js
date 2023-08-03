//Llamo al carrito icono del carrrito de compras y su contenedor
const shopContent = document.getElementById("shop-content");
const verCarrito = document.getElementById("cart");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");
//*variables para filtrar productos
const filterContainer = document.getElementById("filterContainer");
const todos = document.getElementById("todos");
const laptops = document.getElementById("laptops");
const torres = document.getElementById("torres");
const monitores = document.getElementById("monitores");
const procesadores = document.getElementById("procesadores");
const coolers = document.getElementById("coolers");
const teclados = document.getElementById("teclados");
const mouse = document.getElementById("mouse");

//*creo el carrito de compras como un array vacio
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//*le aplico el metodo forEach al array productos(product.js)
function todoLosProductos() {
  productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class= "precio">$${product.precio}</p>
    `;

    //*le agrego con el metodo append el content de los productos
    shopContent.append(content);

    //*creo la variable para el boton y lo llamo
    let btnComprar = document.createElement("button");
    btnComprar.className = "btn-comprar";
    btnComprar.innerText = "Comprar";

    //*Envio el boton a content
    content.append(btnComprar);

    btnComprar.addEventListener("click", () => {
      const repetido = carrito.some(
        (repeatProduct) => repeatProduct.id === product.id
      );

      if (repetido) {
        carrito.map((prod) => {
          if (prod.id === product.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: product.id,
          img: product.img,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: product.cantidad,
        });
      }
      carritoCounter();
      saveLocal();
    });
  });
}

todoLosProductos();

//*Metodos para filtrar productos

filterContainer.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    switch (e.target) {
      case todos:
        shopContent.innerHTML = "";
        todoLosProductos("all");
        carritoCounter();
        saveLocal();
        break;
      case laptops:
        filtrarProductos("laptop");
        carritoCounter();
        saveLocal();
        break;
      case torres:
        filtrarProductos("torre");
        carritoCounter();
        saveLocal();
        break;
      case monitores:
        filtrarProductos("monitor");
        carritoCounter();
        saveLocal();
        break;
      case procesadores:
        filtrarProductos("procesador");
        carritoCounter();
        saveLocal();
        break;
      case coolers:
        filtrarProductos("cooler");
        carritoCounter();
        saveLocal();
        break;

      case teclados:
        filtrarProductos("teclado");
        carritoCounter();
        saveLocal();
        break;

      case mouse:
        filtrarProductos("mouse");
        carritoCounter();
        saveLocal();
        break;
    }
  }
});

function filtrarProductos(type) {
  shopContent.innerHTML = "";
  const productType = productos.filter((product) => product.type === type);

  productType.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
  <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <p class= "precio">$${product.precio}</p>
  `;
    //le agrego con el metodo append el content de los productos
    shopContent.append(content);

    //creo la variable para el boton y lo llamo
    let btnComprar = document.createElement("button");
    btnComprar.className = "btn-comprar";
    btnComprar.innerText = "Comprar";

    //Envio el boton a content
    content.append(btnComprar);

    btnComprar.addEventListener("click", () => {
      const repetido = carrito.some(
        (repeatProduct) => repeatProduct.id === product.id
      );

      if (repetido) {
        carrito.map((prod) => {
          if (prod.id === product.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: product.id,
          img: product.img,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: product.cantidad,
        });
        carritoCounter();
        saveLocal();
      }
    });
  });
}

//*Local storage Set Item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
//*Local storage Get Item
