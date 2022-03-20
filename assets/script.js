// Global Variables
const quizStart = document.getElementById("quiz-start");
const timer = document.getElementById("quiz-time");
const highScore = document.getElementById("quiz-score");
const quizText = document.getElementById("quiz-body");
const quizAnswer = document.getElementById("quiz-answerTrue");
const quizWrong = document.getElementById("quiz-answer");
const quizBox = document.getElementById("quiz-question-set");
const startPage = document.getElementById("quiz-text");
const startButton = document.getElementById("quiz-button");
const totalTime = 75;
const totalPoints = 0;

// Start Quiz Code
document.getElementById("quiz-start").onclick = startQuiz;

function startQuiz () {
    startPage.innerHTML = 'You did it billy';
}

// Code for High Score
var score=[];
highScore.addEventListener("click", function() {
    console.log('Score');
});

// script for button response
quizStart.addEventListener("click", function() {     
    console.log('Start');
});

function hideStart() {
    var x = document.getElementById("quiz-text");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

quizAnswer.addEventListener("click", function() {
    console.log('Right');
});

quizWrong.addEventListener("click", function() {
    console.log('Wrong');  
});
// Create The Questions


// Questions
let codeQuestions = [
    {
        set: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        wrong1: "Hyper Thyroid Makeup Laser",
        wrong2: "Hyper Text Multi Language",
        wrong3: "Hip Totalitarian Model Language",
    },
    {
        set: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        wrong1: "Crazy Sick style",
        wrong2: "Cascading Symmetry Styles",
        wrong3: "Cool Skin Sheet",
    },
    {
        set: 3,
        question: "Javascript first apperaed when?",
        answer: "1995",
        wrong1: "2000",
        wrong2: "1993",  
        wrong3: "2010",  
    },
    // {
    //     set: 4,
    //     question: "Firefox was released in?",
    //     answer: "2002",
    //     choices: [
    //         "2002",
    //         "1998",
    //         "2006",
    //         "1990",
    //         ]
    // },
    // {
    //     set: 5,
    //     question: "Linux was created by?",
    //     answer: "Linus Torvalds",
    //     choices: [
    //         "Linus Sebastian",
    //         "Linus Arnesson",
    //         "Linus Torvalds",
    //         "Linus Roache",
    //         ]
    // },
    // {
    //     set: 6,
    //     question: "The code <p> denotes what?",
    //     answer: "Paragraph",
    //     choices: [
    //         "Picture",
    //         "Paragraph",
    //         "Potential",
    //         "Private",
    //         ]
    // },
    // {
    //     set: 7,
    //     question: "Color changes what in css?",
    //     answer: "Text Color",
    //     choices: [
    //         "Border Color",
    //         "Background Color",
    //         "Footer Color",
    //         "Text Color",
    //         ]
    // },
    // {
    //     set: 8,
    //     question: "What is GIT used for?",
    //     answer: "Traking changes to files",
    //     choices: [
    //         "Uploading files",
    //         "Traking changes to files",
    //         "Sharing notes",
    //         "Debugging your software",
    //         ]
    // },
    // {
    //     set: 9,
    //     question: "To Deploy a page on Github you use what section in setting?",
    //     answer: "Pages",
    //     choices: [
    //         "Enviroments",
    //         "Deploy keys",
    //         "Webhooks",
    //         "Pages",
    //         ]
    // },
    // {
    //     set: 10,
    //     question: "Terminal is our...",
    //     answer: "Friend",
    //     choices: [
    //         "Friend",
    //         "Enemy",
    //         "Father",
    //         "Neighbor",
    //         ]
    // }
]

// Submit the questions



var saveScore = function() {
    localStorage.setItem("score", JSON.stringify(score));
}