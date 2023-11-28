function deal(){
    var dealerhand = Math.floor((Math.random()*13)+2)
    if (dealerhand ==14) {
        dealerhand = "A";
    }else if (dealerhand==13){
        dealerhand = "K";
    }else if (dealerhand==12){
        dealerhand = "J";
    }else if (dealerhand==11){
        dealerhand = "Q";
    }
    document.getElementById('dealerhand').innerHTML = dealerhand;

    var handone = Math.floor((Math.random()*13)+2)
    if (handone==14) {
        handone= "A";
    }else if (handone==13){
        handone= "K";
    }else if (handone==12){
        handone= "J";
    }else if (handone==11){
        handone= "Q";
    }
    document.getElementById('handone').innerHTML = handone;

    cash=cash-bet
    if (dealerhand > handone){
        var wl="Loss";
    }else if (dealerhand == handone){
        var wl="Push";
        cash=cash+bet
    }
    else {
        var wl="Win";
        cash=cash+2*bet
    }    
    document.getElementById('wl').innerHTML = wl;
    document.getElementById('cash').innerHTML = cash;

    red='#a91818'
    black="#000000"

    let handonesuit = Math.floor((Math.random()*4))
    if (handonesuit==1) {
        handonesuit= "SVGs/heart.svg";
        dealerColor=red
    }else if (handonesuit==2){
        handonesuit= "SVGs/spades.svg";
        dealerColor=black
    }else if (handonesuit==3){
        handonesuit= "SVGs/diamonds.svg";
        dealerColor=red
    }else if (handonesuit==0){
        handonesuit= "SVGs/clubs.svg";
        handoneColor=black
    }
    document.getElementById('handonesuit').src = handonesuit;
    document.getElementById('handoneColor').innerHTML = handoneColor;

    let dealersuit = Math.floor((Math.random()*4))
    if (dealersuit==1) {
        dealersuit= "SVGs/heart.svg";
        dealerColor=red
    }else if (dealersuit==2){
        dealersuit= "SVGs/spades.svg";
        dealerColor=black
    }else if (dealersuit==3){
        dealersuit= "SVGs/diamonds.svg";
        dealerColor=red
    }else if (dealersuit==0){
        dealersuit= "SVGs/clubs.svg";
        dealerColor=black
    }
    document.getElementById('dealersuit').src = dealersuit;
    document.getElementById('dealerColor').innerHTML = dealerColor;
    
}

function betUp(){
    bet=bet+50
    document.getElementById('bet').innerHTML = bet;
}
function betDown(){
    bet=bet-50
    document.getElementById('bet').innerHTML = bet;
}
