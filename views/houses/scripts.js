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

const c1House =document.querySelector(".c1House");
const c2House =document.querySelector(".c2House");


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
}
var spell1;
function chooseSpell1()
{
  firstBackground.style.backgroundImage='url("../../assets/img/wallpaper1.jpg")';
  spell1=event.target.value;
  secondSection.classList.add('hidden');
  thirdSection.classList.remove('hidden');
}
var house2;
function chooseHouse2()
{
  house2=event.target.value;
  thirdSection.classList.add('hidden');
  fourthSection.classList.remove('hidden');
}
function chooseSpell2 ()
{
  let spell2= event.target.value;
  fourthSection.classList.add('hidden');
  fifthSection.classList.remove('hidden');
  match(spell1,spell2);
}

function h(house1,house2)
{
  if(house1=='Slytherin')
  {
    c1House.src = "../../assets/img/slytherin.png";
    // slytherin_img.classList.remove('hidden');
  }else if(house1=='Ravenclaw')
  {
    c1House.src = "../../assets/img/raven.png";
    // raven_img.classList.remove('hidden');
  }else if(house1=='Hufflepuff')
  {
    c1House.src = "../../assets/img/huffle.png";
    // huffle_img.classList.remove('hidden');
  }else if(house1=='Gryffindor')
  {
    // gryffin_img.classist.remove('hidden');
    c1House.src = "../../assets/img/gryffin.png";
  }


  if(house2=='Slytherin')
  {
    c2House.src = "../../assets/img/slytherin.png";
    // slytherin_img.classList.remove('hidden');
  }
  else if(house2=='Ravenclaw')
  {
    c2House.src = "../../assets/img/raven.png";
    // raven_img.classList.remove('hidden');
  }
  else if(house2=='Hufflepuff')
  {
    c2House.src = "../../assets/img/huffle.png";
  }
  else if(house2=='Gryffindor')
  {
    c2House.src = "../../assets/img/gryffin.png";
  }


}

function match(spell1,spell2)
{
  if(spell1=="obliviate" && spell2=="expelliarmus")
  {
    win1_2p.classList.remove('hidden');
     h (house1,house2);
  }
  else if(spell1=="obliviate" && spell2=="crucio")
  {
    win1.classList.remove('hidden');
    h (house1,house2);
  }
  else if(spell1=="expelliarmus" && spell2=="obliviate")
  {
    win2.classList.remove('hidden');
    h (house1,house2);
  }
  else if(spell1=="expelliarmus" && spell2=="crucio")
  {
    win2_2p.classList.remove('hidden');
    h (house1,house2);
  }
  else if(spell1=="crucio" && spell2=="expelliarmus")
  {
    win3.classList.remove('hidden');
    h (house1,house2);
  }
  else if(spell1=="crucio" && spell2=="obliviate")
  {
    win3_2p.classList.remove('hidden');
    h (house1,house2);
  }
  else
  {
    tie.classList.remove('hidden');
    h (house1,house2);
  }
}
