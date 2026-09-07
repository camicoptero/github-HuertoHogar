<<<<<<< HEAD
# HuertoHogar 🥕

Este es mi proyecto para el ramo de Fullstack (DSY1104), caso Forma A: una tienda online de
=======
# HuertoHogar 

Este es nuestro proyecto para el ramo de Fullstack 2, caso Forma A: una tienda online de
>>>>>>> ee8fc079e15c67823c4f2d8e32e73e20e621dc5c
productos frescos del campo, llamada **HuertoHogar**. La idea es que un usuario pueda
registrarse, ver el catálogo, agregar productos al carrito, confirmar un pedido y hacerle
seguimiento hasta que llega a su casa.

Por ahora está hecho con HTML + Bootstrap + JavaScript puro, guardando todo en `localStorage`
<<<<<<< HEAD
del navegador (usuarios, carrito, pedidos, reseñas). No hay backend todavía — si el profe pide
persistencia real más adelante, esa parte queda para la carpeta `backend/`.

## Cómo verlo funcionando

No necesita instalación ni servidor. Basta con abrir:

```
frontend/pages/index.html
```

directamente en el navegador (o con la extensión Live Server de VS Code, si prefieres que las
rutas se comporten como en un servidor real).

## Cómo está organizado

Seguí una estructura parecida a la de otro proyecto mío (MediReservasApp), separando el
frontend por tipo de archivo y dejando cada función en su propio `.js`:

```
HuertoHogar/
├── frontend/
│   ├── assets/
│   │   ├── css/style.css     → colores y tipografías de la marca
│   │   ├── images/           → fotos reales del catálogo (sacadas del documento del caso)
│   │   └── js/
│   │       ├── auth.js       → registro e inicio de sesión
│   │       ├── perfil.js     → datos del usuario + historial de compras
│   │       ├── productos.js  → catálogo, filtros por categoría y buscador
│   │       ├── carrito.js    → agregar/quitar/modificar productos del carrito
│   │       ├── pedidos.js    → confirmar pedido y generar la boleta
│   │       ├── envios.js     → estado del envío (preparación → entregado)
│   │       ├── resenas.js    → reseñas y calificación de productos
│   │       ├── mapa.js       → listado de las 7 ciudades con tienda
│   │       ├── storage.js    → guardar/leer datos en localStorage
│   │       └── main.js       → cositas comunes a todas las páginas
│   └── pages/
│       ├── index.html
│       ├── catalogo.html
│       ├── carrito.html
│       ├── login.html
│       ├── registro.html
│       ├── perfil.html
│       ├── pedidos.html
│       └── nosotros.html
└── backend/                  → vacío por ahora, para cuando se valide requerimiento con servidor
```
=======
del navegador (usuarios, carrito, pedidos, reseñas). No hay backend todavía 

>>>>>>> ee8fc079e15c67823c4f2d8e32e73e20e621dc5c

## Sobre las imágenes

Las fotos de manzanas, naranjas, plátanos, zanahorias, espinacas, pimientos y la miel son las
mismas que vienen en el PDF del caso (Forma A), así que el catálogo se ve tal cual lo pide el
enunciado. El logo y la ilustración de la portada también son los oficiales del caso.

El catálogo quedó con los 7 productos que el documento detalla con ficha completa (foto,
precio, stock y descripción): Manzanas Fuji, Naranjas Valencia, Plátanos Cavendish, Zanahorias
<<<<<<< HEAD
Orgánicas, Espinacas Frescas, Pimientos Tricolores y Miel Orgánica. Por eso también saqué el
filtro de "Productos Lácteos": sin Leche Entera en el catálogo, esa categoría quedaba vacía.
=======
Orgánicas, Espinacas Frescas, Pimientos Tricolores y Miel Orgánica.
>>>>>>> ee8fc079e15c67823c4f2d8e32e73e20e621dc5c

## Paleta y tipografía (según el caso)

- Fondo: Blanco Suave `#F7F7F7`
- Acento principal: Verde Esmeralda `#2E8B57`
- Acento secundario: Amarillo Mostaza `#FFD700`
- Títulos: Marrón Claro `#8B4513`
- Tipografía de texto: Montserrat
- Tipografía de títulos: Playfair Display

Estos colores están puestos como variables CSS en `style.css` y pisan las variables propias de
Bootstrap, para que los componentes (botones, navbar, badges) salgan con la identidad de
HuertoHogar en vez de los colores azules por defecto.

## Pendientes

- Poner el link real del mapa embebido (Google My Maps) en `nosotros.html` — por ahora tiene
  un `src` de ejemplo que no apunta a nada.
<<<<<<< HEAD
- Ver con el profe si hay que sumar backend real (API + base de datos) para que los
  requerimientos de "más alcance" cuenten.
=======

>>>>>>> ee8fc079e15c67823c4f2d8e32e73e20e621dc5c
