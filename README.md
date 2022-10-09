# WordScrambleGame
  
## A simple Word Scrambling Game where the user has to guess what the scrambled letters make in terms of words

In this Git Repository you will find 4 files.

1. index.html:
  -This file includes the html code for the game. and it links to "style.css", "script.js" & "words.js"
2. style.css:
  -Includes the formating for the game.
3. words.js:
  -Includes the words that will be in our game
4. script.js:
  -Includes the functionality of the game.
  
Further Comments are put inside the code to explain what each part does.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Scramble Game</title> <!--Title of Page-->
    <link rel="stylesheet" href="./style.css"> <!--CSS Link-->
    
</head>
<body>
    <!--Our Main Container-->
    <div class="container">
        <!--Title--> 
        <h2>Word Scramble Game</h2>
        <!--The Content-->
        <div class="content">
            <p class="word"></p> <!--Where The word we'll guess will be.-->
            <!--Details section with hint & time-->
            <div class="details">
                <p class="hint">Hint: <span></span></p> <!--Where the Hint will be displayed-->
                <p class="time">Time Left: <span><b class="timeMax">30</b>s</span></p> <!--Where the Time Remaining will be displayed-->
            </div>
            <input type="text" spellcheck="false" placeholder="Enter a valid word"> <!--Input field to put in Answer-->
            <!--Buttons Div with the Refresh Button & Check Button-->
            <div class="buttons">
                <button class="refresh-word">Refresh Word</button>
                <button class="check-word">Check Word</button>
            </div>
        </div>
    </div>
    <!--Our JS Scripts used for Functionality-->
    <script src="./js/words.js"></script>
    <script src="./js/script.js"></script>
</body>
</html>
```
This is what is in the index.html file. our html code. This mainly builds up the basis & components of our game. We have the title of the Game in an h2. Then a div with the class content is made to house our content for the game. In content we have:

	-A p tag with class "word". this will house the word the user has to guess.  
	-Div tag with class "details". This will house the hint and time left for the user to see.  
		-The div tag has 2 p tags, one with the class "hint" & the other with "time". Both display the hint for the user & time left respectively.   
	-Input tag for the input field for the users answer  
	-Another div tag with 2 button tags inside  
	-First one with class "refresh-word", will refresh the word the user has to guess  
	-Second one with class "check-word", will check the word the user has inputed  
	
There are 3 things linked inside the html file. we have: 

		&nbsp;	1. A link for the CSS File style.css  
		&nbsp;	2. A script link for words.js file  
		&nbsp;	3. A script link for the script.js file   

## We will start with style.css:

The CSS File contains basically all the code we need to format how the game will look. and for each element we gave it certain properties to make it the way it looks.

## Then onto the words.js file:

```js
let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]

```

This code basiaclly is the list of words & their hints. said words are the words the player will try & guess.  


## Onto the meat & potatoes of this code. script.js:

This file contains all the functionality of the game and hence is very important.  

in the file we:  
first declare the constant variables we need to make the game run.  
```js
const wordText = document.querySelector(".word"); //the word area in the html file.
const hintText = document.querySelector(".hint span"); //the hint text in the html file.
const timeText = document.querySelector(".time b"); //the time text in the html file.
const inputField = document.querySelector("input"); //the input field in the html file.
const refreshBtn = document.querySelector(".refresh-word"); //the refresh button in the html file.
const checkBtn = document.querySelector(".check-word"); //the check button in the html file.
```

after declaring the previous variables that are constant we declare ones that arent  

```js
let correctWord, timer; //Declaring variables.
```

### Now onto the first function  

## initTimer:  

initTimer is written like so:  
```js 
//Function responsible for reducing & controling the timer.
const initTimer = maxTime => {
```
we declare it and it recieves maxTime, in our case we will pass it 30s usually.  
```js
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--; //reduce time by 1 second
            return timeText.innerText = maxTime; //update timer with the appropriate time.
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`); //if answer not entered in time, show failure message.
        initGame(); //reset the game
    }, 1000);
```
-In the code above, clearInterval(timer) is there to clear the previous interval of timer  
  -"timer = setInterval() => {" is like a function, every second(because of the 1000 at the end of it, the 1000 is 1000ms which is a second) it will do
	-If the maxTime is still bigger than 0, (time didnt run out).  
		-maxTime-- reducing the time by 1 second  
		- and after that it changes the text displaying the time with the current updated time.  
	-If maxTime becomes 0, then it will show the failure msg to the user & reset the game through the initGame function.	
```js
}
```
the curly brackets continuing the englufing of the initTimer function  .

### Onto Second Function

## initGame():
```js
const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)]; //get a random word from the words list.
    let wordArray = randomObj.word.split(""); //split the word
    //for loop to randomise the word
    for (let i = wordArray.length - 1; i > 0; i--) { 
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); //join the array
    hintText.innerText = randomObj.hint;  //display the appropriate hint.
    correctWord = randomObj.word.toLowerCase(); //Set correctWord to the word but in lower case to better comapre it later.
    inputField.value = ""; //clear input field
    inputField.setAttribute("maxlength", correctWord.length); //Set appropriate maxlength for input field
}
```
### Thats the full code above. onto the explaination:

we start by starting the timer with the time of 30.  

```js
initTimer(30)
```

then we get a random word from the words file. this is done in the randomObj element, which will become a random word the user has to guess.
This is done with Math functions, Math.floor of Math.random multiplied with words.length, basically getting a random number in the range of the size of "words" and said number is floored to become an integer then that int number becomes the index for words[].

word Array is an array with the word splitting of randomObj, this is here to help us randomize the letter later.

```js
let randomObj = words[Math.floor(Math.random() * words.length)]; //get a random word from the words list.
let wordArray = randomObj.word.split(""); //split the word
 ```
In the For Loop below, a loop through the length of wordArray is done.  
While doing so a random number j using Math.random() multiplied with i+1 and is produced.  
Then the wordArray is shuffled using the i and j values as index. this is all done to randomize the letters as well as we can.  
 ```js
 for (let i = wordArray.length - 1; i > 0; i--) { 
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
 ```
Now for below, the array is joined back and placed in the wordText variable which is for the place on our game that holds the randomized word the user has to guess.  
Also the hintText is updated to fit the word the user has to guess.    
The variable correct word is filled with the correct value.   
It was changed to lowercase for a fair asseessment of the guessed word by the user, and to avoid issues when comparing.  
The input field is cleared for ease of use for the user.  
The max length of the input field is set according to the word they have to guess.  
 ```j
 wordText.innerText = wordArray.join(""); //join the array
    hintText.innerText = randomObj.hint;  //display the appropriate hint.
    correctWord = randomObj.word.toLowerCase(); //Set correctWord to the word but in lower case to better comapre it later.
    inputField.value = ""; //clear input field
    inputField.setAttribute("maxlength", correctWord.length); //Set appropriate maxlength for input field
 ```
 Then we call the initGame function to start the program from the get go.  
 ```js
 initGame(); //calling the function to display the first word to be guessed.
 ```
 ### Onto the Third & Last function
 
 ## checkWord():
 
 ```js
 //function that checks if the inputted word is correct.
const checkWord = () => {
    let userWord = inputField.value.toLowerCase(); //userWord will be the User input.
    if(!userWord) return alert("Please enter the word to check!"); //If nothing is in the input field then show appropriate failure message.
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`); //If the input field has the wrong aswer then show appropriate failure message.
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`); //If the input field has the correct answer then show appropriate success message.
    initGame(); //reinitialize the game
}
```
In the code above, if the user presses the "check" button, the checkWord is called.  
userWord is the value inside the input field when the "check" button is clicked.  
IF:  
	
	-userWord is empty, it returns an appropriate message for the user to put something to get checked.  
	-userWord is not the right word. It returns an appropriate message for the user that their answer was not correct.  
	-Other than than, if it is correct, it will congratulate the user.   
	
Then it calls initGame() to reset the game.

##This is the end.

 
