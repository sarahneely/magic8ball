// target your button and assign an ask function that outputs a random image to your page



function switchImg (){
  let number = Math.ceil(Math.random() *20);
  console.log(number);
  document.querySelector('.image_box').style.backgroundImage = "url('img/magic8ball_" + number + ".png')";
}

document.getElementById('click_button').addEventListener('click', switchImg);
