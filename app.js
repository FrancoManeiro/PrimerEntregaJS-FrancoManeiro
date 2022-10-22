let nombreUsuario = prompt("ingrese su nombre");
alert("hola " + nombreUsuario + ",  bienvenido");
alert("Requerimos de su colaboración para su ayuda, ¿que seguro quiere realizar?");

let eleccionSeguro

while (eleccionSeguro != "auto" && eleccionSeguro != "moto" && eleccionSeguro != "casa" && eleccionSeguro != "local"){
    eleccionSeguro = prompt ("Seleccione entre: auto, moto, casa, local").toLowerCase();
    switch (eleccionSeguro) {
        case "auto":
            alert ("Usted está por asegurar un auto");
            const auto = 2500;
            let seleccionUsuario = Number (prompt("¿Que cantidad quiere asegurar?"));
            alert("Cada seguro tiene un costo de 2500 pesos");
            let resultadoMulti = seleccionUsuario * auto;
            alert("Usted deberá abonar " + resultadoMulti +  " pesos \n ¿Desea confirmar compra?");
            alert("Usted está siendo redireccionado. Gracias por su compra!")            
            break;
        case "moto":
            alert("Usted está por asegurar una moto")
            const moto = 1000;
            let seleccionUsuarioMoto = Number (prompt("¿Que cantidad quiere asegurar?"));
            alert("Cada seguro tiene un costo de 1000 pesos");
            let resultadoMultiMoto = seleccionUsuarioMoto * moto;
            alert("Usted deberá abonar " + resultadoMultiMoto +  " pesos \n ¿Desea confirmar compra?");
            alert("Usted está siendo redireccionado. Gracias por su compra!")
            break;
        case "casa":
            alert ("Usted está por asegurar una casa");
            const casa = 6000;
            let seleccionUsuarioCasa = Number (prompt("¿Que cantidad quiere asegurar?"));
            alert("Cada seguro tiene un costo de 6000 pesos");
            let resultadoMultiCasa = seleccionUsuarioCasa * casa;
            alert("Usted deberá abonar " + resultadoMultiCasa +  " pesos \n ¿Desea confirmar compra?");
            alert("Usted está siendo redireccionado. Gracias por su compra!")
            break;
        case "local": 
            alert ("Usted está por asegurar un local"); 
            const local = 10000;
            let seleccionUsuarioLocal = Number (prompt("¿Que cantidad quiere asegurar?"));
            alert("Cada seguro tiene un costo de 10000 pesos");
            let resultadoMultiLocal = seleccionUsuarioLocal * local;
            alert("Usted deberá abonar " + resultadoMultiLocal +  " pesos \n ¿Desea confirmar compra?");
            alert("Usted está siendo redireccionado. Gracias por su compra!")
            break;
        default:
            alert("Usted ingreso un valor incorrecto");
            break;
    }
}


