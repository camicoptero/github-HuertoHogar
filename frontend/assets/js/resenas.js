function agregarResena(codigoProducto, evento) {
  evento.preventDefault();
  const sesion = obtenerSesion();
  if (!sesion) {
    window.location.href = "login.html";
    return false;
  }

  const comentario = document.getElementById("resena-comentario").value.trim();
  const puntaje = parseInt(document.getElementById("resena-puntaje").value, 10);
  if (!comentario || !puntaje) return false;

  const resenas = hhLeer(HH_KEYS.RESENAS, []);
  resenas.push({
    codigoProducto,
    correoUsuario: sesion.correo,
    puntaje,
    comentario,
    fecha: new Date().toISOString(),
  });
  hhGuardar(HH_KEYS.RESENAS, resenas);

  renderizarResenas(codigoProducto);
  document.getElementById("resena-comentario").value = "";
  return false;
}

function renderizarResenas(codigoProducto) {
  const contenedor = document.getElementById("lista-resenas");
  if (!contenedor) return;

  const resenas = hhLeer(HH_KEYS.RESENAS, []).filter((r) => r.codigoProducto === codigoProducto);

  if (!resenas.length) {
    contenedor.innerHTML = `<p class="small">Sé el primero en dejar una reseña de este producto.</p>`;
    return;
  }

  contenedor.innerHTML = resenas
    .map(
      (r) => `
      <div class="carrito-item">
        <div>${"★".repeat(r.puntaje)}${"☆".repeat(5 - r.puntaje)}</div>
        <p class="mb-0">${r.comentario}</p>
      </div>`
    )
    .join("");
}
