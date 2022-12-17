import { Vista } from "./vista.js";

const vista = new Vista();

if(localStorage.getItem("carrito") == null){
    var carrito = [];
}else{
    var carrito = JSON.parse(localStorage.getItem("carrito"));
}


$(document).ready(function(){

    vista.main();
    // Click para el logo
    $(document).on("click","#Logo",function(){
        vista.main();
    });
    // Click para las categorias
    $(document).on("click","#Mujer",function(){
        cambiarCategoria("Mujer");
    });
    $(document).on("click","#Hombre",function(){
        cambiarCategoria("Hombre");
    });
    $(document).on("click","#Joyeria",function(){
        cambiarCategoria("Joyeria");
    });
    $(document).on("click","#Electronica",function(){
        cambiarCategoria("Electronica");
    });
    $(document).on("click","#Productos",function(){
        mostrarTodos();
    });
    // Click para el carrito
    $(document).on("click","#Carrito",function(){
        vista.carrito(carrito);
    });

    $(document).on("click","#anadir-carrito",function(){
        var id = $(this).siblings("#id-producto").val();
        var size = $(this).siblings(".tallas").children("#talla").val()

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>añadirProductosCarrito(json, size, carrito))
        
    });

    $(document).on("click", "#eliminar-producto", function(){
        var id = $(this).parent().siblings("#id-producto").val();
        eliminarDelCarrito(id);
    });

    // Click para los productos
    $(document).on("click",".producto-img",function(){
        var id = $(this).siblings("#id-producto").val();
        verProductoIndividual(id);
    });
    $(document).on("click",".producto-text",function(){
        var id = $(this).siblings("#id-producto").val();
        verProductoIndividual(id);
    });

    // Vista registro
    $(document).on("click",".fa-user-astronaut",function(){
        vista.login();
    });

    $(document).on("click","#registrarse",function(){
        vista.registro();
    });

    $(document).on("click","#logearse",function(){
        vista.login();
    });

    $(document).on("click","#btn-login",function(){
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    });

    $(document).on("click","#btn-registro",function(){
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                email:'John@gmail.com',
                username:'johnd',
                password:'m38rmF$',
                name:{
                    firstname:'John',
                    lastname:'Doe'
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log("Se ha registrado correctamente "+json))
    });

    // ordenar productos
    $(document).on("click", "#btn-filter", function() {
        var ordenar = $(this).siblings("#sort").val();
        var categoria = $(this).parent().siblings("#type-sort").val();
        ordenarProductos(ordenar, categoria);
    });

    // actualizar productos
    $(document).on("click", ".btn-actualizar", function() {
        var id = $(this).attr("data-id");
        var quantity = $(this).siblings(".quantity").val();
        actualizarCantidad(id, quantity, carrito);
    });

});
// Funcion para cambiar las categorias
var categoria;
function cambiarCategoria(category, sort="asc"){

    if(category == "Mujer"){
        categoria = "women\'s%20clothing";

    }else if(category == "Hombre"){
        categoria = "men\'s%20clothing";

    }else if(category == "Joyeria"){
        categoria = "jewelery";

    }else if(category == "Electronica"){
        categoria = "electronics";

    }
    fetch(`https://fakestoreapi.com/products/category/${categoria}?sort=${sort}`)
        .then(res=>res.json())
        .then(json=>vista.productos(json, category))

}

// Mostrar todos los productos
function mostrarTodos(sort="asc"){
    fetch(`https://fakestoreapi.com/products?sort=${sort}`)
        .then(res=>res.json())
        .then(json=>vista.productos(json))
}

// Funcion para ver producto
function verProductoIndividual(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>vista.soloProducto(json))
}

// Funcion para añadir productos al carrito
function añadirProductosCarrito(producto, size, carrito){
    var productoCarrito = {
        id: producto.id,
        title: producto.title,
        price: producto.price,
        image: producto.image,
        size: size,
        cantidad: 1
    };
    var existe = false;
    for(var i = 0; i < carrito.length; i++){
        if(carrito[i].id == productoCarrito.id){
            existe = true;
            carrito[i].cantidad++;
        }
    }

    if(!existe){
        carrito.push(productoCarrito);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Funcion para elimicar productos del carrito
function eliminarDelCarrito(id){
    for(var i = 0; i < carrito.length; i++){
        if(carrito[i].id == id){
            carrito.splice(i, 1);
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    vista.carrito(carrito);
}

// Funcion para ordenar productos
function ordenarProductos(sort, category){
    if(category == "Todos"){
        cambiarOrdenProductos(sort);
    }
    else{
        cambiarCategoria(category, sort);
    }
}

function cambiarOrdenProductos(sort="asc") {
    fetch(`https://fakestoreapi.com/products?sort=${sort}`)
        .then(res=>res.json())
        .then(json=>vista.productos(json))
}

// Funcion para actualizar cantidad de productos
function actualizarCantidad(id, quantity, carrito){
    for(var i = 0; i < carrito.length; i++){
        if(carrito[i].id == id){
            carrito[i].cantidad = quantity;
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    vista.carrito(carrito);
}
