let ingresoAcumulado = 0;
let acumuladorGastos = 0;

function saldo(ingresos,gastos){
    return ingresos - gastos;
}


for(let i=1; i<11; i++){
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
    else{
        break;
    }
}

for(let i=1; i<11; i++){
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
    else{
        break;
    }
}

alert(
    "El total de tus ingresos es de: $ " + ingresoAcumulado +"\n"+
    "Los gastos de este mes, suman: $ " +acumuladorGastos +"\n"+
    "Tu saldo disponible, es de: $ " + saldo(ingresoAcumulado,acumuladorGastos));