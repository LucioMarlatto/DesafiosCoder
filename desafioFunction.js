let askAgain = true;
let valorCuotas = 0;
let cuotaUno = "3";
let cuotaDos = "6";
let cuotaTres = "9";
let cuotaCuatro = "12";
do {
    let valorTotal = prompt("Ingrese el valor total de la compra:");
    if (isNaN(valorTotal) == true || valorTotal == "") {
        alert("Los datos ingresados son incorrectos, vuelva a ingresar los datos.");
  }
    function cuotas() {
      let cuotas = prompt("Ingrese el numero de cuotas, las disponibles son 3, 6, 9 y 12:");
      if (isNaN(cuotas) == true || cuotas == "") {
          alert(
              "Los datos ingresados son incorrectos, vuelva a ingresar los datos.");
            } else if (cuotas !== cuotaUno && cuotas !== cuotaDos && cuotas !== cuotaTres && cuotas !== cuotaCuatro) {
                alert("Cuota no disponible");
            } else {
                valorCuotas = valorTotal / cuotas;
                alert("El valor a pagar por cuota es: " + valorCuotas);
                askAgain = false;
            }
            return cuotas;
        }
        cuotas ()
    } while (askAgain);

    
// let primerNumero = prompt ("Ingrese un numero")
// let segundoNumero = prompt ("Ingrese otro numero")
// function division (primerNumero, segundoNumero) {
//     return primerNumero / segundoNumero
// }
// let resultado = division (primerNumero, segundoNumero)

// alert ("El resultado es: "+resultado)
