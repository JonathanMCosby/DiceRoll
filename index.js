let dice;
const max = 6;
const min = 1;
const roll = document.getElementById("button");
const label = document.getElementById("label")

roll.onclick = function(){
    dice = Math.floor(Math.random() * max) + min
    label.textContent = dice;
}
