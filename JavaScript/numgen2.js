let handone = Math.floor((Math.random()*13)+2)
if (handone==14) {
    handone= "A";
}else if (handone==13){
    handone= "K";
}else if (handone==12){
    handone= "J";
}else if (handone==11){
    handone= "Q";
}
document.write(handone);
