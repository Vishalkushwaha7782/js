# Projects related to Dom

## Project 01
*********************JS CODE *******************************
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

*****************HTML CODE **************
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="script.js"></script>
  </body>
</html>
 **************************CSS CODE******************************
 html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}


## Project 02
```javascript
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')
    if(height ==='' || height <0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight ==='' || weight <0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight/((height*weight)/10000)).toFixed(2)
        // show the result
        results.innerHTML=`<span>${bmi}</span>`;
    }
});

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="index.js"></script>
</html>

```css
.container {
  width: 575px;
  height: 825px;

  background-color: #797978;
  padding-left: 30px;
}
#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 35px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
  
}

```
 ## Project 03 solution code

 ```javascript
 const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
},1000);

```
## Project 03 number guessing game

```javascript
// const form = document.querySelector('.form');
let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevguess = []
let numguess = 1

let playgame = true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }
    else if(guess < 1){
        alert('please enter number more than 1');
    }
    else if(guess >100){
        alert('enter number less than 100');
    }
    prevguess.push(guess);
    if(numguess === 11){
        displayguess(guess)
        displayMessage(`game over.Random number was ${randomNumber}  `)
        endgame();
    }
    else{
        displayguess(guess)
        checkguess(guess)
    }
}
function checkguess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed it right`)
        endgame()
    }else if(guess < randomNumber){
        displayMessage(`number is too low`)
    }
    else if(guess > randomNumber){
        displayMessage(`number is too high`)
    }
}
function displayguess(guess){
    userInput.value =''
    guessSlot.innerHTML += `${guess}`
    numguess++;
    remaining.innerHTML = `${11-numguess}`;
}
function displayMessage(guess){
    lowOrHi.innerHTML = `<h2>${displayMessage}</h2>`
}
function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
}
function newgame(){
    const newGameButton = document.querySelector('#newGame');
    randomNumber = parseInt(Math.random()*100+1);
    prevguess = []
    numguess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numguess}`;
    userInput.removeAttribute('disabled');
    startover.removeChild(p)

    playgame = true;
}

```
## color change every second

```javascript
const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalid;
const startChangingcolor = function(){
    if(!intervalid){
    intervalid = setInterval(changeBgColor,1000);
    }
    function changeBgColor(){document.body.style.backgroundColor = randomcolor()
    }
};
const stopChangingcolor = function(){
    clearInterval(intervalid);
    intervalid = null;
}
document.querySelector('#start').addEventListener('click',startChangingcolor

)

document.querySelector('#stop').addEventListener('click',stopChangingcolor

)


