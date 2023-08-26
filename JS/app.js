//Llamo al carrito icono del carrrito de compras y su contenedor
const shopContent = document.getElementById("shop-content");
const verCarrito = document.getElementById("cart");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//*variables para filtrar productos
const filterContainer = document.getElementById("filterContainer");
const filtros = document.getElementsByName("filtro");
let productos = [];

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

//*CARRITO
//*Al iniciar toma el local storage o el carrito vacio
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//*Implementando fetch con archivo Json local

const fetchData = async () => {
  try {
    const res = await fetch("./js/products.json");
    const data = await res.json();
    productos = data;
    todoLosProductos(data);
  } catch (error) {
    console.log(error);
  }
};

//*Funcion para mostrar todos los productos dinamicamente
function todoLosProductos(productos) {
  productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class= "precio">$${product.precio}</p>
    `;

    //*Agrego el content de los productos al div principal
    shopContent.append(content);

    //*creo la variable para el boton y lo llamo
    let btnComprar = document.createElement("button");
    btnComprar.className = "btn-comprar";
    btnComprar.innerText = "Comprar";

    content.append(btnComprar);

    //*Sistema para agregar productos por cantidad
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
      toastAction();
    });
  });
}

//*Metodos para filtrar productos
//*Utilizo el bubbling del (e) para el container, asi todos sus hijos lo reciben.
let productoFiltradoDefault = "";

filterContainer.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    let productoFiltrado = e.target.id;
    console.log(productoFiltrado);

    if (productoFiltrado !== productoFiltradoDefault) {
      productoFiltradoDefault = productoFiltrado;
      console.log(productoFiltradoDefault);
      if (productoFiltrado === "todos") {
        shopContent.innerHTML = "";
        todoLosProductos(productos);
        carritoCounter();
        saveLocal();
      } else {
        filtrarProductos(productoFiltrado);
        carritoCounter();
        saveLocal();
      }
    }
  }
});

//*Funcion para filtrar los productos por (type)

function filtrarProductos(type) {
  shopContent.innerHTML = "";
  const productType = productos.filter((product) => product.type === type);
  todoLosProductos(productType);
}

//*Local storage Set Item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const toastAction = async () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
  await Toast.fire({
    icon: "success",
    title: "Se ha añadido un producto al carrito",
  });
};
