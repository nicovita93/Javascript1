

const monto = document.getElementById('monto');
const tiempo = document.getElementById('tiempo');
const btnCalcular = document.getElementById('btnCalcular');
const llenarTabla = document.querySelector('#lista-tabla tbody');

btnCalcular.addEventListener('click', () => {
    calcularCuota(monto.value, tiempo.value);
})

function calcularCuota(monto, tiempo){

    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);
    mes_actual.add(1, 'month');    

    let pagoInteres=0, pagoCapital = 0, cuota = 0;

    cuota = monto * (Math.pow(1+4/100, tiempo)*4/100)/(Math.pow(1+4/100, tiempo)-1);

    for(let i = 1; i <= tiempo; i++) {

        pagoInteres = parseFloat(monto*(4/100));
        pagoCapital = cuota - pagoInteres;
        monto = parseFloat(monto-pagoCapital);

        //Formato fechas
        fechas[i] = mes_actual.format('DD-MM-YYYY');
        mes_actual.add(1, 'month');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fechas[i]}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${pagoCapital.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(row)
    }


    let boton = document.getElementById("btnCalcular");

    boton.onmousemove = () => {
        console.log("move")
    }

    let boton1 = document.getElementById("btnCalcular");

    boton1.addEventListener("click", respuestaClick)

    function respuestaClick() {
        alert("Calculo de prestamos exitoso. En caso de querer avanzar con el mismo puede comunicarse con atencion al cliente. Gracias por elegirnos.")
    }
    
}