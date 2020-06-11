var player1=prompt("Enter player1 Name:=");
var player2=prompt("Enter player2 Name:=");
document.querySelector(".player1").innerHTML="<strong>"+player1+"</strong>";
document.querySelector(".player2").innerHTML="<strong>"+player2+"</strong>";
var randomNumber1=Math.floor((Math.random()*6)+1);

document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2=Math.floor((Math.random()*6)+1);

document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");
  if(randomNumber1===randomNumber2)
  {
    document.querySelector("h1").innerHTML="Match DRAW";
  }
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML=player2+" won 🚩";
}
else {
    document.querySelector("h1").innerHTML="🚩 "+player1+" won";
}
