const products = [
    {
      createdAt: -172800000,
      name: "Nike Juniper Trail 2 GORE-TEX PRO",
      image: "https://nikearprod.vtexassets.com/arquivos/ids/877894-1200-1200?width=1200&height=1200&aspect=true",
      price: 199999,
      description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      category: "mountain",
      id: "38"
    },
    {
      createdAt: 1717113600000,
      name: "Clifton 9",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660043072-hoka-bondi-8-zapatillas-running-1660043036.png?crop=1.00xw:0.823xh;0,0.0783xh&resize=980:*",
      price: 100000,
      description: "La novena versión de nuestra galardonada gama Clifton ofrece una versión más ligera y con más amortiguación que nunca. Las nuevas Clifton 9 reducen el peso al tiempo que añaden 3 mm de altura; además, ofrecen una experiencia revitalizada bajo los pies con una nueva espuma con capacidad de respuesta y un diseño de suela mejorado",
      category: "running",
      id: "43"
    },
    {
      createdAt: 1716076800000,
      name: "Nike Invencible 3 pro",
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28810afe-6b6a-4f6a-beb4-701a3539bb02/invincible-3-zapatillas-de-running-asfalto-9lqlcK.png",
      price: 365100,
      description: "Test de imagenmmmmmm",
      category: "running",
      id: "44"
    },
    {
      createdAt: -27076636800000,
      name: "Nike Air Force 1 07",
      image: "https://nikearprod.vtexassets.com/arquivos/ids/659742-1200-1200?width=1200&height=1200&aspect=true",
      price: 209999,
      description: "La luminosidad sigue viva con este calzado de básquetbol original. La fusión de la comodidad de la duela y un estilo externo a la cancha le da un giro fresco a lo que mejor conoces: una confección inspirada en los años 80, detalles audaces y un estilo basquetbolero puro.",
      category: "moda",
      id: "46"
    },
    {
      createdAt: 1719276313261,
      name: "Nike Pegasus 39 Shield",
      image: "https://static.nike.com/a/images/t_default/c7cee966-efba-4fc4-99ce-ab2ccacf9f81/infinityrn-4-gore-tex-zapatillas-de-running-asfalto-impermeables-BcdT0P.png",
      price: 167999,
      description: "Tu caballo alado regresa para ayudarte a avanzar bajo la lluvia. El acabado repelente al agua te ayuda a mantener los pies secos, mientras que una sensación cómoda, similar al tejido Fleece, en el interior mantiene los pies abrigados para carreras en climas",
      category: "running",
      id: "47"
    },
    {
      createdAt: 1648598400000,
      name: "Nike SB Dunk Low Pro",
      image: "https://nikearprod.vtexassets.com/arquivos/ids/914361-1200-1200?width=1200&height=1200&aspect=true",
      price: 209000,
      description: "El Nike SB Dunk Low Pro ofrece el aspecto icónico del Dunk con un estilo de perfil bajo. La unidad Zoom Air en el talón y la lengüeta acolchada proporcionan un nivel de comodidad ideal para practicar skate.",
      category: "moda",
      id: "48"
    }
]

const tableBodyHTML = document.getElementById("table-body"); 
// Pintar todos los productos inicialmente
renderProducts(products)

function renderProducts(ARRAY_TO_RENDER) {

    tableBodyHTML.innerHTML = ''

    ARRAY_TO_RENDER.forEach((prod, indice) => {

        tableBodyHTML.innerHTML += `<tr>
            <td class="product-image">
                <img src="${prod.image}" alt="${prod.name}">
            </td>
            <td class="product-name">
                ${prod.name}
            </td>
            <td class="product-description">
    
                <div class="description" title="${prod.description}">
                    ${prod.description}
                </div>
    
            </td>
            <td class="product-date">
                ${prod.createdAt}
            </td>
            <td class="product-price">
                $ ${prod.price}
            </td>
            <td class="product-actions">
                <button class="btn btn-primary btn-sm">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteProduct('${prod.id}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
    </tr>`
        // PARA EJERCICIO DE TAREAS USAR "indice" en deleteProduct


    })
}
// Recorrer el array y hacer un console.log de cada producto


// Llamar una función específica para borrar productos
function deleteProduct(identificador) {

    // Obtener el id del producto a eliminar
    console.log("Id recibido", identificador)

    // Poder identificar el indice del producto a eliminar a través de algún método 
    const index = products.findIndex((producto) => {
        // Condicion yo return un true
        if(identificador === producto.id) {
            return true
        } else {
            return false
        }
    })
    // Eliminar el producto del array con splice en base a su ubicación
    products.splice(index, 1)
    // Array.splice(indice, 1) -> Elimina un elemento del array
    renderProducts(products)
}

// #Search product

function searchProduct(evt) {
    // Recibo un evento en este caso del tipo oninput
    console.log(evt.target.value)

    let text = evt.target.value;  // "IkE"

    text = text.toLowerCase()    // "ike"

    // Primero tengo que buscar en mi array los elementos que tengan como valor Name el texto que la persona a escrito
    const productosFiltrados = products.filter((PRODUCTITO) => {
        const nombre = PRODUCTITO.name.toLowerCase();
        const descripcion = PRODUCTITO.description.toLowerCase();
        // nike invecible 3
        //
        if(  nombre.includes(text) || descripcion.includes(text) ) {

            return true

        } else {
            return false
        }
    })


    console.log(productosFiltrados)


    renderProducts(productosFiltrados)



}

// const tasks_list = []

// function agregarTarea() {
//     const taskInputHTML = document.getElementById("task")

//     const tarea = taskInputHTML.value;

//     if(tarea.length < 3) {
//         // alert("La t")
//         return
//     }

//     console.log(tarea)
//     //agrego la tarea al array
// }


// // usando en forEach el indice y llamando esta función con dicho valor 
// function borrarTarea(index) {
//     // Directamente borramos en base al index recibido
// }


