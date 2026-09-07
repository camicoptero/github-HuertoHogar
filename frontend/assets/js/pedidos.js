const ESTADOS_PEDIDO = ["Preparación", "Despachado", "En camino", "Entregado"];

function confirmarPedido(evento) {
  evento.preventDefault();
  const sesion = obtenerSesion();
  if (!sesion) {
    window.location.href = "login.html";
    return false;
  }

  const carrito = obtenerCarrito();
  if (!carrito.length) return false;

  const fechaEntrega = document.getElementById("pedido-fecha-entrega").value;

  const pedido = {
    id: "P" + Date.now(),
    correoUsuario: sesion.correo,
    items: carrito,
    total: calcularTotalCarrito(carrito),
    fecha: new Date().toISOString(),
    fechaEntregaPreferida: fechaEntrega,
    estado: ESTADOS_PEDIDO[0],
  };

  const pedidos = hhLeer(HH_KEYS.PEDIDOS, []);
  pedidos.push(pedido);
  hhGuardar(HH_KEYS.PEDIDOS, pedidos);

  guardarCarrito([]);
  window.location.href = `pedidos.html?id=${pedido.id}`;
  return false;
}




function repetirPedido(idPedido) {
  const pedido = hhLeer(HH_KEYS.PEDIDOS, []).find((p) => p.id === idPedido);
  if (!pedido) return;
  guardarCarrito(pedido.items.map((i) => ({ ...i })));
  window.location.href = "carrito.html";
}


function renderizarBoleta(idPedido) {
  const contenedor = document.getElementById("detalle-boleta");
  if (!contenedor) return;

  const pedido = hhLeer(HH_KEYS.PEDIDOS, []).find((p) => p.id === idPedido);
  if (!pedido) {
    contenedor.innerHTML = `<p>No se encontró el pedido.</p>`;
    return;
  }

  const filas = pedido.items
    .map(
      (item) => `
      <tr>
        <td>${item.nombre}</td>
        <td>${item.cantidad}</td>
        <td>${formatearCLP(item.precio)}</td>
        <td>${formatearCLP(item.precio * item.cantidad)}</td>
      </tr>`
    )
    .join("");

  contenedor.innerHTML = `
    <p><strong>Boleta N°:</strong> ${pedido.id}</p>
    <p><strong>Estado:</strong> <span id="estado-pedido">${pedido.estado}</span></p>
    <p><strong>Fecha de entrega preferida:</strong> ${pedido.fechaEntregaPreferida || "No especificada"}</p>
    <table class="table">
      <thead><tr><th>Producto</th><th>Cant.</th><th>Precio</th><th>Subtotal</th></tr></thead>
      <tbody>${filas}</tbody>
    </table>
    <p class="carrito-total">Total: ${formatearCLP(pedido.total)}</p>`;
}



document.addEventListener("DOMContentLoaded", () => {
  const parametros = new URLSearchParams(window.location.search);
  const idPedido = parametros.get("id");
  if (idPedido && document.getElementById("detalle-boleta")) {
    renderizarBoleta(idPedido);
  }
});
