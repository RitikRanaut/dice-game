var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImage1 = "images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

var randomNumber2;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImage2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

var result = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    result.innerHTML = "Player 1 wins";
}
else if(randomNumber1 < randomNumber2){
    result.innerHTML = "Player 2 wins";
}
else{
    result.innerHTML = "Draw";
}
