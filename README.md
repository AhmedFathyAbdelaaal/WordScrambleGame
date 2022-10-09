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
