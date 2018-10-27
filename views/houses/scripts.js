const inputs=document.querySelectorAll("input[name=houses]");

for(let i=0;i<inputs.length;i++)
{
  inputs[i].addEventListener("click",chooseHouse)
}

function chooseHouse()
{
  let house = event.target.value;
}
