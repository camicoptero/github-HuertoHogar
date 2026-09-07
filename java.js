console.log("hola");

const LLAVE = "carrito";

const section = document.getElementById("test_1");
console.log(section);

const contenedorCard = document.createElement("div");
contenedorCard.className="contenedor-card"

productos = [
        {
            "id":1,
            "nombre":" Manzanas Fuji",
            "imagen":"https://jumbocl.vtexassets.com/arquivos/ids/357731-250-250/Manzana-Fuji-granel.jpg?v=638776720527670000",
            "descripcion":"Descripción: Descripción: Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.",
                                
            "precio":"1200 x kilo"

        }





]




for (const i of productos){
    section.appendChild(contenedorCard);

    const nuevoDiv = document.createElement("div");
    nuevoDiv.className = "card";
    contenedorCard.appendChild(nuevoDiv);

    const titulo_producto = document.createElement("h1")
    titulo_producto.textContent = i.nombre;
    nuevoDiv.appendChild(titulo_producto);
    
    const imgProducto = document.createElement("img");
    imgProducto.src = i.imagen;
    imgProducto.className = "imgProducto";
    nuevoDiv.appendChild(imgProducto);

    const desc_producto = document.createElement("h3");
    desc_producto.textContent = i.descripcion;
    nuevoDiv.appendChild(desc_producto);


    const precio_Producto = document.createElement("h3");
    precio_Producto.textContent= i.precio;
    nuevoDiv.appendChild(precio_Producto);

    const btnAgregarAlCarro = document.createElement("button");
    btnAgregarAlCarro.textContent = "se agrego al carrito"
    btnAgregarAlCarro.className = "btn btn-primary mt-3";
    btnAgregarAlCarro.addEventListener("click",function(){
        guardarProducto(i);
    })
    nuevoDiv.appendChild(btnAgregarAlCarro)
}
