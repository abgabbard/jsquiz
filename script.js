// Fucntions Needed
// Start Game Function 
// Correct Answer Function (Move to Next Question)
// Wrong Answer Function (Move to Next Question but Subtract Time)
// Timer Function (countdown from 3 minutes)
// Do we want to randomly pull questions from an array... creat a function to select which question. Should this be random or do we just have it go through indexes?

var startButton  = document.getElementById('start-btn')
var checkButton = document.getElementById("check-btn")
var questionContainer = document.getElementById("question-container")

startButton.addEventListener("click", startGame)
checkButton.addEventListener("click", checkAnswer)

function startGame() {
    console.log("started");
    startButton.classList.add('hide')
    currentQuestionIndex = 0 
    questionContainer.classList.remove('hide')
    checkAnswer
    setNextQuestion
}

function checkAnswer() {
console.log("checking answer")
// This should check their selection to 
}

function setNextQuestion(){
    // This will randomly check which questions they have already had, (no repeating) and set the next question
}

function selecetAnswer() {
    // Need to set an onclick event to set a value / select answer when the user actually selects it. The "check answer" button will compare correct answer to theirs.
}

function timer(){

}

randomQuestionSelection= 

// If we turn the below into an array - how do we tie the correct "choices" options for each .... As in, how do I make it so that Question 1Choices actually show up for Question 1 and not a different one, if we randomly loop through the array?
Question1="What is JavaScript"
Question2="Who is JavaScript"
Question3="Where is JavaScript"
Question4="When is JavaScript"
Question5="Why is JavaScript"

Question1Choices=[Option1A, Option1B, Option1C, Option1D]
Question2Choices=[Option2A, Option2B, Option2C, Option2D]
Question3Choices=[Option3A, Option3B, Option3C, Option3D]
Question4Choices=[Option4A, Option4B, Option4C, Option4D]
Question5Choices=[Option5A, Option5B, Option5C, Option5D]

// There are two ways I think you could do this: randomly generate the answers in any order - and having the "correct" value tied to the answer or
// We could create an array of correct - pre-determined (and ordered) answer choices and say if an answer "does not equal one of those" (in any question that is asked) deduct time from the quiz

var CorrectAnswers=[Option1A, Option2C, Option3C, Option4B, Option5A]

