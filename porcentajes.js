function calcularPrecioDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return (precioConDescuento);
}

function finalPriceWithDiscount() {
 const inputPrice = document.getElementById("inputPrecio");
 const priceValue = inputPrice.value;
 const inputDiscount = document.getElementById("inputDescuento");
 const discountValue = inputDiscount.value;

 const precioConDescuento = calcularPrecioDescuento(priceValue, discountValue);
 /*Para escribir algo en HTML desde JAVASCRIPT se puede usar innerText, ambas formas de sintaxis son válidas, la que está como comentario es siguiendo el ejemplo del curso
const ResultP= document.getElementById("ResultP");
ResultP.innerText = "`El precio con descuento es de ";*/

 document.getElementById("ResultP").innerText = `El precio con descuento es de $${precioConDescuento}.`
/*O concatenando de manera "tradicional" queda: "El precio con descuento son: $" + precioConDescuento;*/
}

function calcularPorcentajeDescuento (precioInicial, precioFinal) {
    const porcentaje = (precioFinal * 100) / precioInicial;
    const porcentajeDescuento = 100 - porcentaje;
    return porcentajeDescuento;
}


function percentOfDiscount() {
    const inputSinDescuento = document.getElementById("inputSinDescuento");
    const sinDescuentoValue = inputSinDescuento.value;
    const inputPriceF = document.getElementById("inputPrecioF");
    const priceFValue = inputPriceF.value;


    const porcentajeConDescuento = (calcularPorcentajeDescuento(sinDescuentoValue, priceFValue)).toFixed(1);

    document.getElementById("ResultPer").innerText = `El porcentaje de descuento es del ${porcentajeConDescuento}%.`

}