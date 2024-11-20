function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento);
    let valor = miElemento.value;
    // declaramos una variable para poder cambiar de un STR que seria la variable valor, para que sea una INT
    // declaremos otra variable: NumeroElemento que va a ser igual a un Number(), asi se cambia un STR a INT
    let NumeroElemento = Number(valor);

    return NumeroElemento
}

function calcular() {
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6

    ventas1 = extraerNumeroDesdeElemento('ventasTienda1');
    ventas2 = extraerNumeroDesdeElemento('ventasTienda2');
    ventas3 = extraerNumeroDesdeElemento('ventasTienda3');
    ventas4 = extraerNumeroDesdeElemento('ventasTienda4');
    ventas5 = extraerNumeroDesdeElemento('ventasTienda5');
    ventas6 = extraerNumeroDesdeElemento('ventasTienda6');

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;
    let textoSalida = 'Total de ventas: ' + totalVentas;

    document.getElementById('parrafoSalida').textContent = textoSalida;

}