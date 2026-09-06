# HuertoHogar 

Este es nuestro proyecto para el ramo de Fullstack 2, caso Forma A: una tienda online de
productos frescos del campo, llamada **HuertoHogar**. La idea es que un usuario pueda
registrarse, ver el catálogo, agregar productos al carrito, confirmar un pedido y hacerle
seguimiento hasta que llega a su casa.

Por ahora está hecho con HTML + Bootstrap + JavaScript puro, guardando todo en `localStorage`
del navegador (usuarios, carrito, pedidos, reseñas). No hay backend todavía 


## Sobre las imágenes

Las fotos de manzanas, naranjas, plátanos, zanahorias, espinacas, pimientos y la miel son las
mismas que vienen en el PDF del caso (Forma A), así que el catálogo se ve tal cual lo pide el
enunciado. El logo y la ilustración de la portada también son los oficiales del caso.

El catálogo quedó con los 7 productos que el documento detalla con ficha completa (foto,
precio, stock y descripción): Manzanas Fuji, Naranjas Valencia, Plátanos Cavendish, Zanahorias
Orgánicas, Espinacas Frescas, Pimientos Tricolores y Miel Orgánica. Por eso también saqué el
filtro de "Productos Lácteos": sin Leche Entera en el catálogo, esa categoría quedaba vacía.

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
- Ver con el profe si hay que sumar backend real (API + base de datos) para que los
  requerimientos de "más alcance" cuenten.
