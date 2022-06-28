const carrito = [];

for (var i = 0; i < 4; i++) {
  carrito.push(
    prompt(
      "Que zapatillas vas a llevar? Las disponibles son Nike, Adidas, Puma."
    )
  );
  break
}
alert ("Compraste las zapatillas "+ carrito+ " que salen $4000")