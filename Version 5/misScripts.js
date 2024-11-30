function createManyStores(contenedorID, min, storeQuantity) {
    // crear en donde se va a a mostrar todas las tiendas segun el ID en el documento HTML
    let idDocker = document.getElementById(contenedorID);

    // Crear un loop For para asi crear las cantidades de tiendas que sean necesarias
    for (let store = 1; store <= storeQuantity; store++) {

        // Crear el texto que va a mostrar en el <div> de la parte HTML
        let etiquetText = 'Tienda ' + store;

        // Crear parrafo que va a llevar en el label tiendas con la funcion createPstore.
        let CreateParagraph = createPstore(etiquetText, min);

        // agregar el parrafo al contenedor.
        idDocker.appendChild(CreateParagraph);
    }
}

function createPstore(textlabel, valueMin) {
    // crear la etiqueta parrafo
    let etiquetaP = document.createElement('p');

    // crear etiqueta label
    let etiquetaLabel = document.createElement('label');
    etiquetaLabel.innerText = textlabel + ': ';
    // crear atributo de la eiqueta label, en ese caso el for dependiendo del parametro de la funcion.
    etiquetaLabel.setAttribute('for', textlabel);

    // crear etiqueta input
    let etiquetaInput = document.createElement('input');
    // crear atributos de input.
    // Crear el atributo TYPE, y que sea de tipo NUMBER, para que sea un INT cuando el usuario ingrese lo que necesite
    etiquetaInput.setAttribute('type', 'number');
    // Crear el atributo ID, con su entrada idLabel ya que el idLabel es el parametro que vamos a ingresar al momento de crear las etiquetas
    etiquetaInput.setAttribute('id', textlabel);
    // Crear el atribut VALUe para que el input tenga un numero determinato al crearse
    etiquetaInput.setAttribute('value', 0);
    // Crear el atrbuto MIN para que sea el valor minimo que tenga
    etiquetaInput.setAttribute('min', valueMin);
    


    // agregar la etiqueta Label y la etiqueta Input al Parrafo
    etiquetaP.appendChild(etiquetaLabel);
    etiquetaP.appendChild(etiquetaInput);


    // Devolver la etiqueta <p> con <label> e <input>.
    return etiquetaP;
}

function extraerNumeroDesdeElemento(elemento) {
    let valor = elemento.value;
    // declaramos una variable para poder cambiar de un STR que seria la variable valor, para que sea una INT
    // declaremos otra variable: NumeroElemento que va a ser igual a un Number(), asi se cambia un STR a INT
    let NumeroElemento = Number(valor);

    return NumeroElemento
}
// funcion para calcular el total de ventas de cada sucursal
function calcular() {
    //Creamos un array vacio para agregarle sus elementos luego
    let ventas = [];
    // Creamos la variable para que funcione de contador para que pase por todo el array
    let VentasPosicion = 0
    // Variable que contiene el Id del DIV
    let VentaElemento =  document.getElementById('itemStore');

    // hacer un FOR of loop para iterar justamente en el parrafo por eso usamos el index [1] que es input del ususario para calcular la suma
    for (let itemVenta of VentaElemento.children) {
        let valorVenta = extraerNumeroDesdeElemento(itemVenta.children[1]);
        ventas[VentasPosicion] = valorVenta;
        VentasPosicion = VentasPosicion + 1;
    }
    
    let totalVentas = sumarTotales(ventas);
    let ventaMayor = ventaMaxima(ventas);
    let ventaBaja = ventaMinima(ventas);

    for (itemSalida of VentaElemento.children) {
        let usuarioEntrada = extraerNumeroDesdeElemento(itemSalida.children[1]);

        itemSalida.children[1].className = 'regresarMayor';

        if (usuarioEntrada == ventaMayor) {         
            itemSalida.children[1].className = 'menuImputMayor';
        }

        if (usuarioEntrada == ventaBaja) {
            itemSalida.children[1].className = 'menuImputMenor';
        }

    }


    let mensajeSalida = 'Total de ventas: ' + totalVentas;

    let elementoSalida = document.getElementById('parrafoSalida');

    elementoSalida.textContent = mensajeSalida;

    
}

// funcion para sumar de manera dinamica las ventas de cada sucursal.
function sumarTotales(array) {
    let suma = 0;

    for (let ventas of array) {
        suma = suma + ventas;
    }
    return suma;
}

// funcion para saber la venta mas alta de la sucursal
function ventaMaxima(array) {
    let maximo = 0;

    for (let ventas of array) {
        if (ventas > maximo) {
            maximo = ventas;
        }
    }
    return maximo;
}

// funcion para saber la venta mas baja de la sucursal
function ventaMinima(array) {
    let minimo = array[0];

    for (let venta of array) {
        if (venta < minimo) {
            minimo = venta;
        }
    }
    return minimo;
}

