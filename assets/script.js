// Global Variables
var splashPage = document.getElementById("start");
var quizBox = document.getElementById("content");
var quizDone = document.getElementById("quiz-end");
var startBtn = document.getElementById("quiz-start");
var scoreBtn = document.getElementById("quiz-score");
var questionEl = document.getElementById("quiz-text");
var answerOneEl = document.getElementById("quiz-answerTrue");
var answerTwoEl = document.getElementById("quiz-answer1");
var answerThreeEl = document.getElementById("quiz-answer2");
var answerFourEl = document.getElementById("quiz-answer3");
var correctChoice;
var currentAnswer;
var totalTime = 75;
var totalPoints = 0;
var activeSection;
var currentQuestion = 0;
var quizLength =3;

// Questions
let codeQuestions = [
    {
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        wrong: [
                "Hyper Text Markup Language",
                "Hyper Thyroid Makeup Laser",
                "Hyper Text Multi Language",
                "Hip Totalitarian Model Language"]
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        wrong: [
                "Cascading Style Sheet",
                "Crazy Sick style",
                "Cascading Symmetry Styles",
                "Cool Skin Sheet"]

    },
    {
        question: "Terminal is our...",
        answer: "Friend",
        wrong:  [
                "Friend",
                "Food",
                "Precious",
                "Frenemie"] 
    },
]

// Unhide startCode
window.onload = function () {
    splashPage.classList.remove("hidden");
    activeSection = splashPage;
    // Displays the current Time
    time.textContent = totalTime + "sec :Remaining ";
}

// Hide and Show Function
function reveal (thisSection) {
    // Hide Current section
    activeSection.classList.add("hidden");
    // Show Next Section
    thisSection.classList.remove("hidden");
    activeSection = thisSection;
}

// Quiz Start
function startQuiz () {
    intervalID = setInterval(totalTime, 1000);
    reveal(quizBox);
    function startTimer(duration, display) {
        var timer = duration, seconds;
        setInterval(function () {
            seconds = parseInt(timer % 60, 10);
    
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent =  seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
            var totalTime = 60 * 5,
            display = document.querySelector('time');
            startTimer(totalTime, display);
        }, 1000);
    }
    quizBegin();
}

function quizBegin () {
    createQuiz(currentQuestion);
}

// Question Content
function createQuiz (firstRight) {
    // generate text content of question
    var createQuestion = codeQuestions[firstRight];
        
        currentAnswer = createQuestion.answer;

        // Test 01
        // questionEl.innerHTML = createQuestion.question;
        // answerOneEl.innerHTML = createQuestion.wrong[0];
        // answerTwoEl.innerHTML = createQuestion.wrong[1];
        // answerThreeEl.innerHTML = createQuestion.wrong[2];
        // answerFourEl.innerHTML = createQuestion.wrong[3];

        // Test 02
        // document.getElementById("questionEl").innerHTML = codeQuestions.question;
        // document.getElementById("answerOneEl").innerHTML = codeQuestions.wrong[0];
        // document.getElementById("answerTwoEl").innerHTML = codeQuestions.wrong[1];
        // document.getElementById("answerThreeEl").innerHTML = codeQuestions.wrong[2];
        // document.getElementById("answerFourEl").innerHTML = codeQuestions.wrong[3];

        // Test 03
        // document.getElementById("questionEl").innerText;document.getElementById("questionEl").innerHTML = text;
        // document.getElementById("answerOneEl").innerText;document.getElementById("answerOneEl").innerHTML = text;
        // document.getElementById("answerTwoEl").innerText;document.getElementById("answerTwoEl").innerHTML = text;
        // document.getElementById("answerThreeEl").innerText;document.getElementById("answerThreeEl").innerHTML = text;
        // document.getElementById("answerFourEl").innerText;
          

  }

function correctAnswer (trueClick) {
    if (trueClick == currentAnswer) {
        return true;
    } else {return false}
}

function quizBtnRes () {
    var isItCorrect = this.textContent;
    currentQuestion++;
    completeQuestion();
}

function completeQuestion () {
    if(currentQuestion < quizLength) {
        quizBegin();
    }
    else { 
       completedQuiz();
    }
}

// End Quiz Code
function completedQuiz () {
    reveal(quizDone);
    clearInterval(intervalID);
}

function scoreBtnPro () {
    window.confirm("Great Job! Here's Your High Score! " +  totalTime);
}
// Button Code
answerOneEl.addEventListener("click", quizBtnRes);
answerTwoEl.addEventListener("click", quizBtnRes);
answerThreeEl.addEventListener("click", quizBtnRes);
answerFourEl.addEventListener("click", quizBtnRes);

scoreBtn.addEventListener("click", scoreBtnPro);
startBtn.addEventListener("click", startQuiz);