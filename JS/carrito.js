//*TODO:eliminar productos del carrito 👌
//*TODO:manejar cantidades y totales 👌
//*TODO: cantidad de productos en el carrito

const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.classList = "modal__container__products";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal__header";
  modalHeader.innerHTML = `
  <h2 class="modal__header__title">Tu Carrito</h2>
  `;
  modalContainer.append(modalHeader);

  const modalBtn = document.createElement("p");
  modalBtn.innerText = "X";
  modalBtn.className = "modal__header__btn";

  modalBtn.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalBtn);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal__content";
    carritoContent.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>Precio: $${product.precio}</p>
    <span class="restar"> - </span>
    <p>Cantidad: ${product.cantidad}</p>
    <span class="sumar"> + </span>
    <p>Total: ${product.cantidad * product.precio}</P>
    <span class="delete__product">❌</span>
    `;
    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");

    sumar.addEventListener("click", () => {
      product.cantidad++;
      pintarCarrito();
    });
    let eliminar = carritoContent.querySelector(".delete__product");

    eliminar.addEventListener("click", () => {
      eliminarProducto(product.id);
    });
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalcompra = document.createElement("div");
  totalcompra.className = "total__compra";
  totalcompra.innerHTML = `Total a pagar: $${total}`;

  modalContainer.append(totalcompra);

  const btnVaciarCarrito = document.createElement("button");
  btnVaciarCarrito.className = "btn__vaciar__carrito";
  btnVaciarCarrito.innerText = "Vaciar Carrito";

  modalContainer.append(btnVaciarCarrito);
  const vaciarCarrito = document.querySelector(".btn__vaciar__carrito");
  vaciarCarrito.addEventListener("click", () => {
    vaciar();
  });
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
  const encontrarID = carrito.find((elemento) => elemento.id === id);
  console.log(encontrarID);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== encontrarID;
  });
  carritoCounter();
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";
  cantidadCarrito.innerText = carrito.length;
};

const vaciar = () => {
  carrito = [];
  carritoCounter();
  pintarCarrito();
};
