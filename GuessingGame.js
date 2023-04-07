let maximum =parseInt(prompt("Enter the maximum number!"));

while(!maximum){
    maximum=parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random()*maximum)+1;

// section of guess the number game

let guess = parseInt(prompt("Enter your first guess!"));
let attempt = 1;

while(parseInt(guess)!==targetNum){
    if(guess=== 'q') break;
    attempt++;
    if(guess>targetNum){
        guess=parseInt(prompt("Too high! Enter a new guess:"));
    }
    else{
        guess=parseInt(prompt("Too low! Enter a new guess:"));
    }
}

if(guess==='q'){
    console.log("OK, YOU QUIT!");
}
else{
    console.log("CONGRATS YOU WIN!");
    console.log(`You got it! It took you ${attempt} guesses`);
}