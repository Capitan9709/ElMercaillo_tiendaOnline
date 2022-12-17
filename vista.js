export class Vista {
    // Vista principal ----
    main() {
        $("body").html(`
        ${this.header()}
        <main>
        <div id="carrousel">
            <img id="imagen-carrousel" src="./media/banderausa.jpg" alt="Imagen del carrousel">
        </div>
        <script src="./carrousel.js"></script>

        <div id="bienvenida">
            <h1>¡Bienvenid@ a El Mercaillo!</h1>
        </div>

        <div id="relleno">
            <div class="div1"><img src="./media/imagen1.jpg" alt="imagen stock"></div>
            <div class="div2"><img src="./media/imagen5.jpg" alt="imagen stock"></div>
            <div class="div3"><img src="./media/imagen3.jpg" alt="imagen stock"></div>
            <div class="div4"><img src="./media/imagen4.jpg" alt="imagen stock"></div>
            <div class="div6"><img src="./media/imagen6.jpg" alt="imagen stock"></div>
            <div class="div7"><img src="./media/imagen7.jpg" alt="imagen stock"></div>
            <div id="contenido-relleno">
                <p>Para mas fotos como estas siguenos en: </p>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
        <div id="presentacion">
            <img src="./media/notasfondomorao.jpg" alt="foto stock">
            <div id="contenido-presentacion">
                <h1>¡Bienvenid@ a El Mercaillo!</h1>
                <p>En nuestra tienda online encontraras todo tipo de productos a los mejores precios.
                     No te lo pienses y entra a nuestra tienda.</p>
            </div>
        </div>

        <div id="newsletter">
            <p>¡Subscribete a nosotros para no perderte ninguna oferta!</p>
            <form action="">
                <input type="email" placeholder="Escribe tu Email">
                <input type="submit" value="Subscribirse">
            </form>

        </main>
        ${this.footer()}
        `)
    }
    // Vista header ----
    header() {
        return `
        <header>
        <img id="Logo" src="./media/logo.png" alt="logo de la tienda 'el mercaillo'">

        <nav>
            <ul>
                <li><a id="Mujer">Mujer</a></li>
                <li><a id="Hombre">Hombre</a></li>
                <li><a id="Joyeria">Joyeria</a></li>
                <li><a id="Electronica">Electronica</a></li>
                <li><a id="Productos">Productos</a></li>
            </ul>
        </nav>

        <div id="iconos">
            <a id="Carrito"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a>
    
            <a id="Login"><i class="fa-sharp fa-solid fa-user-astronaut"></i></a>
            
        </div>
        </header>
        `}
    // Vista footer ----
    footer() {
        return `
        <footer>
        <div id="contenido-footer">
            <ul>
                <li class="titulo-lista-footer">Ayuda
                    <ul class="contenido-lista-footer">
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Envios</a></li>
                        <li><a href="#">Devoluciones</a></li>
                    </ul>
                </li>
                <li class="titulo-lista-footer">Nosotros
                    <ul class="contenido-lista-footer">
                        <li><a href="#">Quienes somos</a></li>
                        <li><a href="#">Trabaja con nosotros</a></li>
                        <li><a href="#">Prensa</a></li>
                    </ul>
                </li>
                <li class="titulo-lista-footer">Legal
                    <ul class="contenido-lista-footer">
                        <li><a href="#">Condiciones de uso</a></li>
                        <li><a href="#">Politica de privacidad</a></li>
                        <li><a href="#">Politica de cookies</a></li>
                    </ul>
                </li>
                <li class="titulo-lista-footer">Formas de Pago
                    <ul class="contenido-lista-footer">
                        <li id="footer-iconos">
                            <i class="fa-brands fa-cc-mastercard"></i>
                            <i class="fa-brands fa-cc-visa"></i>
                            <i class="fa-brands fa-cc-paypal"></i>
                        </li>
                    </ul>
                </li>
                <li class="titulo-lista-footer">Siguenos
                    <ul class="contenido-lista-footer">
                        <li id="footer-redes">
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </footer>
        `
    }
    // Vista productos ----
    productos(productos, type = "Todos"){
        var originalType = type;
        if(type == "Todos"){
            type = "Todos los Productos";
        }
        else if(type == "Mujer"){
            type = "Mujer";
        }
        else if(type == "Hombre"){
            type = "Hombre";
        }
        else if(type == "Joyeria"){
            type = "Joyeria";
        }
        else if(type == "Electronica"){
            type = "Electronica";
        }
        
        $("body").html(`
        ${this.header()}
        <main>
            <section id="productos">
            <input id="type-sort" type="hidden" value="${originalType}">
                <div class="products-text"> 
                    <h1>${type}</h1>
                </div>
                <div class="products-sort">
                    <select id="sort">
                        <option value="asc">Acendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                    <button id="btn-filter">Filtrar</button>
                </div>
                <div id="contenido-productos">
                    
                </div>
            </section>
        </main>
        ${this.footer()}`);

        productos.forEach(producto => {
            $("#contenido-productos").append(`
            <div class="producto">
                <input type="hidden" value="${producto.id}" text="${producto.id}" id="id-producto">
                <img class="producto-img" src="${producto.image}" alt="imagen del producto">
                <div class="producto-text">
                    <h2>${producto.title}</h2>
                    <p>${producto.price}€</p>
                </div>
            </div>
            `);
        });

    }
    // Vista producto ----
    soloProducto(producto){
        if(producto.category == "women's clothing" || producto.category == "men's clothing"){
            $("body").html(`
            ${this.header()}
            <main>
                <section id="solo-producto">
                    <div class="solo-producto">
                        <div class="solo-producto-img">
                            <img src="${producto.image}" alt="imagen del producto">
                        </div>
                        <div class="solo-producto-text">
                            <input type="hidden" value="${producto.id}" id="id-producto">
                            <h2>${producto.title}</h2>
                            <p>${producto.description}</p>
                            <p>${producto.price}€</p>
                            <div class="tallas">
                                <label for="talla">Talla:</label>
                                <select id="talla" name="talla">
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </div>
                            <button id="anadir-carrito" data-id="${producto.id}">Añadir al carrito</button>
                        </div>
                    </div>
                </section>
            </main>
            ${this.footer()}`);
        }else{
            $("body").html(`
            ${this.header()}
            <main>
                <section id="solo-producto">
                    <div class="solo-producto">
                        <div class="solo-producto-img">
                            <img src="${producto.image}" alt="imagen del producto">
                        </div>
                        <div class="solo-producto-text">
                            <input type="hidden" value="${producto.id}" id="id-producto">  
                            <h2>${producto.title}</h2>
                            <p>${producto.description}</p>
                            <p>${producto.price}€</p>
                            <button id="anadir-carrito">Añadir al carrito</button>
                        </div>
                    </div>
                </section>
            </main>
            ${this.footer()}`);
        }
        
    }

    // Vista carrito ----
    carrito(carrito){
        var total = 0;
        $("body").html(`
        ${this.header()}
        <main>
            <section id="carrito">
                <div class="carrito-text">
                    <h1>Carrito</h1>
                </div>
                <div class="carrito-productos">
                    
                    <ul class="lista-carrito">
                    </ul>

                    <div class="carrito-total">
                        <h2 id="calculo-total"></h2>
                        <button id="comprar">Comprar</button>
                    </div>
                </div>
                
            </section>
        </main>
        ${this.footer()}`);

        carrito.forEach(productoCarro => {
            $(".lista-carrito").append(`
            <li>
                <div class="carrito-producto">
                    <input type="hidden" value="${productoCarro.id}" id="id-producto">
                    <div class="carrito-producto-img">
                        <img src="${productoCarro.image}" alt="imagen del producto">
                    </div>
                    <div class="carrito-producto-text">
                        <h2>${productoCarro.title}</h2>
                        <p>${productoCarro.price}€</p>
                        
                        <input type="number" value="${productoCarro.cantidad}" class="quantity" data-id="${productoCarro.id}">
                        <button class="btn-actualizar" data-id="${productoCarro.id}">Actualizar</button>
                    </div>
                    <div class="carrito-producto-eliminar">
                        <button id="eliminar-producto" data-id="${productoCarro.id}">Eliminar</button>
                    </div>
                </div>
            </li>
            `);
            total += productoCarro.price*productoCarro.cantidad;
        });
        $("#calculo-total").html(`Total: ${total = total.toFixed(2)}€`);
    }

    // Vista login ----
    login(){
        $("body").html(`
        ${this.header()}
        <main>
            <section id="login">
                <div class="login-text">
                    <h1>Login</h1>
                </div>
                <div class="login-form">
                    <form action="">    
                        <label for="usuario">Usuario:</label>
                        <input type="text" name="usuario" id="usuario">
                        <label for="password">Contraseña:</label> 

                        <input type="password" name="password" id="password">
                        <button id="btn-login">Login</button>
                    </form>
                    <p>¿No tienes una cuenta? <a id="registrarse">Registrate Aqui</a></p>
                </div>
            </section>
        </main>
        ${this.footer()}`)};

    // Vista registro ----
    registro(){
        $("body").html(`
        ${this.header()}
        <main>
            <section id="registro">
                <div class="registro-text">
                    <h1>Registro</h1>
                </div>
                <div class="registro-form">
                    <form action="">

                        <label for="usuario">Usuario:</label>
                        <input type="text" name="usuario" id="usuario">

                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email">

                        <label for="password">Contraseña:</label>
                        <input type="password" name="password" id="password">

                        <button id="btn-registro">Registro</button>
                    </form>
                    <p>¿Tienes Cuenta? <a id="logearse">Inicia Sesion</a></p>
                </div>
            </section>
        </main>
        ${this.footer()}`)};

}