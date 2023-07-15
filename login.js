const labelCuenta = document.querySelector("#cuenta");
const labelPasww = document.querySelector("#passw");
const buttonAcces = document.querySelector("#acceso");
const spanAlert = document.querySelector("#alerta");
const componetAlert = document.querySelector("#componetAcceso");

const cliente = [
    {
    nombre: "Rosa Jimenez",
    cuenta: "0001",
    clave: "1234",
    saldo: 10
    },
    {
    nombre: "Manuela Lopez",
    cuenta: "0002",
    clave: "1234",
    saldo: 10
    },
    {
    nombre: "Goria Rodriguez",
    cuenta: "0003",
    clave: "1234",
    saldo: 10
    }
]

buttonAcces.addEventListener('click',function(){
    const numCuenta = labelCuenta.value;
    const passw = labelPasww.value;

    for (const c of cliente) {
       console.log(c);
        if (c.cuenta == numCuenta && c.clave == passw){
           window.location= "cajero.html";
           localStorage.setItem('cliente',JSON.stringify(c))
            return; 
        }
    }
    alerta();
})

function alerta(){
    componetAlert.classList.remove('spt');
    spanAlert.innerHTML = "<h1>Credenciales incorretas</h1>";
    setTimeout(() => {
        componetAlert.classList.add('spt');
    }, 2000)
}

