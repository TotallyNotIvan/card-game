cash=cash-100
if (dealer > handone){
    document.write("Loss");
    cash=cash+200
}else if (dealer == handone){
    document.write("Push");
    cash=cash+100
}
else {
    document.write("Win");
}
