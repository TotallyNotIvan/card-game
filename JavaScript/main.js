let red = "#a91818";
let black = "#000000";
function deal(){
    var dealerhand = Math.floor((Math.random()*13)+2)
    if (dealerhand ==14) {
        dealerhand = "A";
        dealerhandValue = 11;
    }else if (dealerhand==13){
        dealerhand = "K";
        dealerhandValue = 10;
    }else if (dealerhand==12){
        dealerhand = "J";
        dealerhandValue = 10;
    }else if (dealerhand==11){
        dealerhand = "Q";
        dealerhandValue = 10;
    }
    else{
        dealerhandValue = dealerhand;
    }
    document.getElementById('dealerhand').innerHTML = dealerhand;
    // document.getElementById('dealerhandValue').innerHTML = dealerhandValue;

    var handone = Math.floor((Math.random()*13)+2)
    if (handone==14) {
        handone= "A";
        handoneValue = 11;
    }else if (handone==13){
        handone= "K";
        handoneValue = 10;
    }else if (handone==12){
        handone= "J";
        handoneValue = 10;
    }else if (handone==11){
        handone= "Q";
        handoneValue = 10;
    }
    else{
        handoneValue = handone;
    }
    document.getElementById('handone').innerHTML = handone;
    // document.getElementById('handoneValue').innerHTML = handoneValue;

    cash=cash-bet
    if (dealerhandValue > handoneValue){
        var wl="Loss";
    }else if (dealerhandValue == handoneValue){
        var wl="Push";
        cash=cash+bet
    }
    else {
        var wl="Win";
        cash=cash+2*bet
    }    
    document.getElementById('wl').innerHTML = wl;
    document.getElementById('cash').innerHTML = cash;

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
    }else{

    }
    document.getElementById('handonesuit').src = handonesuit;
    // document.getElementById('handoneColor').innerHTML = handoneColor;

    let dealersuit = Math.floor((Math.random()*4))
    if (dealersuit==1) {
        dealersuit= "SVGs/heart.svg";
        // dealerColor=red
        // document.getElementById('dealerColor').innerHTML = dealerColor;
        // document.getElementById('dealersuit').src = dealersuit;
    }else if (dealersuit==2){
        dealersuit= "SVGs/spades.svg";
        // dealerColor=black
        // document.getElementById('dealerColor').innerHTML = dealerColor;
        // document.getElementById('dealersuit').src = dealersuit;
    }else if (dealersuit==3){
        dealersuit= "SVGs/diamonds.svg";
        // dealerColor=red
        // document.getElementById('dealerColor').innerHTML = dealerColor;
        // document.getElementById('dealersuit').src = dealersuit;
    }else if (dealersuit==0){
        dealersuit= "SVGs/clubs.svg";
        // dealerColor=black
        // document.getElementById('dealerColor').innerHTML = dealerColor;
        // document.getElementById('dealersuit').src = dealersuit;
    }else{

    }
    document.getElementById('dealersuit').src = dealersuit;
    // document.getElementById('dealerColor').innerHTML = dealerColor;

    // if (dealerColor==black){
    //     document.getElementById('dealerColor').innerHTML = dealerColor;
    // }else{
    //     document.getElementById('dealerColor').innerHTML = dealerColor;
    // }

    // if (dealerColor==black){
    //     document.getElementById('dealerColor').innerHTML = "#000000";
    // }else{
    //     document.getElementById('dealerColor').innerHTML = "#a91818";
    // }
    
}

function betUp(){
    bet=bet+50
    document.getElementById('bet').innerHTML = bet;
}
function betDown(){
    bet=bet-50
    document.getElementById('bet').innerHTML = bet;
}

function navToggle() { // creates a new function named navToggle
    var x = document.getElementById("main-nav"); // creates a variable set to #main-nav
      if (x.className === "topnav") { // if #main-nav has a class of .topnav,
      x.className += " responsive";   // then add a new class
    } else {                          // if it doesn't,
      x.className = "topnav";         // set class to .topnav
    } //closes if-else
  } //closes function