// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
var x = document.getElementById("guessField").value;

var guess = 1;

function submit(){

    if(x == y){
        alert("congratulations, " + playername + "!!! you got it right in " + guess + " guesses");
        guess = 1
    }
    else if(x>y){
        guess++;
        alert("oops! try a smaller number");
    }
    else{
        guess++;
        alert("oops! try a bigger number")
    }
}

function playAgain(){
    var y = Math.floor(Math.random() * 10 + 1);
}