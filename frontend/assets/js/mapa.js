const TIENDAS_HUERTOHOGAR = [
  { ciudad: "Santiago", lat: -33.4489, lng: -70.6693 },
  { ciudad: "Puerto Montt", lat: -41.4693, lng: -72.9424 },
  { ciudad: "Villarica", lat: -39.2827, lng: -72.2262 },
  { ciudad: "Nacimiento", lat: -37.5052, lng: -72.6779 },
  { ciudad: "Viña del Mar", lat: -33.0246, lng: -71.5518 },
  { ciudad: "Valparaíso", lat: -33.0472, lng: -71.6127 },
  { ciudad: "Concepción", lat: -36.8201, lng: -73.0444 },
];




function renderizarListaTiendas() {
  const contenedor = document.getElementById("lista-tiendas");
  if (!contenedor) return;
  contenedor.innerHTML = TIENDAS_HUERTOHOGAR
    .map((t) => `<li class="list-group-item">${t.ciudad}</li>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", renderizarListaTiendas);
