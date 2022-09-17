var randomNumber1=Math.floor(Math.random()*6+1);
console.log(randomNumber1);
var randomimg="dice"+randomNumber1+".png";
var randomimgsrc=randomimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgsrc);

var randonumber2=Math.floor(Math.random()*6)+1;
var randomimg2="dice"+randonumber2+".png";
var randomimgsrc2=randomimg2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimgsrc2);

if(randomNumber1>randonumber2){
  document.querySelector("h1").innerHTML="PLayer 1 WON";
}
else if(randomNumber1<randonumber2){
  document.querySelector("h1").innerHTML="Player 2 WON";
}
else if(randomNumber1===randonumber2){
  document.querySelector("h1").innerHTML="DRAW";
}
