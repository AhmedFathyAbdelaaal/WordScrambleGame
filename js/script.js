//Declaring Const Variables to be used throughout the code.
const wordText = document.querySelector(".word"); //the word area in the html file.
const hintText = document.querySelector(".hint span"); //the hint text in the html file.
const timeText = document.querySelector(".time b"); //the time text in the html file.
const inputField = document.querySelector("input"); //the input field in the html file.
const refreshBtn = document.querySelector(".refresh-word"); //the refresh button in the html file.
const checkBtn = document.querySelector(".check-word"); //the check button in the html file.

let correctWord, timer; //Declaring variables.

//Function responsible for reducing & controling the timer.
const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--; //reduce time by 1 second
            return timeText.innerText = maxTime; //update timer with the appropriate time.
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`); //if answer not entered in time, show failure message.
        initGame(); //reset the game
    }, 1000);
}

//function responsible for showing the scrambled words & starting the timer.
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

initGame(); //calling the function to display the first word to be guessed.

//function that checks if the inputted word is correct.
const checkWord = () => {
    let userWord = inputField.value.toLowerCase(); //userWord will be the User input.
    if(!userWord) return alert("Please enter the word to check!"); //If nothing is in the input field then show appropriate failure message.
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`); //If the input field has the wrong aswer then show appropriate failure message.
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`); //If the input field has the correct answer then show appropriate success message.
    initGame(); //reinitialize the game
}

refreshBtn.addEventListener("click", initGame); //event handler for the refresh button
checkBtn.addEventListener("click", checkWord); //event handler for the check button