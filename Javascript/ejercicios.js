//edad//

function calcularEdad(fecha_nacimiento) {
    let hoy = new Date();
    let cumpleanos = new Date(fecha_nacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

let edad = calcularEdad("1993/09/15");
if(edad >= 18){
    alert("Eres mayor de edad ");
}else{
    alert("Eres menor de edad ");
}

// carrito //


let total = 0;
let precio = 0;
let otroProducto = false;

function agregarAlCarrito() {

    do {

        let producto = prompt("¿Que comida quieres agregar al carrito? Elige entre empanada, pizza o combo?", "Ej: combo");
        let cantidad = parseInt(prompt("¿Que cantidad queres?", 0));

        switch (producto) {
            case "empanada":
                precio = 150;
                break;
            case "pizza":
                precio = 600;
                break;
            case "combo":
                precio = 700;
                break;
            default:
                alert("Algunos de los datos ingresados no son correctos");
                precio = 0;
                cantidad = 0;
        }

        total = total + precio * cantidad;
        otroProducto = confirm("¿Queres sumar otro producto?")

    } while (otroProducto);
    console.log(total);
}

function aplicarDescuento(total) {
    if (total >= 5000) {
        total = total * 0.80;
    }

    return total
}

function calcularEnvio(total) {
    let confirmacion = confirm("¿Necesitas que te lo enviemos? en caso afimarmativo presionar aceptar");

    if (confirmacion && total >= 2000) {
      alert("Tenés envio gratis. El total de tu pedido sera $" + total);
    } else if (confirmacion && total < 2000 && total != 0) {
      total = total + 150;
      alert("El envío cuesta $150. El total de tu pedido sera $" + total);
    } else {
      alert("El total de tu pedido sera $" + total);
    }

    return total;
}


agregarAlCarrito();
calcularEnvio(aplicarDescuento(total));


/*/array numeros//

const numeros = [1,2,3,4,5];
let resultado = numeros [2] * numeros [2]
console.log (resultado)

//array nombres//
const nombres = ["juan", "pedro" ,"carlos" ,"ana"];

console.log (nombres)

nombres.pop()

nombres.shift()

nombres.splice()
console.log (nombres)

*/
