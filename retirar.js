const retirarMonto = document.querySelector("#retirarMonto");
const valorMonto2 = document.querySelector("#valorRetiro");
const alert2 = document.querySelector("#alert2");
const alert4 = document.querySelector("#warning2");
const mensaje2 = document.querySelector("#mensaje2");
const warning2 = document.querySelector("#msnError2");



const alerta2 = (msn) => {
    mensaje2.innerHTML = msn
    alert2.classList.remove('spt');
    setTimeout(() => {
    alert2.classList.add('spt');
    }, 2000)
}
const alertaError2 = (msn) => {
    warning2.innerHTML = msn
    alert4.classList.remove('spt');
    setTimeout(() => {
        alert4.classList.add('spt');
    }, 2000)
}


retirar.addEventListener('click',function(){
    bienvenida.classList.add('spt');
    boxConsignar.classList.add('spt');
    boxSaldo.classList.add('spt')
    boxRetirar.classList.remove('spt');
})

retirarMonto.addEventListener('click',function(){
    const d = valorMonto2.value;
    const valConsignacion = Number(d);
    console.log({valConsignacion}); 

    if(cliente.saldo <= 10){
        alertaError2("No puedes retirar el saldo, monto minimo $10");
        return
    }

    const t = cliente.saldo - valConsignacion;

    if(t <= 10){
        alertaError2("No puedes retirar el saldo, monto minimo en tu cuenta $10");
        return
    }

    cliente.saldo = t
    
    console.log({cliente});

    var today = new Date();
    let date = today.toLocaleString();
    
    let trx2 = {
        fecha:date,
        monto:valConsignacion,
        tipo:"retiro"
    }
    transaccion.push(trx2)

    console.log({transaccion});
    alerta2("Retiro Exitoso");
    dinero.innerHTML = "<h2>Tu saldo actual es " + cliente.saldo + "</h2>"
})

