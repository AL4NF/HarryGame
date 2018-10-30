const inputs=document.querySelectorAll("input[name=houses]");
const inputs1=document.querySelectorAll("input[name=spells]");
const inputs2=document.querySelectorAll("input[name=houses2p]");
const inputs3=document.querySelectorAll("input[name=spells2p]");
const firstBackground=document.querySelector(".firstBackground")
//Introduciendo las Secciones a Javascript
const firstSection =document.querySelector(".firstSection")
const secondSection=document.querySelector(".secondSection")
const thirdSection=document.querySelector(".thirdSection")
const fourthSection=document.querySelector(".fourthSection")
const fifthSection=document.querySelector(".fifthSection")
//Posibles casos Player1
const tie=document.querySelector(".tie");
const win1=document.querySelector(".win1");
const win2=document.querySelector(".win2");
const win3=document.querySelector(".win3");
//Posibles casos Player 2
const win1_2p=document.querySelector(".win1_2p");
const win2_2p=document.querySelector(".win2_2p");
const win3_2p=document.querySelector(".win3_2p");

const slytherin_img=document.querySelector(".slytherin_img");
const raven_img=document.querySelector(".raven_img");
const huffle_img= document.querySelector(".huffle_img");
const gryffin_img=document.querySelector(".gryffin_img");

// p1House.src = "../../assets/img/gryffin.png";


for(let i=0;i<inputs.length;i++)
{
  inputs[i].addEventListener("click",chooseHouse1)
}

for(let j=0;j<inputs1.length;j++)
{
  inputs1[j].addEventListener("click",chooseSpell1)
}
for(let k=0;k<inputs2.length;k++)
{
  inputs2[k].addEventListener("click",chooseHouse2);
}
for(let l=0;l<inputs3.length;l++)
{
  inputs3[l].addEventListener("click",chooseSpell2);
}
var house1;
function chooseHouse1(event)
{
  house1 = event.target.value;
  firstSection.classList.add('hidden');
  secondSection.classList.remove('hidden');
  // alert(house1);
}
var spell1;
function chooseSpell1()
{
  firstBackground.style.backgroundImage='url("../../assets/img/wallpaper1.jpg")';
  spell1=event.target.value;
  secondSection.classList.add('hidden');
  thirdSection.classList.remove('hidden');
  // alert(spell1);
}
var house2;
function chooseHouse2()
{
  house2=event.target.value;
  thirdSection.classList.add('hidden');
  fourthSection.classList.remove('hidden');
  // alert(house2);
}
function chooseSpell2 ()
{
  let spell2= event.target.value;
  fourthSection.classList.add('hidden');
  fifthSection.classList.remove('hidden');
  // alert(spell2);
  match(spell1,spell2);
}

function h(house1,house2)
{
  if(house1=='Slytherin')
  {
    slytherin_img.classList.remove('hidden');
  }else if(house1=='Ravenclaw')
  {
    raven_img.classList.remove('hidden');
  }else if(house1=='Hufflepuff')
  {
    huffle_img.classList.remove('hidden');
  }else if(house1=='Gryffindor')
  {
    gryffin_img.classist.remove('hidden');
  }

  if(house2=='Slytherin')
  {
    slytherin_img.classList.remove('hidden');
  }else if(house2=='Ravenclaw')
  {
    raven_img.classList.remove('hidden');
  }

}

function match(spell1,spell2)
{
  if(spell1=="obliviate" && spell2=="expelliarmus")
  {
    win1_2p.classList.remove('hidden');
  }
  else if(spell1=="obliviate" && spell2=="crucio")
  {
    win1.classList.remove('hidden');
  }
  else if(spell1=="expelliarmus" && spell2=="obliviate")
  {
    win2.classList.remove('hidden');
  }
  else if(spell1=="expelliarmus" && spell2=="crucio")
  {
    win2_2p.classList.remove('hidden');
  }
  else if(spell1=="crucio" && spell2=="expelliarmus")
  {
    win3.classList.remove('hidden');
  }
  else if(spell1=="crucio" && spell2=="obliviate")
  {
    win3_2p.classList.remove('hidden');
  }
  else
  {
    tie.classList.remove('hidden');
  }
}
