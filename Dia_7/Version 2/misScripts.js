function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento);
    let valor = miElemento.value;
    // declaramos una variable para poder cambiar de un STR que seria la variable valor, para que sea una INT
    // declaremos otra variable: NumeroElemento que va a ser igual a un Number(), asi se cambia un STR a INT
    let NumeroElemento = Number(valor);

    return NumeroElemento
}

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

function ventaMaxima(array) {
    let maximo = 0;

    for (let ventas of array) {
        if (ventas > maximo) {
            maximo = ventas;
        }
    }
    return maximo;
}

function ventaMinima(array) {
    let minimo = array[0];

    for (let venta of array) {
        if (venta < minimo) {
            minimo = venta;
        }
    }
    return minimo;
}