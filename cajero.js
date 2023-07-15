//const pageLogin = require("./login.js");

const consignar = document.querySelector("#consignar");
const bienvenida = document.querySelector("#inicio");
const boxConsignar = document.querySelector("#boxConsignar");
const consignarMonto = document.querySelector("#consignarMonto");
const valorMonto = document.querySelector("#valorMonto");
const alert = document.querySelector("#alert");
const saludo = document.querySelector("#saludo");
const dinero = document.querySelector("#dinero");
const mensaje = document.querySelector("#mensaje");
const warning = document.querySelector("#msnError");
const alertWar = document.querySelector("#warning");

addEventListener('DOMContentLoaded',function(){
    const cCuenta = this.localStorage.getItem('cliente')
    const cParse = JSON.parse(cCuenta)
    cliente = cParse
    console.log({cliente})
    console.log({saldo: cliente.saldo})
   
    saludo.innerHTML = "<h2>Bienvenid@ " + cliente.nombre + "</h2>"
    dinero.innerHTML = "<h2>Tu saldo actual es " + cliente.saldo + "</h2>"
   })

consignar.addEventListener('click',function(){
    bienvenida.classList.add('spt');
    boxRetirar.classList.add('spt');
    boxSaldo.classList.add('spt')
    boxConsignar.classList.remove('spt');
    
})

let total = [];

let cliente = null

let transaccion = [];

consignarMonto.addEventListener('click',function(){
    const d = valorMonto.value;
    const valConsignacion = Number(d);
    console.log({valConsignacion}); 

    if(cliente.saldo >= 990){
        alertaError("No puedes superar el saldo permitido, $990");
        return
    }

    const t = cliente.saldo + valConsignacion;

    if(t >= 990){
        alertaError("No puedes superar el saldo permitido, $990");
        return
    }

    cliente.saldo = t
    
    console.log({cliente});
    var today = new Date();
    let date = today.toLocaleString();
    
    let trx = {
        fecha:date,
        monto:valConsignacion,
        tipo:"consignación"
    }
    transaccion.push(trx)

    console.log({transaccion});
    alerta("Consignacion Exitosa");
    dinero.innerHTML = "<h2>Tu saldo actual es " + cliente.saldo + "</h2>"
})

const alerta = (msn) => {
    mensaje.innerHTML = msn
    alert.classList.remove('spt');
    setTimeout(() => {
    alert.classList.add('spt');
    }, 2000)
}
const alertaError = (msn) => {
    warning.innerHTML = msn
    alertWar.classList.remove('spt');
    setTimeout(() => {
        alertWar.classList.add('spt');
    }, 2000)
}

