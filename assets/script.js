// Global Variables
var quizStart = document.getElementById("quiz-start");
var timer = document.getElementById("quiz-time");
var highScore = document.getElementById("quiz-score");
var quizText = document.getElementById("quiz-body");

// Code for High Score

// script for button response
quizStart.addEventListener("click", function() {
    console.log('hi');
    
});


// Questions
let questions = [
    {
        set: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        choices: [
            "Hyper Thyroid Makeup Laser",
            "Hyper Text Multi Language",
            "Hyper Text Markup Language",
            "Hip Totalitarian Model Language",
            ]
    },
    {
        set: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        choices: [
            "Crazy Sick style",
            "Cascading Style Sheet",
            "Cool Skin Sheet",
            "Cascading Symmetry Styles",
            ]
    },
    {
        set: 3,
        question: "Javascript first apperaed when?",
        answer: "1995",
        choices: [
            "2000",
            "1993",
            "2010",
            "1995",
            ]
    },
    {
        set: 4,
        question: "Firefox was released in?",
        answer: "2002",
        choices: [
            "2002",
            "1998",
            "2006",
            "1990",
            ]
    },
    {
        set: 5,
        question: "Linux was created by?",
        answer: "Linus Torvalds",
        choices: [
            "Linus Sebastian",
            "Linus Arnesson",
            "Linus Torvalds",
            "Linus Roache",
            ]
    },
    {
        set: 6,
        question: "The code <p> denotes what?",
        answer: "Paragraph",
        choices: [
            "Picture",
            "Paragraph",
            "Potential",
            "Private",
            ]
    },
    {
        set: 7,
        question: "Color changes what in css?",
        answer: "Text Color",
        choices: [
            "Border Color",
            "Background Color",
            "Footer Color",
            "Text Color",
            ]
    },
    {
        set: 8,
        question: "What is GIT used for?",
        answer: "Traking changes to files",
        choices: [
            "Uploading files",
            "Traking changes to files",
            "Sharing notes",
            "Debugging your software",
            ]
    },
    {
        set: 9,
        question: "To Deploy a page on Github you use what section in setting?",
        answer: "Pages",
        choices: [
            "Enviroments",
            "Deploy keys",
            "Webhooks",
            "Pages",
            ]
    },
    {
        set: 10,
        question: "Terminal is our...",
        answer: "Friend",
        choices: [
            "Friend",
            "Enemy",
            "Father",
            "Neighbor",
            ]
    }
]

// Submit the questions
// quizStart.addEventListener("submit", createTaskHandler);