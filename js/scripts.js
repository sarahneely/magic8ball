// target your button and assign an ask function that outputs a random image to your page

let number = Math.ceil(Math.random() *20);
console.log(number);

let switchImg = document.getElementById('image').style.backgroundImage = "url('../img/magic*ball_' + number + '.png')";

document.getElementById('click_button').addEventListener('click', switchImg);
