const CATEGORIAS = [
  { id: "frutas", nombre: "Frutas Frescas" },
  { id: "verduras", nombre: "Verduras Orgánicas" },
  { id: "organicos", nombre: "Productos Orgánicos" },
];



const PRODUCTOS = [
  {
    codigo: "FR001",
    nombre: "Manzanas Fuji",
    categoria: "frutas",
    precio: 1200,
    unidad: "kilo",
    stock: 150,
    origen: "Valle del Maule",
    descripcion:
      "Manzanas Fuji crujientes y dulces. Textura firme y sabor equilibrado entre dulce y ácido.",
    imagen: "../assets/images/manzanas-fuji.jpg",
  },
  {
    codigo: "FR002",
    nombre: "Naranjas Valencia",
    categoria: "frutas",
    precio: 1000,
    unidad: "kilo",
    stock: 200,
    origen: "Chile central",
    descripcion: "Jugosas y ricas en vitamina C, ideales para zumos frescos.",
    imagen: "../assets/images/naranjas-valencia.jpg",
  },
  {
    codigo: "FR003",
    nombre: "Plátanos Cavendish",
    categoria: "frutas",
    precio: 800,
    unidad: "kilo",
    stock: 250,
    origen: "Importado",
    descripcion: "Plátanos maduros y dulces, ricos en potasio.",
    imagen: "../assets/images/platanos-cavendish.jpg",
  },
  {
    codigo: "VR001",
    nombre: "Zanahorias Orgánicas",
    categoria: "verduras",
    precio: 900,
    unidad: "kilo",
    stock: 100,
    origen: "Región de O'Higgins",
    descripcion: "Cultivadas sin pesticidas. Excelente fuente de vitamina A y fibra.",
    imagen: "../assets/images/zanahorias-organicas.jpg",
  },
  {
    codigo: "VR002",
    nombre: "Espinacas Frescas",
    categoria: "verduras",
    precio: 700,
    unidad: "bolsa 500g",
    stock: 80,
    origen: "Producción orgánica local",
    descripcion: "Perfectas para ensaladas y batidos verdes.",
    imagen: "../assets/images/espinacas-frescas.jpg",
  },
  {
    codigo: "VR003",
    nombre: "Pimientos Tricolores",
    categoria: "verduras",
    precio: 1500,
    unidad: "kilo",
    stock: 120,
    origen: "Chile central",
    descripcion: "Rojos, amarillos y verdes. Ricos en antioxidantes y vitaminas.",
    imagen: "../assets/images/pimientos-tricolores.jpg",
  },
  {
    codigo: "PO001",
    nombre: "Miel Orgánica",
    categoria: "organicos",
    precio: 5000,
    unidad: "frasco 500g",
    stock: 50,
    origen: "Apicultores locales",
    descripcion: "Miel pura y orgánica, rica en antioxidantes.",
    imagen: "../assets/images/miel-organica.jpg",
  },
];



function formatearCLP(valor) {
  return valor.toLocaleString("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
}


function filtrarProductosPorCategoria(categoriaId) {
  if (!categoriaId || categoriaId === "todas") return PRODUCTOS;
  return PRODUCTOS.filter((p) => p.categoria === categoriaId);
}


function buscarProductos(texto) {
  const t = (texto || "").trim().toLowerCase();
  if (!t) return PRODUCTOS;
  return PRODUCTOS.filter(
    (p) => p.nombre.toLowerCase().includes(t) || p.codigo.toLowerCase().includes(t)
  );
}


function tarjetaProductoHTML(producto) {
  const imagenHTML = producto.imagen
    ? `<img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"
           onerror="this.onerror=null; this.replaceWith(Object.assign(document.createElement('div'), {className:'card-img-top sin-imagen', textContent:'${producto.nombre}'}));">`
    : `<div class="card-img-top sin-imagen">${producto.nombre}</div>`;

  return `
    <div class="col-sm-6 col-lg-4 col-xl-3">
      <div class="card card-producto h-100">
        ${imagenHTML}
        <div class="card-body d-flex flex-column">
          <span class="badge badge-categoria align-self-start mb-2">${producto.codigo}</span>
          <h3 class="h6 font-heading">${producto.nombre}</h3>
          <p class="small mb-1">${producto.descripcion}</p>
          <p class="small mb-2"><strong>Origen:</strong> ${producto.origen}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <span class="precio">${formatearCLP(producto.precio)} / ${producto.unidad}</span>
          </div>
          <button class="btn btn-huerto btn-sm mt-3" onclick="agregarAlCarrito('${producto.codigo}')">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>`;
}




function renderizarProductos(lista) {
  const contenedor = document.getElementById("grilla-productos");
  if (!contenedor) return;
  if (!lista.length) {
    contenedor.innerHTML = `<p class="text-center">No se encontraron productos.</p>`;
    return;
  }
  contenedor.innerHTML = lista.map(tarjetaProductoHTML).join("");
}





function inicializarCatalogo() {
  const contenedorFiltros = document.getElementById("filtros-categoria");
  const inputBusqueda = document.getElementById("buscador-productos");

  if (contenedorFiltros) {
    contenedorFiltros.addEventListener("click", (e) => {
      const boton = e.target.closest("[data-categoria]");
      if (!boton) return;
      contenedorFiltros
        .querySelectorAll("[data-categoria]")
        .forEach((b) => b.classList.remove("active"));
      boton.classList.add("active");
      renderizarProductos(filtrarProductosPorCategoria(boton.dataset.categoria));
    });
  }

  if (inputBusqueda) {
    inputBusqueda.addEventListener("input", (e) => {
      renderizarProductos(buscarProductos(e.target.value));
    });
  }

  renderizarProductos(PRODUCTOS);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("grilla-productos")) {
    inicializarCatalogo();
  }
});
