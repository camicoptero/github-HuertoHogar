const HH_KEYS = {
  USUARIOS: "hh_usuarios",
  SESION: "hh_sesion",
  CARRITO: "hh_carrito",
  PEDIDOS: "hh_pedidos",
  RESENAS: "hh_resenas",
};

function hhGuardar(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}

function hhLeer(clave, porDefecto) {
  const crudo = localStorage.getItem(clave);
  if (!crudo) return porDefecto;
  try {
    return JSON.parse(crudo);
  } catch {
    return porDefecto;
  }
}

function hhLimpiar(clave) {
  localStorage.removeItem(clave);
}
