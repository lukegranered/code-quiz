
var questions = [
    {
        question: "What is a function?", 
        answers: [
            {
                answer: "A way to adapt code to different size monitors.",
                isCorrect: false
            },
            {
                answer: "A command that selects specific elements on the page.",
                isCorrect: false
            },
            {
                answer: "A set of statements that performs a task or calculates value.",
                isCorrect: true
            },
            {
                answer: "An event for friends, family, and coworkers.",
                isCorrect: false
            }
        ],
    },
    {
        question: "What does a variable do?",
        answers: [
            {
                answer: "Stores a data value that can be changed later on.",
                isCorrect: true
            },
            {
                answer: "Sets a specific background color.",
                isCorrect: false
            },
            {
                answer: "Gives an element a specific identity.",
                isCorrect: false
            },
            {
                answer: "Opens spotify.",
                isCorrect: false
            }
        ],
    },
    { 
        question: "What does a media query do?",
        answers: [
            {
                answer: "Asks important questions on the news.",
                isCorrect: false
            },
            {
                answer: "Stores data locally.",
                isCorrect: false
            },
            {
                answer: "Adjusts code based on the device the user is viewing to view an application.",
                isCorrect: true
            },
            {
                answer: "Allows users to input data.",
                isCorrect: false
            }
        ],
    },
    {
        question: "What is localStorage?",
        answers: [
            {
                answer: "An element within another element.",
                isCorrect: false
            },
            {
                answer: "A martial arts practice.",
                isCorrect: false
            },
            {
                answer: "A property that allows JavaScript sites and apps to save data in a web browser.",
                isCorrect: true
            },
            {
                answer: "A company that rents storage units.",
                isCorrect: false
            }
        ]
    }
];
// TO DO:
    // add event listener for start buttom
    // create new function to initialize first que card
        //populate cue card 
        // add event listeners for buttons
        // callback checkAnswer
        // add data attribute to button 
        // store write/wrong answer in localStorage
var currentQuestionNumber = 0

function init() {
    var introEl = document.querySelector("#intro-card");
    var startBtn = document.querySelector("#strt-btn");
    // if (introEl.style.display === "none") {
    //     introEl.style.display = "block";
        
    // } else {
    //     introEl.style.display = "none";
    // }

    startBtn.addEventListener("click", () => {
        populateQueCard(currentQuestionNumber);
        introEl.style.display = "none";
    })

}

function populateQueCard(index) {
    console.log(questions[index].question);
    var queCard = document.querySelector(".que-card");
    if (queCard.style.display === "none") {
        queCard.style.display = "block";
    } else {
        queCard.style.display = "none";
    }


    var answerButtons = document.querySelectorAll("#answer-buttons > button");
        answerButtons.forEach(function(option) {
            for(var i = 0; i < questions.length; i++);
        })
    


    // step one - toggle display for que card container
    // step two - separate text for each
    // step three - differentiate answer classes
    // Button setup:
// 1. Document.querySelectorAll(your button class)
// Returns array of elements

// While in loop set event listeners
// Use checkAnswer() and populateQueCard() inside callback arrow function
// John Michael McCasland to Everyone (2:37 PM)
// checkAnswer() should check if answer is correct and store it somewhere
// 1. Document.querySelectorAll(your button class)
}
var buttonHandler = function(event) {
    var targetEl = event.target;

    if (targetEl.matches(isCorrect)) {
        populateQueCard(index);
    }
    currentQuestionNumber += 1;
}



init();