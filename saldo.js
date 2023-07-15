const btnSaldo = document.querySelector("#btnSaldo");
const boxSaldo = document.querySelector("#boxSaldo");
const tabletrx = document.querySelector("#trasaccion");
const diner2 = document.querySelector("#diner2");


btnSaldo.addEventListener('click',function(){
    bienvenida.classList.add('spt');
    boxConsignar.classList.add('spt');
    boxRetirar.classList.add('spt');
    boxSaldo.classList.remove('spt')
    
   

    for(let trans of transaccion){
        console.log({trans})
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td.innerHTML = ""
        td.innerHTML = trans.fecha
        tr.appendChild(td)
        
        td2.innerHTML = ""
        td2.innerHTML = trans.tipo
        tr.appendChild(td2)
        
        td3.innerHTML = ""
        td3.innerHTML = trans.monto
        tr.appendChild(td3)

        tabletrx.appendChild(tr)
    }
    diner2.innerHTML = "<h2>Tu saldo actual es " + cliente.saldo + "</h2>"

})

    
    