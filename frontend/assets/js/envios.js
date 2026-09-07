function avanzarEstadoEnvio(idPedido) {
  const pedidos = hhLeer(HH_KEYS.PEDIDOS, []);
  const pedido = pedidos.find((p) => p.id === idPedido);
  if (!pedido) return;

  const indiceActual = ESTADOS_PEDIDO.indexOf(pedido.estado);
  if (indiceActual < ESTADOS_PEDIDO.length - 1) {
    pedido.estado = ESTADOS_PEDIDO[indiceActual + 1];
    hhGuardar(HH_KEYS.PEDIDOS, pedidos);
  }

  const spanEstado = document.getElementById("estado-pedido");
  if (spanEstado) spanEstado.textContent = pedido.estado;
}


function progresoEnvio(estado) {
  const indice = ESTADOS_PEDIDO.indexOf(estado);
  if (indice === -1) return 0;
  return Math.round(((indice + 1) / ESTADOS_PEDIDO.length) * 100);
}
