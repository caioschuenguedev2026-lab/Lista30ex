let valorCompra = 150;
let clienteVIP = true;
let valorFinal = valorCompra;

if (valorCompra >= 200 || clienteVIP) {
    valorFinal = valorCompra - valorCompra * 0.20;
}

console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
