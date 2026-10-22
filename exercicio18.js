let estoque = 4;
let quantidadePedida = 6;

if (quantidadePedida <= 0) {
    console.log("Pedido invalido");
} else if (quantidadePedida <= estoque) {
    estoque = estoque - quantidadePedida;
    console.log("Venda autorizada");
    console.log(`Estoque restante: ${estoque}`);
} else {
    console.log("Estoque insuficiente");
}