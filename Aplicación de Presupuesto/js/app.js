const ingresos = [
    new Ingreso('Salario', 2000000.00),
    new Ingreso('Venta de Software', 300.000)
];

const egresos = [
    new Egreso('Administración', 100.000),
    new Egreso('Netflix', 20.000)
];

let cargarApp = () =>{
    cargarCabecero();
}

let totalIngresos = () =>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () =>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 2 });
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('es-CO', {style: 'percent', minimumFractionDigits: 2});
}