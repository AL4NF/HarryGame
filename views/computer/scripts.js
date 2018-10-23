const inputs=document.querySelectorAll("input[name=spells]");

for(let i =0;i<inputs.length;i++)
{
  inputs[i].addEventListener("click",chooseSpell);
}

function chooseSpell()
{
  let spell= event.target.value;
  alert(spell);

}
