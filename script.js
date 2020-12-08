var startButton  = document.getElementById("start-btn")
var checkAnswer = document.getElementById("check-btn")
var questionContainer = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerElement = document.getElementById("answer-buttons")
var timeLeft = document.getElementById("timeLeft")
// For the Timer we need to Insert 180 second countdown / refreshing @ intervals 1 second
var scoreCount = document.getElementById("scoreCount")
// Wiring up click handlers for each option (a, b, c , d) while putting them into a variable (aButton - dButton)

// May not need these: 
var aButton = document.getElementById("aBtn")
var bButton = document.getElementById("bBtn")
var cButton = document.getElementById("cBtn")
var dButton = document.getElementById("dBtn")

let randomQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
checkAnswer.addEventListener("click", checkAnswer)

function startGame() {
    console.log("startGame-started");
    startButton.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questionContainer.classList.remove('hide')
    scoreCount.classList.remove('hide')
    timeLeft.classList.remove('hide')
    setNextQuestion()
    // timeStart()
    console.log("startGame-finished")
}

function checkAnswer() {
    console.log("checkAnswer-Started")
    // if user input equals any of the wrong answer (in wrong answer array) we will want to 
    // run the function  wrongAnswer - which will deduct 10 seconds from the interval timer
    console.log("checkAnswer-Finished")
} 
//     if it is correct (DOES IT MATCH ANY FROM CORRECTANSWERARRAY)
//   - RUN function setNextQuestion
function setNextQuestion(){
    resetState()
    console.log("setNextQuestion-started")
    showQuestion(randomQuestions[currentQuestionIndex])
    console.log("setNextQuestion-finished")
// This will randomly check which questions they have already had, (no repeating) and set the next question
// We need this function to use inserttext innerhtml etc. to to put the question and options into the html and it will pull from randomQuestion[i]
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerElement.appendChild(button)
    })
}

function resetState() {
    checkAnswer.classList.add('hide')
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}

function selectAnswer(e) {
    selectedButton = e.target
    correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
}

function timerStart() {
    //Insert code here to start a countdown from 180 seconds into the Insert into TIME LEFT Variable
}

function wrongAnswer() {
    // IF user chose *any* wrong answer (correct: false) THEN

    alert("Oops! WRONG!!!! 10 SECONDS OFF!")
    // decrement total remaining time by 10 seconds.
    
}

function increaseScore() {
    // If Answer 
}

questions = [
    {
        question: "What is JavaScript",
        answers: [
            {text: "A Wonderful Language", correct: true},
            {text: "Coffee", correct: false},
            {text: "Hmmm Plz", correct: false},
            {text: "I really really do not know", correct: false}
        ]
    }
]

// Need to add a countdown timer to the page so we can deduct 10 seconds from it as soon as the 
// user hits START

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function(){
    seconds--;
    (seconds == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s";
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
},1000);

// randomQuestion=Random choice (MathRandomMathFloor) from Questions Array.
// // If we turn the below into an array - how do we tie the correct "choices" options for each .... As in, how do I make it so that Question 1Choices actually show up for Question 1 and not a different one, if we randomly loop through the array?
// // There are two ways I think you could do this: randomly generate the answers in any order - and having the "correct" value tied to the answer or
// // We could create an array of correct - pre-determined (and ordered) answer choices and say if an answer "does not equal one of those" (in any question that is asked) deduct time from the quiz
// If the users answer matches any of these options - we want to setNextQuestion - and continue running the timer(no issue here)
// var CorrectAnswerArray=[Option1A, Option2C, Option3C, Option4B, Option5A]
