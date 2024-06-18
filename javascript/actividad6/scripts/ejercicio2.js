const  precioOriginal = parseFloat(prompt(" ponga el precio del producto"));

const descuento = prompt(" defina el descuento que quiere aplicar \n 1-> descuento de 20% \n 2 -> descuento de 50% \n 3 -> descuento del 75%");
let precioFinal=0;


switch(descuento){

    case "1":
        precioFinal = precioOriginal-(precioOriginal*0.2);
        alert("El precio final despues del descuento es:"+ precioFinal);
        break;
    case "2":
        precioFinal = precioOriginal-(precioOriginal*0.5);
        alert("El precio final despues del descuento es:"+ precioFinal);
        break;
    case "3":
        precioFinal = precioOriginal-(precioOriginal*0.7);
        alert("El precio final despues del descuento es:"+ precioFinal);
        break;
        default:
            alert( "digite un valor valido")

}