let askAgain = true
do {
  let valorTotal = prompt("Ingrese el valor total de la compra:")
  let cuotas = prompt("Ingrese el numero de cuotas, las disponibles son 3, 6, 9 y 12:")
  let cuota1 = "3"
  let cuota2 = "6"
  let cuota3 = "9"
  let cuota4 = "12"

  let valorCuotas = 0
  if (isNaN(valorTotal) == true || valorTotal == "") {
    alert("Los datos ingresados son incorrectos, vuelva a ingresar los datos.")
  } else if (isNaN(cuotas) == true || cuotas == "") {
    alert("Los datos ingresados son incorrectos, vuelva a ingresar los datos.")
  } else if (
    cuotas !== cuota1 && cuotas !== cuota2 && cuotas !== cuota3 && cuotas !== cuota4) {
    alert("Cuota no disponible")
  } else {
    valorCuotas = valorTotal / cuotas
    alert("El valor a pagar por cuota es: " + valorCuotas)
    askAgain = false
  }
} while (askAgain)


// No me salio como usted me dijo, disculpe, me salió con la forma de arriba


// let askAgain = true;

// do {
// let valorTotal = prompt("Ingrese el valor total de la compra:");
// let cuotas = prompt("Ingrese el numero de cuotas, las disponibles son 3, 6, 9 y 12:");
// let valorCuotas = 0;
// if (isNaN(valorTotal) == true || valorTotal == "") {
// alert("Los datos ingresados son incorrectos, vuelva a ingresar los datos.");
// } else if (isNaN(cuotas) == true || cuotas == "") {
// alert("Los datos ingresados son incorrectos, vuelva a ingresar los datos.");
// } else { switch (cuotas) {
//   case 3:
//     valorCuotas = valorTotal / cuotas
//     alert('El valor a pagar por cuota es: ' + valorCuotas)
//     break;
//   case 6:
//     valorCuotas = valorTotal / cuotas
//     alert('El valor a pagar por cuota es: ' + valorCuotas)
//     break;
//   case 9:
//     valorCuotas = valorTotal / cuotas
//     alert('El valor a pagar por cuota es: ' + valorCuotas)
//     break;
//   case 12:
//     valorCuotas = valorTotal / cuotas
//     alert('El valor a pagar por cuota es: ' + valorCuotas)
//     break;
//   default:
//     alert ("Cuota no disponible, vuelva a ingresar la cantidad de cuotas")
//     cuotas = prompt("Ingrese el numero de cuotas, las disponibles son 6, 9 y 12:")
//     askAgain = false
//     break;
// }
//   }
// } while (askAgain);