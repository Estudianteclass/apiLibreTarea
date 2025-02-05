/*const url = "https://restcountries.com/v3.1/all?fields=name,flags";
const promesa = fetch(url)
promesa.then((response) => response.text())
    .then(data => {
        //instrucciones


        let json = JSON.parse(data);
        console.log(json);
  
      json.forEach(element => {
        let caja=document.createElement("div")
        let name=document.createElement("p")
        let flag=document.createElement("img")
        name.innerText=element.name.common;
        flag.setAttribute("src",element.flags.png)
        flag.style.width="50"
         flag.style.height="50"
         caja.append(name,flag)
         document.body.appendChild(caja)
      });

    });*/



let campoNombre=document.getElementById("nombre");
const botonBuscar=document.getElementById("buscar")


botonBuscar.addEventListener('click',(e)=>{
const direccion='https://pokeapi.co/api/v2/pokemon/'
let nom=campoNombre.value;
console.log(nom)

fetch(`${direccion}/${nom}`)
.then((respuesta)=>respuesta.json())
.then((encontrado)=>{
let tarjeta=document.createElement("div");
let nombre=document.createElement("p");
let habilidad=document.createElement("p");
let tipo=document.createElement("p");
let sonido=document.createElement("audio")
sonido.setAttribute("src",encontrado.cries.latest)
sonido.setAttribute("type","audio/ogg");
boton.appendChild(sonido);
boton.addEventListener('click',(e)=>{

sonido.play();
})
})



})
const listado=[];
const ver="'https://dummyjson.com/todos'"
fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then(data=>{

console.log(data[1])

});
/*const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const promesa = fetch(url)
promesa.then((response) => response.text())
    .then(data => {
        //instrucciones
 
 
    let json = JSON.parse(data);
        console.log(json);
     let ta=json.types[0]
     console.log(ta.type.name)  
  let title=document.createElement("p")
  title.innerText=json.name
let img=document.createElement("img")
let boton=document.createElement("button");
let sonido=document.createElement("audio")
sonido.setAttribute("src",json.cries.latest)
sonido.setAttribute("type","audio/ogg");
boton.appendChild(sonido);
boton.addEventListener('click',(e)=>{

sonido.play();
})
let habilidad=document.createElement("p")
let skills=json.abilities[0]
if(json.types.length>1){
  let t1=json.types[0]
  let t2=json.types[1]
  let type1=document.createElement("p")
  let type2=document.createElement("p")
  type1.innerText=t1.type.name
  type2.innerText=t2.type.name
  document.body.append(type1,type2)
}else{
  let t1=json.types[0]
  let type1=document.createElement("p")
  type1.innerText=t1.type.name
  document.body.append(type1)
}
habilidad.innerText=skills.ability.name
boton.innerText="boton"
document.body.append(boton)
img.setAttribute("src",json.sprites.front_default)
img.style.width="200px"
img.style.height="200px"
let caja=document.createElement("div")
caja.append(title,img,habilidad,boton)
document.body.appendChild(caja)
 
    });

*/

function generarTarjeta(elemento) {
  let tarjeta = document.createElement("div")
  let title = document.createElement("p")
  title.innerText = lista.name
  let img = document.createElement("img")
  let boton = document.createElement("button");
  let sonido = document.createElement("audio")
  sonido.setAttribute("src", lista.cries.latest)
  sonido.setAttribute("type", "audio/ogg");
  boton.appendChild(sonido);
  boton.addEventListener('click', (e) => {

    sonido.play();
  })
  let habilidad = document.createElement("p")
  habilidad.innerText = lista.abilities[0].name
  boton.innerText = "boton"
  document.body.append(boton)
  img.setAttribute("src", lista.sprites.front_default)
  img.style.width = "200px"
  img.style.height = "200px"
}