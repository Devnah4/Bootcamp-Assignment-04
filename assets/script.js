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
const startBox = document.getElementById("quiz-top")
const totalTime = 75;
const totalPoints = 0;
var activeSection;

// Unhide startCode
window.onload=function(){
    startBox.classList.remove("hidden");
    activeSection = startBox;
    timer.textContent = totalTime;

    // if(totalPoints === null) {
    //     totalPoints[];
    // }
}

// Start Quiz Code
document.getElementById("quiz-start").onclick = startQuiz;

// Question Response Code


// Code for High Score
var score=[];
highScore.addEventListener("click", function() {
    console.log('Score');
});

// script for button response
quizStart.addEventListener("click", function() {     
    console.log('Start');
});

quizAnswer.addEventListener("click", function() {
    console.log('Right');
});

quizWrong.addEventListener("click", function() {
    console.log('Wrong');  
});

// Questions
let codeQuestions = [
    {
        set: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        true: "True",
        wrong1: "Hyper Thyroid Makeup Laser",
        statement1: "false",
        wrong2: "Hyper Text Multi Language",
        statement2: "false",
        wrong3: "Hip Totalitarian Model Language",
        statement3: "false",
    },
    {
        set: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        true: "True",
        wrong1: "Crazy Sick style",
        statement1: "false",
        wrong2: "Cascading Symmetry Styles",
        statement2: "false",
        wrong3: "Cool Skin Sheet",
        statement3: "false",
    },
    {
        set: 3,
        question: "Javascript first apperaed when?",
        answer: "1995",
        true: "True",
        wrong1: "2000",
        statement1: "false",
        wrong2: "1993",
        statement2: "false",  
        wrong3: "2010",
        statement3: "false",  
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

// Save the Score
var saveScore = function() {
    localStorage.setItem("score", JSON.stringify(score));
}