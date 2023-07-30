//Llamo al carrito icono del carrrito de compras y su contenedor
const shopContent = document.getElementById("shop-content");
const verCarrito = document.getElementById("cart");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const todos = document.getElementById("todos");
const laptops = document.getElementById("laptops");
const torres = document.getElementById("torres");
const monitores = document.getElementById("monitores");
const procesadores = document.getElementById("procesadores");
const coolers = document.getElementById("coolers");
const teclados = document.getElementById("teclados");
const mouse = document.getElementById("mouse");

//creo el carrito de compras como un array vacio
let carrito = [];
todoLosProductos();
//le aplico el metodo forEach al array productos(product.js)
function todoLosProductos() {
  shopContent.innerHTML = "";
  productos.forEach((product) => {
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
      }
      carritoCounter();
    });
  });
}

//*Metodos para filtrar productos

todos.addEventListener("click", todoLosProductos);

laptops.addEventListener("click", () => {
  filtrarProductos("laptop");
});

torres.addEventListener("click", () => {
  filtrarProductos("torre");
});

monitores.addEventListener("click", () => {
  filtrarProductos("monitor");
});

procesadores.addEventListener("click", () => {
  filtrarProductos("procesador");
});

coolers.addEventListener("click", () => {
  filtrarProductos("cooler");
});

teclados.addEventListener("click", () => {
  filtrarProductos("teclado");
});

mouse.addEventListener("click", () => {
  filtrarProductos("mouse");
});

function filtrarProductos(type) {
  shopContent.innerHTML = "";
  const laptopsType = productos.filter((product) => product.type === type);

  laptopsType.forEach((product) => {
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
      }
      carritoCounter();
    });
  });
}
