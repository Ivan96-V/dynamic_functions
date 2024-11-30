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
    let miElemento = document.getElementById(elemento);
    let valor = miElemento.value;
    // declaramos una variable para poder cambiar de un STR que seria la variable valor, para que sea una INT
    // declaremos otra variable: NumeroElemento que va a ser igual a un Number(), asi se cambia un STR a INT
    let NumeroElemento = Number(valor);

    return NumeroElemento
}
// funcion para calcular el total de ventas de cada sucursal
function calcular() {
    //Creamos un array vacio para agregarle sus elementos luego
    let ventas = [];

    // nombramos cada sucursal con la misma variable, solo le cambiamos su indice.
    // para que se agregue automaticamente.
    ventas[0] = extraerNumeroDesdeElemento('ventasTienda1');
    ventas[1] = extraerNumeroDesdeElemento('ventasTienda2');
    ventas[2] = extraerNumeroDesdeElemento('ventasTienda3');
    ventas[3] = extraerNumeroDesdeElemento('ventasTienda4');
    ventas[4] = extraerNumeroDesdeElemento('ventasTienda5');
    ventas[5] = extraerNumeroDesdeElemento('ventasTienda6');

    // llamamos a la funcion sumarTotales para ue sume el total de cada sucursal
    let totalVentas = sumarTotales(ventas);
    let textoSalida = 'Total de ventas: ' + totalVentas + ' | Venta mas alta: ' + ventaMaxima(ventas) + ' | Venta minima: ' + ventaMinima(ventas);

    document.getElementById('parrafoSalida').textContent = textoSalida;
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

