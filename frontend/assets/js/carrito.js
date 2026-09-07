
function obtenerCarrito() {
  return hhLeer(HH_KEYS.CARRITO, []);
}

function guardarCarrito(carrito) {
  hhGuardar(HH_KEYS.CARRITO, carrito);
  actualizarContadorCarrito();
}

function agregarAlCarrito(codigoProducto, cantidad = 1) {
  const producto = PRODUCTOS.find((p) => p.codigo === codigoProducto);
  if (!producto) return;

  const carrito = obtenerCarrito();
  const item = carrito.find((i) => i.codigo === codigoProducto);

  if (item) {
    item.cantidad += cantidad;
  } else {
    carrito.push({ codigo: producto.codigo, nombre: producto.nombre, precio: producto.precio, cantidad });
  }

  guardarCarrito(carrito);
  mostrarToastCarrito(`${producto.nombre} agregado al carrito`);
}

function modificarCantidad(codigoProducto, nuevaCantidad) {
  let carrito = obtenerCarrito();
  if (nuevaCantidad <= 0) {
    carrito = carrito.filter((i) => i.codigo !== codigoProducto);
  } else {
    const item = carrito.find((i) => i.codigo === codigoProducto);
    if (item) item.cantidad = nuevaCantidad;
  }
  guardarCarrito(carrito);
  renderizarCarrito();
}

function eliminarDelCarrito(codigoProducto) {
  const carrito = obtenerCarrito().filter((i) => i.codigo !== codigoProducto);
  guardarCarrito(carrito);
  renderizarCarrito();
}

function calcularTotalCarrito(carrito) {
  return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");
  if (!contador) return;
  const total = obtenerCarrito().reduce((acc, item) => acc + item.cantidad, 0);
  contador.textContent = total;
  contador.classList.toggle("d-none", total === 0);
}

function renderizarCarrito() {
  const contenedor = document.getElementById("lista-carrito");
  if (!contenedor) return;

  const carrito = obtenerCarrito();
  if (!carrito.length) {
    contenedor.innerHTML = `<p class="text-center">Tu carrito está vacío.</p>`;
    document.getElementById("carrito-total").textContent = formatearCLP(0);
    return;
  }

  contenedor.innerHTML = carrito
    .map(
      (item) => `
      <div class="carrito-item d-flex justify-content-between align-items-center">
        <div>
          <strong>${item.nombre}</strong>
          <div class="small">${formatearCLP(item.precio)} c/u</div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <input type="number" min="0" value="${item.cantidad}" class="form-control form-control-sm" style="width:70px"
                 onchange="modificarCantidad('${item.codigo}', parseInt(this.value || 0))">
          <span class="precio">${formatearCLP(item.precio * item.cantidad)}</span>
          <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito('${item.codigo}')">Quitar</button>
        </div>
      </div>`
    )
    .join("");

  document.getElementById("carrito-total").textContent = formatearCLP(calcularTotalCarrito(carrito));
}

function mostrarToastCarrito(texto) {
  const zona = document.getElementById("zona-toast");
  if (!zona) return;
  zona.textContent = texto;
  zona.classList.remove("d-none");
  setTimeout(() => zona.classList.add("d-none"), 1800);
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarContadorCarrito();
  if (document.getElementById("lista-carrito")) {
    renderizarCarrito();
  }
});
