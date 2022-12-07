const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')
const botonIngresar = document.getElementById('ingresar')
const divTitulo = document.getElementById('divTitulo')
const divSaludo = document.getElementById('divSaludo')
const divPrestamo = document.getElementById('divPrestamo')
const divResultado = document.getElementById('divResultado')
const divBancos = document.getElementById('bancos')
const divCotizaciones = document.getElementById('cotizaciones')

// arreglo de cuotas
const cuotas = [
    {
        plazo:'corto plazo',
    },
    {
        plazo:'mediano plazo',
    },
    {
        plazo:'largo plazo',
    },
]


//se crea clase Banco
class Banco {
    constructor(nombre){
        this.nombre = nombre
        this.interes = Math.ceil(Math.random() * 10)
    }
}

const bancos = []

bancos.push(new Banco ('Itau'))
bancos.push(new Banco ('BBVA'))
bancos.push(new Banco ('Santander'))
bancos.push(new Banco ('Scotiabank'))
bancos.push(new Banco ('Banco Republica'))



// // verificar si hay un usuario en el storage
const usuario = JSON.parse(localStorage.getItem('usuario'))

if (usuario) {
    crearDivPrestamos(usuario)
    crearButtonSelectCalcular()
}


function promesa (){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            if(nombreUsuario.value || apellidoUsuario.value != '') {
                resolve('Has ingresado tus datos completos, ya puedes ingresar!')
            } else {
                reject ('Recuerda que para ingresar es necesario completar tus datos')
            }
        }, 8000)
    })
}

promesa(nombreUsuario.value, apellidoUsuario.value)
.then(response =>   
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: (response),
        showConfirmButton: false,
        timer: 2500
    }))
.catch(error =>   
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: (error),
        showConfirmButton: false,
        timer: 2500
    }))


//Evento click del boton ingresar en la pagina principal
//Uso del operador OR 
botonIngresar.onclick = () => {
    if(nombreUsuario.value || apellidoUsuario.value) {
        const usuario = {
            nombre: nombreUsuario.value,
            apellido: apellidoUsuario.value
        }
        localStorage.setItem('usuario', JSON.stringify(usuario))

        crearDivPrestamos(usuario)
        crearButtonSelectCalcular()
        const botonCalcular = document.getElementById('calcular')
        botonCalcular.onclick = () => {
            //tomando informacion de monto y cantidad de cuotas
            const montoPrestamo = document.getElementById('inputMonto').value
            const cantCuotas = document.getElementById('cuotas').value
            console.log(montoPrestamo,cantCuotas)
            cuotas.interes = parseInt(cuotas.interes)

            bancos.forEach(banco => {
                const cuotaInt = parseInt(montoPrestamo)
                const cuotaConInteres = cuotaInt/100 * banco.interes
                const precioFinal =  cuotaConInteres + cuotaInt
                const parrafo = document.createElement('p')
                parrafo.innerText = `El banco ${banco.nombre} te ofrece un prestamo con intereses de ${banco.interes}% por lo que deberias abonar USD${precioFinal}`
                divResultado.append(parrafo)
            })

            //Filtro los bancos con intereses mayores a 7%

            const interesAlto = bancos.filter(banco => banco.interes >= 7)
            const bancosInteresAlto = document.createElement('p')
            bancosInteresAlto.innerText = `Los bancos con intereses mayores a un 7% son:
            ${JSON.stringify(interesAlto)}`
            divBancos.append(bancosInteresAlto)
        }
    }
}

function crearDivPrestamos(user){

//Libreria sweet alert
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tus datos han sido guardados con éxito',
        showConfirmButton: false,
        timer: 1900
      })

    //eliminar divTitulo
    divTitulo.remove()

    //agregar elemento al DOM
    const tituloSaludo = document.createElement('h2')
    tituloSaludo.innerText = `Hola! Bienvenido ${user.nombre} ${user.apellido}, solicita el prestamo en USD que mas te convenga:`
    divSaludo.append(tituloSaludo)

    // crear input monto de prestamo solicitado
    const parrafoPrestamo = document.createElement('p')
    parrafoPrestamo.innerText = "Escriba el monto que desea solicitar como prestamo:"
    const inputMonto = document.createElement('input')
    inputMonto.setAttribute('type', 'number')
    inputMonto.setAttribute('id', 'inputMonto')
    divPrestamo.append(parrafoPrestamo)
    divPrestamo.append(inputMonto)
}

function crearButtonSelectCalcular(){
    //crear boton calcular
    const botonCalcular = document.createElement('button')
    botonCalcular.setAttribute('id', 'calcular')
    botonCalcular.innerText = 'Calcular Prestamo'

    // crear select con opcion de cuotas
    const selectCuotas = document.createElement('select')
    selectCuotas.setAttribute('id', 'cuotas')
    
    const parrafoCuotas = document.createElement('p')
    parrafoCuotas.innerText = "Seleccione la cantidad de cuotas de su prestamo:"

    // crear opciones de cuotas
    cuotas.forEach(cuota =>{
        const opcionCuota = document.createElement('option')
        opcionCuota.innerText = `${cuota.plazo}`
        selectCuotas.append(opcionCuota)
    })

//Fetch con las cotizaciones del dolar que se actualiza cada 60s
const cargarCotizacion = () => {
    fetch("https://criptoya.com/api/dolar")
    .then(repsonse => repsonse.json())
    .then(({solidario, ccl, mep, ccb, blue}) => {
    divCotizaciones.innerHTML = `
    <h2>Cotizacion del dolar</h2>
        <p>Solidario:$ ${solidario}</p>
        <p>CCL:$ ${ccl}</p>
        <p>MEP:$ ${mep}</p>
        <p>CCB:$ ${ccb}</p>
        <p>Blue:$ ${blue}</p>
    `
})
}

cargarCotizacion()

setInterval(() => {
    cargarCotizacion()
}, 60000);

    
//append
    divPrestamo.append(parrafoCuotas, selectCuotas, botonCalcular)
}
