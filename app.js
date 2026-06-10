

//lavandina
function fun1(){
    
   if(document.getElementById("litrolav").value= "1")

   document.getElementById("litrolav").value = ((document.getElementById("preciolav").value)*(1.6666666667)).toFixed(0); 

    let precio = document.querySelector("#preciolav").value;
    let litros = document.querySelector("#litrolav").value;

    document.getElementById("preciolav").value = disabled="off";

    
    document.querySelector("#pmostrar").innerHTML="LAVANDINA $"+ precio +" x "+litros;
    
  
    document.getElementById("amigo").value = "LAVANDINA $"+ precio +" son "+ litros+ "ml";
    document.getElementById("mensaje1").value = precio+" "+litros;
}
function lav500(){
    document.getElementById("preciolav").value = "500";
}
function lav1000(){
    document.getElementById("preciolav").value = "1000";
}
function lav1500(){
    document.getElementById("preciolav").value = "1500";
}
function lav2000(){
    document.getElementById("preciolav").value = "2000";
}
function lav2500(){
    document.getElementById("preciolav").value = "2500";
}
//calculadoraja
function lav1(){
    document.getElementById("preciolav").value += "1";
}
function lav2(){
    document.getElementById("preciolav").value += "2";
}
function lav3(){
    document.getElementById("preciolav").value += "3";
}
function lav4(){
    document.getElementById("preciolav").value += "4";
}
function lav5(){
    document.getElementById("preciolav").value += "5";

}

function lav6(){
    document.getElementById("preciolav").value += "6";
}
function lav7(){
    document.getElementById("preciolav").value += "7";
}
function lav8(){
    document.getElementById("preciolav").value += "8";
}
function lav9(){
    document.getElementById("preciolav").value += "9";
}
function lav0(){
    document.getElementById("preciolav").value += "0";
}
function lavdel(){
    document.getElementById("preciolav").value = "";
}


function fun12(){
    
   if(document.getElementById("preciolav1").value= "1")
   document.getElementById("preciolav1").value = ((document.getElementById("litrolav1").value)*(0.6)).toFixed(0); 

    let precio = document.querySelector("#preciolav1").value;
    let litros = document.querySelector("#litrolav1").value;

    document.getElementById("litrolav1").value = disabled="off";

    
    document.querySelector("#pmostrar").innerHTML="LAVANDINA $"+ precio +" x "+litros;
    
  
    document.getElementById("amigo").value = "LAVANDINA "+ litros +"ml son $"+ precio;
    document.getElementById("mensaje1").value = precio+" "+litros;
}
function lav500ml(){
    document.getElementById("litrolav1").value = "500";
}
function lav1000ml(){
    document.getElementById("litrolav1").value = "1000";
}
function lav1500ml(){
    document.getElementById("litrolav1").value = "1500";
}
function lav2000ml(){
    document.getElementById("litrolav1").value = "2000";
}
function lav2500ml(){
    document.getElementById("litrolav1").value = "2500";
}

//calculadoraja
function lav1ml(){
    document.getElementById("litrolav1").value += "1";
}
function lav2ml(){
    document.getElementById("litrolav1").value += "2";
}
function lav3ml(){
    document.getElementById("litrolav1").value += "3";
}
function lav4ml(){
    document.getElementById("litrolav1").value += "4";
}
function lav5ml(){
    document.getElementById("litrolav1").value += "5";

}

function lav6ml(){
    document.getElementById("litrolav1").value += "6";
}
function lav7ml(){
    document.getElementById("litrolav1").value += "7";
}
function lav8ml(){
    document.getElementById("litrolav1").value += "8";
}
function lav9ml(){
    document.getElementById("litrolav1").value += "9";
}
function lav0ml(){
    document.getElementById("litrolav1").value += "0";
}
function lavdelml(){
    document.getElementById("litrolav1").value = "";
}

//detergente
function fun2(){
    
   if(document.getElementById("litrodet").value= "1")

   document.getElementById("litrodet").value = ((document.getElementById("preciodet").value)*(1.25)).toFixed(0); 

    let precio = document.querySelector("#preciodet").value;
    let litros = document.querySelector("#litrodet").value;

    
    document.querySelector("#pmostrar").innerHTML="detergente $"+ precio +" x "+litros;
    
  
    document.getElementById("amigo").value = "detergente $"+ precio +" son "+ litros +"ml";
    document.getElementById("mensaje1").value = precio+" "+litros;
}
function det500(){
    document.getElementById("preciodet").value = "500";
}
function det1000(){
    document.getElementById("preciodet").value = "1000";
}
function det1500(){
    document.getElementById("preciodet").value = "1500";
}
function det2000(){
    document.getElementById("preciodet").value = "2000";
}
function det2500(){
    document.getElementById("preciodet").value = "2500";
}
function det1(){
    document.getElementById("preciodet").value += "1";
}
function det2(){
    document.getElementById("preciodet").value += "2";
}
function det3(){
    document.getElementById("preciodet").value += "3";
}
function det4(){
    document.getElementById("preciodet").value += "4";
}
function det5(){
    document.getElementById("preciodet").value += "5";
}
function det6(){
    document.getElementById("preciodet").value += "6";
}
function det7(){
    document.getElementById("preciodet").value += "7";
}
function det8(){
    document.getElementById("preciodet").value += "8";
}
function det9(){
    document.getElementById("preciodet").value += "9";
}
function det0(){
    document.getElementById("preciodet").value += "0";
}
function detdel(){
    document.getElementById("preciodet").value = "";
}
function fun21(){
    
   if(document.getElementById("preciodet1").value= "1")
   document.getElementById("preciodet1").value = ((document.getElementById("litrodet1").value)*(0.8)).toFixed(0); 

    let precio = document.querySelector("#preciodet1").value;
    let litros = document.querySelector("#litrodet1").value;

    
    document.querySelector("#pmostrar").innerHTML="detergente $"+ precio +" x "+litros;
    
  
    document.getElementById("amigo").value = "detergente "+ litros +"ml son $"+ precio;
    document.getElementById("mensaje1").value = precio+" "+litros;
}
function det500ml(){
    document.getElementById("litrodet1").value = "500";
}
function det1000ml(){
    document.getElementById("litrodet1").value = "1000";
}
function det1500ml(){
    document.getElementById("litrodet1").value = "1500";
}
function det2000ml(){
    document.getElementById("litrodet1").value = "2000";
}
function det2500ml(){
    document.getElementById("litrodet1").value = "2500";
}
function det1ml(){
    document.getElementById("litrodet1").value += "1";
}
function det2ml(){
    document.getElementById("litrodet1").value += "2";
}
function det3ml(){
    document.getElementById("litrodet1").value += "3";
}
function det4ml(){
    document.getElementById("litrodet1").value += "4";
}
function det5ml(){
    document.getElementById("litrodet1").value += "5";
}
function det6ml(){
    document.getElementById("litrodet1").value += "6";
}
function det7ml(){
    document.getElementById("litrodet1").value += "7";
}
function det8ml(){
    document.getElementById("litrodet1").value += "8";
}
function det9ml(){
    document.getElementById("litrodet1").value += "9";
}
function det0ml(){
    document.getElementById("litrodet1").value += "0";
}
function detdelml(){
    document.getElementById("litrodet1").value = "";
}

//desodorante
function fun3(){
    
   if(document.getElementById("litrodes").value= "1")
   document.getElementById("litrodes").value = ((document.getElementById("preciodes").value)*(1.6666666667)).toFixed(0); 

    let precio = document.querySelector("#preciodes").value;
    let litros = document.querySelector("#litrodes").value;

    
    document.querySelector("#pmostrar").innerHTML="desodorante $"+ precio +" x "+litros;
    
  
    document.getElementById("amigo").value = "desodorante $"+ precio +" son "+ litros +"ml";
    document.getElementById("mensaje1").value = precio+" "+litros;
}
function des500(){
    document.getElementById("preciodes").value = "500";
}
function des1000(){
    document.getElementById("preciodes").value = "1000";
}
function des1500(){
    document.getElementById("preciodes").value = "1500";
}
function des2000(){
    document.getElementById("preciodes").value = "2000";
}
function des2500(){
    document.getElementById("preciodes").value = "2500";
}
function des1(){
    document.getElementById("preciodes").value += "1";
}
function des2(){
    document.getElementById("preciodes").value += "2";
}
function des3(){
    document.getElementById("preciodes").value += "3";
}
function des4(){
    document.getElementById("preciodes").value += "4";
}
function des5(){
    document.getElementById("preciodes").value += "5";
}
function des6(){
    document.getElementById("preciodes").value += "6";
}
function des7(){
    document.getElementById("preciodes").value += "7";
}
function des8(){
    document.getElementById("preciodes").value += "8";
}
function des9(){
    document.getElementById("preciodes").value += "9";
}
function des0(){
    document.getElementById("preciodes").value += "0";    
}  
function desdel(){
    document.getElementById("preciodes").value = "";    
}    
function fun31(){
    
   if(document.getElementById("preciodes1").value = "1")
   document.getElementById("preciodes1").value = ((document.getElementById("litrodes1").value)*(0.6)).toFixed(0); 
//document.getElementById("preciodes1").value = ((document.getElementById("litrodes1").value)*(0.6)).toFixed(0); 
    let precio = document.querySelector("#preciodes1").value;
    let litros = document.querySelector("#litrodes1").value;

    
    document.querySelector("#pmostrar").innerHTML="desodorante "+ litros +"ml son $"+ precio;
    
  
    document.getElementById("amigo").value = "desodorante "+ litros +"ml son $"+ precio;
    document.getElementById("mensaje1").value = precio+" "+litros;
}
function des500ml(){
    document.getElementById("litrodes1").value = "500";
}
function des1000ml(){
    document.getElementById("litrodes1").value = "1000";
}
function des1500ml(){
    document.getElementById("litrodes1").value = "1500";
}
function des2000ml(){
    document.getElementById("litrodes1").value = "2000";
}
function des2500ml(){
    document.getElementById("litrodes1").value = "2500";
}
function des1ml(){
    document.getElementById("litrodes1").value += "1";
}
function des2ml(){
    document.getElementById("litrodes1").value += "2";
}
function des3ml(){
    document.getElementById("litrodes1").value += "3";
}
function des4ml(){
    document.getElementById("litrodes1").value += "4";
}
function des5ml(){
    document.getElementById("litrodes1").value += "5";
}
function des6ml(){
    document.getElementById("litrodes1").value += "6";
}
function des7ml(){
    document.getElementById("litrodes1").value += "7";
}
function des8ml(){
    document.getElementById("litrodes1").value += "8";
}
function des9ml(){
    document.getElementById("litrodes1").value += "9";
}
function des0ml(){
    document.getElementById("litrodes1").value += "0";    
}  
function desdelml(){
    document.getElementById("litrodes1").value = "";    
}

//jabbon
function fun4(){
    
   if(document.getElementById("litrojab").value= "1")
   document.getElementById("litrojab").value = ((document.getElementById("preciojab").value)*(1.25)).toFixed(0); 

    let precio = document.querySelector("#preciojab").value;
    let litros = document.querySelector("#litrojab").value;

    
    document.querySelector("#pmostrar").innerHTML="jabon ropa $"+ precio +" x "+litros;
    
  
    document.getElementById("amigo").value = "jabon ropa $"+ precio +" son "+ litros+"ml";
    document.getElementById("mensaje1").value = precio+" "+litros;
}
function jab500(){
    document.getElementById("preciojab").value = "500";
}
function jab1000(){
    document.getElementById("preciojab").value = "1000";
}
function jab1500(){
    document.getElementById("preciojab").value = "1500";
}
function jab2000(){
    document.getElementById("preciojab").value = "2000";
}
function jab2500(){
    document.getElementById("preciojab").value = "2500";
}
function jab1(){
    document.getElementById("preciojab").value += "1";
}
function jab2(){
    document.getElementById("preciojab").value += "2";
}
function jab3(){
    document.getElementById("preciojab").value += "3";
}
function jab4(){
    document.getElementById("preciojab").value += "4";
}
function jab5(){
    document.getElementById("preciojab").value += "5";
}
function jab6(){
    document.getElementById("preciojab").value += "6";
}
function jab7(){
    document.getElementById("preciojab").value += "7";
}
function jab8(){
    document.getElementById("preciojab").value += "8";
}
function jab9(){
    document.getElementById("preciojab").value += "9";
}
function jab0(){
    document.getElementById("preciojab").value += "0";    
}  
function jabdel(){
    document.getElementById("preciojab").value = "";    
}   

function fun41(){
    
   if(document.getElementById("preciojab1").value= "1")
   document.getElementById("preciojab1").value = ((document.getElementById("litrojab1").value)*(0.8)).toFixed(0); 

    let precio = document.querySelector("#preciojab1").value;
    let litros = document.querySelector("#litrojab1").value;

    
    document.querySelector("#pmostrar").innerHTML="jabon ropa $"+ precio +" x "+litros;
    
  
    document.getElementById("amigo").value = "jabon "+ litros +"ml son $"+ precio;
    document.getElementById("mensaje1").value = precio+" "+litros;
}

function jab500ml(){
    document.getElementById("litrojab1").value = "500";
}
function jab1000ml(){
    document.getElementById("litrojab1").value = "1000";
}
function jab1500ml(){
    document.getElementById("litrojab1").value = "1500";
}
function jab2000ml(){
    document.getElementById("litrojab1").value = "2000";
}
function jab2500ml(){
    document.getElementById("litrojab1").value = "2500";
}
function jab1ml(){
    document.getElementById("litrojab1").value += "1";
}
function jab2ml(){
    document.getElementById("litrojab1").value += "2";
}
function jab3ml(){
    document.getElementById("litrojab1").value += "3";
}
function jab4ml(){
    document.getElementById("litrojab1").value += "4";
}
function jab5ml(){
    document.getElementById("litrojab1").value += "5";
}
function jab6ml(){
    document.getElementById("litrojab1").value += "6";
}
function jab7ml(){
    document.getElementById("litrojab1").value += "7";
}
function jab8ml(){
    document.getElementById("litrojab1").value += "8";
}
function jab9ml(){
    document.getElementById("litrojab1").value += "9";
}
function jab0ml(){
    document.getElementById("litrojab1").value += "0";    
}  
function jabdelml(){
    document.getElementById("litrojab1").value = "";    
}   
//suabisante
function fun5(){
    
   if(document.getElementById("litrosua").value= "1")
   document.getElementById("litrosua").value = ((document.getElementById("preciosua").value)*(1.25)).toFixed(1); 

    let precio = document.querySelector("#preciosua").value;
    let litros = document.querySelector("#litrosua").value;

    
    document.querySelector("#pmostrar").innerHTML="suabisante $"+ precio +" x "+litros;
    
  
    document.getElementById("amigo").value = "suabizante $"+ precio +" son "+ litros+"ml";
    document.getElementById("mensaje1").value = precio+" "+litros;
}
function sua500(){
    document.getElementById("preciosua").value = "500";
}
function sua1000(){
    document.getElementById("preciosua").value = "1000";
}
function sua1500(){
    document.getElementById("preciosua").value = "1500";
}
function sua2000(){
    document.getElementById("preciosua").value = "2000";
}
function sua2500(){
    document.getElementById("preciosua").value = "2500";
}
function sua1(){
    document.getElementById("preciosua").value += "1";
}
function sua2(){
    document.getElementById("preciosua").value += "2";
}
function sua3(){
    document.getElementById("preciosua").value += "3";
}
function sua4(){
    document.getElementById("preciosua").value += "4";
}
function sua5(){
    document.getElementById("preciosua").value += "5";
}
function sua6(){
    document.getElementById("preciosua").value += "6";
}
function sua7(){
    document.getElementById("preciosua").value += "7";
}
function sua8(){
    document.getElementById("preciosua").value += "8";
}
function sua9(){
    document.getElementById("preciosua").value += "9";
}
function sua0(){
    document.getElementById("preciosua").value += "0";
}
function suadel(){
    document.getElementById("preciosua").value += "";
}
function fun51(){
    
   if(document.getElementById("preciosua1").value= "1")
   document.getElementById("preciosua1").value = ((document.getElementById("litrosua1").value)*(0.8)).toFixed(0); 

    let precio = document.querySelector("#preciosua1").value;
    let litros = document.querySelector("#litrosua1").value;

    
    document.querySelector("#pmostrar").innerHTML="suabisante $"+ precio +" x "+litros;
    
  
    document.getElementById("amigo").value = "suabizante $"+ precio +" son "+ litros;
    document.getElementById("mensaje1").value = precio+" "+litros;
}
function sua500ml(){
    document.getElementById("litrosua1").value = "500";
}
function sua1000ml(){
    document.getElementById("litrosua1").value = "1000";
}
function sua1500ml(){
    document.getElementById("litrosua1").value = "1500";
}
function sua2000ml(){
    document.getElementById("litrosua1").value = "2000";
}
function sua2500ml(){
    document.getElementById("litrosua1").value = "2500";
}
function sua1ml(){
    document.getElementById("litrosua1").value = "1";
}
function sua2ml(){
    document.getElementById("litrosua1").value = "2";
}
function sua3ml(){
    document.getElementById("litrosua1").value = "3";
}
function sua4ml(){
    document.getElementById("litrosua1").value = "4";
}
function sua5ml(){
    document.getElementById("litrosua1").value = "5";
}
function sua6ml(){
    document.getElementById("litrosua1").value = "6";
}
function sua7ml(){
    document.getElementById("litrosua1").value = "7";
}
function sua8ml(){
    document.getElementById("litrosua1").value = "8";
}
function sua9ml(){
    document.getElementById("litrosua1").value = "9";
}
function sua0ml(){
    document.getElementById("litrosua1").value = "0";
}
function suadelml(){
    document.getElementById("litrosua1").value = "";
}
//desengrasante
function fun6(){
    
   if(document.getElementById("litrodese").value= "1")
   document.getElementById("litrodese").value = ((document.getElementById("preciodese").value)*(1.25)).toFixed(1); 

    let precio = document.querySelector("#preciodese").value;
    let litros = document.querySelector("#litrodese").value;

    
    document.querySelector("#pmostrar").innerHTML="desengrasante $"+ precio +" x "+litros;
    
  
    document.getElementById("amigo").value = "desengrasante $"+ precio +" son "+ litros;
    document.getElementById("mensaje1").value = precio+" "+litros;
}
function dese500(){
    document.getElementById("preciodese").value = "500";
}
function dese1000(){
    document.getElementById("preciodese").value = "1000";
}
function dese1500(){
    document.getElementById("preciodese").value = "1500";
}
function dese2000(){
    document.getElementById("preciodese").value = "2000";
}
function dese2500(){
    document.getElementById("preciodese").value = "2500";
}
function fun61(){
    
   if(document.getElementById("preciodese1").value= "1")
   document.getElementById("preciodese1").value = ((document.getElementById("litrodese1").value)*(0.8)).toFixed(0); 

    let precio = document.querySelector("#preciodese1").value;
    let litros = document.querySelector("#litrodese1").value;

    
    document.querySelector("#pmostrar").innerHTML="desengrasante "+ litros +"ml son $"+precio;
    
  
    document.getElementById("amigo").value = "desengrasante $"+ precio +" son "+ litros;
    document.getElementById("mensaje1").value = precio+" "+litros;
}
function dese500ml(){
    document.getElementById("litrodese1").value = "500";
}
function dese1000ml(){
    document.getElementById("litrodese1").value = "1000";
}
function dese1500ml(){
    document.getElementById("litrodese1").value = "1500";
}
function dese2000ml(){
    document.getElementById("litrodese1").value = "2000";
}
function dese2500ml(){
    document.getElementById("litrodese1").value = "2500";
}

//array.whatsapp
//document.getElementById('enviarWhats').onclick = function() {
function pato(){
    var mensaje = document.getElementById('mensaje').value;
    var numero = "5493815131822"; // Número de teléfono del destinatario con código de país
    var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');

      }
//ttraer getelementbyid
const datos = new URLSearchParams(window.location.search);
const mensaje2 = datos.get("mensaje");
 document.getElementById("mensaje").value = "";


let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo(){

//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    let amigacho =document.getElementById('amigo').value;
//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
    amigos.push(amigacho);
    // amigacho=document.querySelector('ul');

    
      

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
        if(document.getElementById('amigo').value===""){
        alert('por favor, inserte un nombre');
        return;
        }
   
        

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
        document.getElementById('amigo').value = '';
        // amigacho.innerHTML='';
        actualizarLista();


//verefica si guarda el array los amigos 
    console.log(amigos);

    

    
}


//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
function actualizarLista(){

//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.    
    let lista = document.getElementById('listaAmigos');

//Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.    
    lista.innerHTML='';

//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i < amigos.length; i++) {
      let elemento = document.createElement('li');
      
//Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.      
       elemento.textContent= amigos[i];
       lista.appendChild(elemento); 
       let res = amigos.join('.');
  
    }
    
  }


   

  
    
function sortearAmigo() {

            document.getElementById("mensaje").value = amigos.join();
//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.    
    if (amigos.length===0){
//        alert('que triste no tenes amigos agregados');
        return;
    }
//Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

//Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
    let nombreSorteado = amigos[indiceAleatorio];

//Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML=`el ganador es: ${nombreSorteado}`;
   

         document.querySelector("#pmo").innerHTML="mensJE" + res;
     amigos.join(',') = document.querySelector("mensaje").value;
        document.getElementById("mensaje").value = amigos.join();
}   
function joinn(){
    let rest = amigos.join();
    document.getElementById('mensaje').value =rest;
    console.log('listado'+ rest);
}
function ocultarFlotante() {
    // Selecciona el elemento flotante por su ID
    var flotante = document.getElementById('boxmenu');
    
    // Lo oculta completamente de la pantalla
    flotante.style.display = 'none';
}
function mostrarFlotante() {
    // Selecciona el elemento flotante por su ID
    var flotante = document.getElementById('boxmenu');
    
    // Lo oculta completamente de la pantalla
    flotante.style.display = 'block';

}
function mostrarbox() {
    // Selecciona el elemento flotante por su ID
    var flotante1 = document.getElementById('box');
    
    // Lo oculta completamente de la pantalla
    flotante1.style.top = '0px';
    flotante1.style.display = 'block';
    
}
function ocultarbox(){
      // Selecciona el elemento flotante por su ID
    var flotante1 = document.getElementById('box');
   flotante1.style.display = 'none';
   
    
    // Lo oculta completamente de la pantalla
   // flotante1.style.top = '00px';
    //lav1.style.top= '0px';
    //lav2.style.top= '0px';
}