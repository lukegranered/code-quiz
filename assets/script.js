var homeCard = document.querySelector("#home");
var queCard = document.querySelector("#que-card");
var saveGame = document.querySelector("#save-game");
var highScores = document.querySelector("#highscores");
var answerButtons = document.querySelectorAll(".js-btn-question");
var myCounter = document.querySelector("#my-counter");
let questionNumber = 0;
var timerInterval;
var playerScores = JSON.parse(localStorage.getItem("playerScores"))||[];
function init() {
    var startBtn = document.querySelector("#start-btn");
    var highScoreBtn = document.querySelector("#highscore-btn");
    startBtn.addEventListener("click", () => {
        populateCueCard(0);
        timerInterval = setInterval(onTimer, 1000);
        if (homeCard.style.display === "flex") {
            homeCard.style.display = "none";
        } else {
            homeCard.style.display = "none";
        }
        if (queCard.style.display === "none") {
            queCard.style.display = "flex"
        } else {
            queCard.style.display = "none"
        }
        
        answerButtons.forEach((answerButton) => {
            answerButton.addEventListener("click", (event) => {
                const isCorrect = event.target.dataset.isCorrect;
                trueOrFalse(isCorrect);
                console.log(isCorrect);
            })
        });

    });
    highScoreBtn.addEventListener("click", populateHighScores);

    // if (myCounter.style.display === "flex") {
    //     myCounter.style.display = "none"
    // } else {
    //     myCounter.style.display = "none"
    // }

    if (homeCard.style.display === "none") {
        homeCard.style.display = "flex";
    } else {
        homeCard.style.display = "flex";
    }

    if (highScores.style.display === "flex") {
        highScores.style.display = "none";
    } else {
        highScores.style.display = "none";
    }
};

function populateCueCard() {

    if (questionNumber >= 4) {
        saveYourScore();
    }
    var focusQuestion = document.querySelector("#question");
    focusQuestion.innerText = questions[questionNumber].question;

    var answerButtons = document.querySelectorAll(".js-btn-question");

    
    for (i = 0; i < questions[questionNumber].answers.length; i++) {
        const answerOption = questions[questionNumber].answers[i];
        answerButtons[i].innerText = answerOption.answer;
        console.log(questionNumber);
        answerButtons[i].setAttribute("data-is-correct", answerOption.isCorrect);
        
    }
    questionNumber += 1;
     
    
}

let timer = 60;
function onTimer() {
    document.getElementById("my-counter").innerHTML = timer;
    if (timer <= 0) {
        clearInterval(timerInterval);
        saveYourScore();
    } else {
        timer--;
        }
    };



function trueOrFalse(answerSelected) {
    if (answerSelected === "true") {
        timer += 10;
        populateCueCard();
    } else {
        window.alert("Sorry, wrong answer!")
        timer -= 10;
    }
}


function populateHighScores() {
    clearInterval(timerInterval);
    if (saveGame.style.display === "flex") {
        saveGame.style.display = "none"
    } else {
        saveGame.style.display = "none"
    }
    if (highScores.style.display === "none") {
        highScores.style.display = "flex";
    } else {
        highScores.style.display = "none";
    }
    if (myCounter.style.display === "flex") {
        myCounter.style.display = "none"
    } else {
        myCounter.style.display = "none"
    }

    
    var player = document.getElementById("player");
    for (var i = 0; i < playerScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = playerScores[i].playerName + " : " + playerScores[i].score;
        player.append(li);
    }
    


    var homeButton = document.getElementById("home-btn");
        homeButton.addEventListener("click", init);
    
}


function saveYourScore() {
    if (queCard.style.display === "flex") {
        queCard.style.display = "none"
    } else {
        queCard.style.display = "none"
    }
    // if (myCounter.style.display === "flex") {
    //     myCounter.style.display = "none"
    // } else {
    //     myCounter.style.display = "none"
    // }
    if (saveGame.style.display === "none") {
        saveGame.style.display = "flex"
    } else {
        saveGame = "none"
    }
    clearInterval(timerInterval);
    // var yourScore = document.querySelector("#your-score");
    // yourScore.innerText = timer;
    
    var playerName = document.getElementById("player-name");
    
    
    
    var saveButton = document.getElementById("save-btn");
    saveButton.addEventListener("click", () => {
        playerScores.push({'playerName': playerName.value, 'score': timer});
        localStorage.setItem('playerScores', JSON.stringify(playerScores));
        console.log(localStorage);
        populateHighScores();
    }) 
}

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

init();