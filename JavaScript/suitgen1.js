let handonesuit = Math.floor((Math.random()*4))
if (handonesuit==1) {
    handonesuit= "heart";
}else if (handonesuit==2){
    handonesuit= "K";
}else if (handonesuit==3){
    handonesuit= "J";
}else if (handonesuit==4){
    handonesuit= "Q";
}
document.write(handonesuit);
