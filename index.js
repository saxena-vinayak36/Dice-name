var ranNum1=Math.floor(Math.random()*6)+1;
var ranDiceImg1="dice"+ranNum1+".png";
var ranImgSrc="images/"+ranDiceImg1;
document.querySelectorAll("img")[0].setAttribute("src",ranImgSrc);
var ranNum2=Math.floor(Math.random()*6)+1;
var ranDiceImg2="dice"+ranNum2+".png";
var ranImgSrc2="images/"+ranDiceImg2;
document.querySelectorAll("img")[1].setAttribute("src",ranImgSrc2);
if(ranNum1>ranNum2){
    document.querySelector("h1").innerHTML="Player 1 wins";

}
else if(ranNum1<ranNum2){
    document.querySelector("h1").innerHTML="Player 2 wins";
    
}
else{
    document.querySelector("h1").innerHTML="Draw";   
}
