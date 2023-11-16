cash=cash-100
if (dealer > handone){
    document.write("dealer wins");
    cash=cash+200
}else if (dealer == handone){
    document.write("you tie");
    cash=cash+100
}
else {
    document.write("you win");
}
