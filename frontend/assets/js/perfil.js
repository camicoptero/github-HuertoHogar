function cargarPerfil() {
  const sesion = obtenerSesion();
  if (!sesion) {
    window.location.href = "login.html";
    return;
  }
  const usuarios = hhLeer(HH_KEYS.USUARIOS, []);
  const usuario = usuarios.find((u) => u.correo === sesion.correo);
  if (!usuario) return;

  document.getElementById("perfil-nombre").value = usuario.nombre;
  document.getElementById("perfil-correo").value = usuario.correo;
  document.getElementById("perfil-direccion").value = usuario.direccion || "";
  document.getElementById("perfil-telefono").value = usuario.telefono || "";

  renderizarHistorialCompras(usuario.correo);
}



function guardarPerfil(evento) {
  evento.preventDefault();
  const sesion = obtenerSesion();
  if (!sesion) return false;

  const usuarios = hhLeer(HH_KEYS.USUARIOS, []);
  const indice = usuarios.findIndex((u) => u.correo === sesion.correo);
  if (indice === -1) return false;

  usuarios[indice].direccion = document.getElementById("perfil-direccion").value.trim();
  usuarios[indice].telefono = document.getElementById("perfil-telefono").value.trim();
  hhGuardar(HH_KEYS.USUARIOS, usuarios);

  const mensaje = document.getElementById("perfil-mensaje");
  mensaje.textContent = "Datos actualizados correctamente.";
  mensaje.className = "text-success small mt-2";
  return false;
}

function renderizarHistorialCompras(correoUsuario) {
  const contenedor = document.getElementById("historial-compras");
  if (!contenedor) return;

  const pedidos = hhLeer(HH_KEYS.PEDIDOS, []).filter((p) => p.correoUsuario === correoUsuario);

  if (!pedidos.length) {
    contenedor.innerHTML = `<p class="small">Aún no tienes compras registradas.</p>`;
    return;
  }

  contenedor.innerHTML = pedidos
    .map(
      (pedido) => `
      <div class="carrito-item d-flex justify-content-between align-items-center">
        <div>
          <strong>Pedido ${pedido.id}</strong>
          <div class="small">${new Date(pedido.fecha).toLocaleDateString("es-CL")} · ${formatearCLP(pedido.total)}</div>
        </div>
        <button class="btn btn-outline-huerto btn-sm" onclick="repetirPedido('${pedido.id}')">
          Repetir pedido
        </button>
      </div>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("perfil-nombre")) {
    cargarPerfil();
  }
});
