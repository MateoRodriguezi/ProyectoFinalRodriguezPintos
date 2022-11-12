let ingresoAcumulado = 0;
let acumuladorGastos = 0;

function saldo(ingresos,gastos){
    return ingresos - gastos;
}


for(let i=1; i<5; i++){
    alert("Describa el ingreso N° " + i)
    let conceptoIngreso = prompt("Concepto del ingreso. Si desea salir sin colocar más nada, escriba: ESC ");
    conceptoIngreso = conceptoIngreso.toUpperCase();

    if (conceptoIngreso != "ESC"){
        let montoIngreso = prompt("Monto del ingreso:");
        ingresoAcumulado = ingresoAcumulado + parseInt(montoIngreso);

        while (isNaN(montoIngreso) == true || parseInt(montoIngreso) < 0){
            alert("ERROR. Sólo son validos carácteres numéricos mayores o iguales a 0.");
            montoIngreso = prompt("Coloque nuevamente el monto del ingreso: ");
            if (isNaN(montoIngreso) == false && (parseInt(montoIngreso) > 0)){
                ingresoAcumulado = ingresoAcumulado + parseInt(montoIngreso);
                break;
            }
        }
    }
    else {
        break;
    }
}

for(let i=1; i<5; i++){
    alert("Describa el gasto N° " + i)
    let conceptoGasto = prompt (" Si desea salir sin colocar mas conceptos, escriba: ESC ");
    conceptoGasto = conceptoGasto.toUpperCase();

    if (conceptoGasto != "ESC"){
        let montoGasto = prompt("Monto del gasto:");
        acumuladorGastos = acumuladorGastos + parseInt(montoGasto);

        while (isNaN(montoGasto) == true || parseInt(montoGasto) < 0){
            alert("ERROR. Sólo son validos carácteres numéricos mayores o iguales a 0.");
            montoGasto = prompt("Coloque nuevamente el monto del gasto: ");
            if (isNaN(montoGasto) == false && (parseInt(montoGasto) > 0)){
                acumuladorGastos = acumuladorGastos + parseInt(montoGasto);
                break;
            }
        }
    }
    else {
        break;
    }
}


// OBJETOS CREADOS - PARA FUTUROS USUARIOS DE LA PLATAFORMA

class NuevoUsuario {
    constructor (nombre, email, edad ,password) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.password = password;
    }
        esMayor () {
            if (this.edad >= 18) {
                return true
            } else {
                return false
            }
        }
    }

const usuario1 = new NuevoUsuario ('Mateo', 'mateo@gmail.com', 25, 'mateo1234')
const usuario2 = new NuevoUsuario ('Hernan', 'hernan@gmail.com', 31, 'hernan5678' )
const usuario3 = new NuevoUsuario ('Julia', 'julia@gmail.com', 14 , 'Julia34521' )

console.log(usuario1,usuario2, usuario3)
console.log("El usuario " + usuario1.nombre + " es mayor? " + usuario1.esMayor())
console.log("El usuario " + usuario2.nombre + " es mayor? " + usuario2.esMayor())
console.log("El usuario " + usuario3.nombre + " es mayor? " + usuario3.esMayor())


// ALERT QUE MUESTRA LA FUNCION CREADA (SALDO)

alert(
    "El total de tus ingresos es de: $ " + ingresoAcumulado +"\n"+
    "Los gastos de este mes, suman: $ " + acumuladorGastos +"\n"+
    "Tu saldo disponible, es de: $ " + saldo( ingresoAcumulado,acumuladorGastos));


// ALERT PARA VER LOS OBJETOS EN LA CONSOLA
    
alert(
    "Puede ver los objetos usuarios creados en la consola!");
