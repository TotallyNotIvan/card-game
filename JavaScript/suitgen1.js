let handonesuit = Math.floor((Math.random()*4))
if (handonesuit==1) {
    handonesuit= "heart";
}else if (handonesuit==2){
    handonesuit= "club";
}else if (handonesuit==3){
    handonesuit= "diamonds";
}else if (handonesuit==4){
    handonesuit= "spades";
}
document.write(handonesuit);
