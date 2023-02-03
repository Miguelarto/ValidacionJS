

function cantidadmilk() {
  const cantidad = document.getElementById('orbCantidad');
   if (cantidad.value < 0 || cantidad.value > 10) {
    console.log("La cantidad es incorrecta")
      alert("Cantidad incorrecta, introducta un numero del 1 al 10");
    } else {
      console.log("La cantidad es correcta")
    }
  }
  function cantidadblender() {
    const cantidad = document.getElementById('blenderCantidad');
    if (cantidad.value < 0 || cantidad.value > 10) {
      console.log("La cantidad es incorrecta")
      alert("Cantidad incorrecta, introducta un numero del 1 al 10");
    } else {
      console.log("La cantidad es correcta")
    }
  }
  function cantidadnike() {
    const cantidad = document.getElementById('nikeCantidad');
    if (cantidad.value < 0 || cantidad.value > 10) {
      console.log("La cantidad es incorrecta")
      alert("Cantidad incorrecta, introducta un numero del 1 al 10");
    } else {
      console.log("La cantidad es correcta")
    }
  }
function cantidadorb() { 
  const cantidad = document.getElementById('orbCantidad');
  
  if(cantidad.value < 0 || cantidad.value > 10){
    console.log("La cantidad es incorrecta");
    alert("Cantidad incorrecta, introducta un numero del 1 al 10");
  } else {
    console.log("La cantidad es correcta")
  }
}

const validar = document.getElementById('productForm');
  validar.addEventListener('submit', (e)=>{
    console.log("hola")
    // e.preventDefault();
    cantidadmilk()
    cantidadorb()
    cantidadnike()
    cantidadblender()
   
});
const milkConfirm = document.getElementById("milkConfirm");
const blenderConfirm = document.getElementById("blenderConfirm");
const nikeConfirm = document.getElementById("nikeConfirm");
const orbConfirm = document.getElementById("orbConfirm");

const milkCantidad = document.getElementById("milkCantidad");
const blenderCantidad = document.getElementById("blenderCantidad");
const nikeCantidad = document.getElementById("nikeCantidad");
const orbCantidad = document.getElementById("orbCantidad");

const milkPrice = 5;
const blenderPrice = 25;
const nikePrice = 25;   
const orbPrice = 100;

function calcula(){
    const subTotalElement = document.getElementById("sub-total");
    let subtotal = 0;
    if(milkConfirm.checked == true){
        subtotal += milkCantidad.value*milkPrice
        milkCantidad.readOnly = true;
    }else{
        milkCantidad.readOnly = false;
    }
    if(blenderConfirm.checked == true){subtotal += blenderCantidad.value*blenderPrice}
    if(nikeConfirm.checked == true){subtotal += nikeCantidad.value*nikePrice}
    if(orbConfirm.checked == true){subtotal += orbCantidad.value*orbPrice}
    subTotalElement.textContent = subtotal;
}

