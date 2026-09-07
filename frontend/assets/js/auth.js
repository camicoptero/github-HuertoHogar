
function registrarUsuario(evento) {
  evento.preventDefault();
  const nombre = document.getElementById("registro-nombre").value.trim();
  const correo = document.getElementById("registro-correo").value.trim().toLowerCase();
  const clave = document.getElementById("registro-clave").value;
  const mensaje = document.getElementById("registro-mensaje");

  if (!nombre || !correo || clave.length < 6) {
    mensaje.textContent = "Completa todos los campos. La contraseña debe tener al menos 6 caracteres.";
    mensaje.className = "text-danger small mt-2";
    return false;
  }

  const usuarios = hhLeer(HH_KEYS.USUARIOS, []);
  if (usuarios.some((u) => u.correo === correo)) {
    mensaje.textContent = "Ya existe una cuenta registrada con este correo.";
    mensaje.className = "text-danger small mt-2";
    return false;
  }

  usuarios.push({ nombre, correo, clave, direccion: "", telefono: "" });
  hhGuardar(HH_KEYS.USUARIOS, usuarios);

  mensaje.textContent = "Cuenta creada con éxito. Ya puedes iniciar sesión.";
  mensaje.className = "text-success small mt-2";
  setTimeout(() => (window.location.href = "login.html"), 1200);
  return false;
}

function iniciarSesion(evento) {
  evento.preventDefault();
  const correo = document.getElementById("login-correo").value.trim().toLowerCase();
  const clave = document.getElementById("login-clave").value;
  const mensaje = document.getElementById("login-mensaje");

  const usuarios = hhLeer(HH_KEYS.USUARIOS, []);
  const usuario = usuarios.find((u) => u.correo === correo && u.clave === clave);

  if (!usuario) {
    mensaje.textContent = "Correo o contraseña incorrectos.";
    mensaje.className = "text-danger small mt-2";
    return false;
  }

  hhGuardar(HH_KEYS.SESION, { correo: usuario.correo, nombre: usuario.nombre });
  window.location.href = "index.html";
  return false;
}

function cerrarSesion() {
  hhLimpiar(HH_KEYS.SESION);
  window.location.href = "login.html";
}

function obtenerSesion() {
  return hhLeer(HH_KEYS.SESION, null);
}


function pintarEstadoSesion() {
  const sesion = obtenerSesion();
  const zonaSesion = document.getElementById("zona-sesion");
  if (!zonaSesion) return;

  if (sesion) {
    zonaSesion.innerHTML = `
      <span class="navbar-text me-2">Hola, ${sesion.nombre}</span>
      <a class="btn btn-outline-huerto btn-sm" href="perfil.html">Mi perfil</a>
      <button class="btn btn-huerto btn-sm ms-2" onclick="cerrarSesion()">Cerrar sesión</button>`;
  } else {
    zonaSesion.innerHTML = `
      <a class="btn btn-outline-huerto btn-sm" href="login.html">Iniciar sesión</a>
      <a class="btn btn-huerto btn-sm ms-2" href="registro.html">Registrarse</a>`;
  }
}

document.addEventListener("DOMContentLoaded", pintarEstadoSesion);
