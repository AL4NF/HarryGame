const inputs=document.querySelectorAll("input[name=spells]");
const firstBackground=document.querySelector(".firstBackground");
//Escondiendo el firstSection y mostrando el secondSection
const firstSection=document.querySelector(".firstSection");
const secondSection=document.querySelector(".secondSection");
// //No se debe hacer esto...trayendo los valores...
// const obliviate =document.querySelector(".obliviate");
// const expelliarmus =document.querySelector(".expelliarmus");
// const crucio =document.querySelector(".crucio");
//posibles casos de jugador
const empate=document.querySelector(".empate");
const harryWin=document.querySelector(".harryWin");
const voldWin=document.querySelector(".voldWin");
//
const tie=document.querySelector(".tie");
const win1=document.querySelector(".win1");
const win2=document.querySelector(".win2");
const win3=document.querySelector(".win3");

const loose1=document.querySelector(".loose1");
const loose2=document.querySelector(".loose2");
const loose3=document.querySelector(".loose3");



for(let i =0;i<inputs.length;i++)
{
  inputs[i].addEventListener("click",chooseSpell);
}

function chooseSpell(event)//funcion que captura la desicion del jugador y remplaza la first Section por SeconSection
{
  let spell= event.target.value;
  firstSection.classList.add("hidden");
  secondSection.classList.remove("hidden");
  firstBackground.style.backgroundImage='url("../../assets/img/wallpaper-4.jpg")';
  computer(spell);
}
function computer(spell)//funcion que asigna una opcion aleatoria de la Pc
{
  let computer=Math.floor(Math.random()*3)
  if (computer==0){
    computer ="obliviate"
  }else if (computer==1) {
    computer="expelliarmus"
  }else {
    computer= "crucio"
  }
  match(spell,computer);
}
function match(spell,computer)//funcion que hace la comparacion entre la Pc y el jugador
{
  if(spell=="obliviate" && computer=="expelliarmus")
  {
    voldWin.classList.remove('hidden');
    loose1.classList.remove('hidden');
  }
   else if(spell=="obliviate" && computer=="crucio")
  {
    harryWin.classList.remove('hidden');
    win1.classList.remove('hidden');
  }
  else if(spell=="expelliarmus" && computer=="obliviate")
  {
    harryWin.classList.remove('hidden');
    win2.classList.remove('hidden');
  }
  else if(spell=="expelliarmus" && computer=="crucio")
  {
    voldWin.classList.remove('hidden');
    loose2.classList.remove('hidden');
  }
  else if(spell=="crucio" && computer=="expelliarmus")
  {
    harryWin.classList.remove('hidden');
    win3.classList.remove('hidden');

  }
  else if(spell=="crucio" && computer=="obliviate")
  {
    voldWin.classList.remove('hidden');
    loose3.classList.remove('hidden');
  }
  else
  {
    empate.classList.remove('hidden');
    tie.classList.remove('hidden');
  }
  // if(spell==computer)
  // {
  //   empate.classList.remove("hidden");
  //   tie.classList.remove("hidden");
  // }
  //  else if(spell=="obliviate" && computer=="crucio" || spell=="expelliarmus" && computer=="obliviate" ||spell=="crucio" && computer=="expelliarmus")
  // {
  //   harryWin.classList.remove("hidden");
  //   win.classList.remove("hidden");
  // }
  // else
  // {
  //   voldWin.classList.remove("hidden");
  //   loose.classList.remove("hidden");
  // }
}
