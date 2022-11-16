let detalleIngreso = [];
let detalleGasto = [];
let usuarios = [];
let ingresoAcumulado = 0;
let acumuladorGastos = 0;
let nombre = prompt(" Cual es tu nombre? ")

const saludaruUsuario = (nombre) => {
    return `Hola, ${nombre}`
}

alert (saludaruUsuario (nombre))

function saldo(ingresos,gastos){
    return ingresos - gastos;
}

class NuevoUsuario {
    constructor (nombre, email, edad ,password) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.password = password;
    }
        esMayor = () => {
            if (this.edad >= 18) {
                return true
            } else {
                return false
            }
        }
    }

const user1 = new NuevoUsuario ('Mateo', 'mateo@gmail.com', 25, 'mateo1234')
usuarios.push(user1)
const user2 = new NuevoUsuario ('Hernan', 'hernan@gmail.com', 31, 'hernan5678' )
usuarios.push(user2)
const user3 = new NuevoUsuario ('Julia', 'julia@gmail.com', 14 , 'Julia34521' )
usuarios.push(user3)

const filtrado = usuarios.filter(e => e.edad > 18)

for(let i=1; i<5; i++){
    alert("Describa el ingreso N° " + i)
    let conceptoIngreso = prompt("Concepto del ingreso. Si desea salir sin colocar más nada, escriba: ESC ");
    conceptoIngreso = conceptoIngreso.toUpperCase();

    if (conceptoIngreso != "ESC"){
        detalleIngreso.push(conceptoIngreso)
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
        detalleGasto.push(conceptoGasto)
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

alert(
    "El total de tus ingresos es de: $ " + ingresoAcumulado +"\n"+
    "Los gastos de este mes, suman: $ " + acumuladorGastos +"\n"+
    "Tu saldo disponible es de: $ " + saldo( ingresoAcumulado,acumuladorGastos));

let ingresosJoin = detalleIngreso.join(' , ')
alert("Los ingresos fueron: " + ingresosJoin)

let gastosJoin = detalleGasto.join(' , ')
alert("Los gastos fueron: " + gastosJoin)

let index = detalleIngreso.indexOf('SUELDO')
if (index !== -1) {
    alert ('Ya has cobrado tu sueldo!')
} else {
    alert ('Aun no has cobrado tu sueldo!')
}

console.log(detalleIngreso)
console.log(detalleGasto)
console.log(usuarios)
console.log(user1,user2, user3)
console.log("El usuario " + user1.nombre + " es mayor? " + user1.esMayor())
console.log("El usuario " + user2.nombre + " es mayor? " + user2.esMayor())
console.log("El usuario " + user3.nombre + " es mayor? " + user3.esMayor())
console.log (filtrado)