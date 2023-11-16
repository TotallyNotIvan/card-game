let dealer = Math.floor((Math.random()*13)+2)
if (dealer ==14) {
    dealer = "A";
}else if (dealer==13){
    dealer = "K";
}else if (dealer==12){
    dealer = "J";
}else if (dealer==11){
    dealer = "Q";
}
document.write(dealer);
