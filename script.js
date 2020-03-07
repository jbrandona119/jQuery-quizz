const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timer = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");
//Questions to ask the user
let questions = [
    {
        question : "What does CSS stand for?",
        imgSrc : "img/html.png",
        choiceA : "Cascading Style Sheet",
        choiceB : "Creative Source Styles",
        choiceC : "Common Site Styling",
        choiceD : "Corona Sickness Scary",
        correct : "A"
    },
    {
        question : "What is the correct way to title your first HTML document?",
        imgSrc : "img/picture2.png",
        choiceA : "first.html",
        choiceB : "index.html",
        choiceC : "html.html",
        choiceD : "It doesn't matter",
        correct : "B"
    }
    {
        question : "How do you write 'Hello World' in an alert box in JavaScript?",
        imgSrc : "img/picture3.png",
        choiceA : "print(Hello World",
        choiceB : "create.text(Hello World)",
        choiceC : "alert('Hello World')",
        choiceD : "There is no alert box",
        correct : "C"
    }

    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture4.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    }

    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture5.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    }
    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture6.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    }
    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture7.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    }
    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture8.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    }
    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture9.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    }
    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture10.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    }
]

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
//This function generates the questions as you move along the quiz
function renderQuestion() {
    let q = questions[runningQuestionIndex];
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" +q.question+ "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

let TIMER;
// function to start quiz
function startQuiz(){
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    progressRender();
    questionRender();
    quiz.style.display = "block";
}
//This function is for the progress bar to show the user how far along in the quiz they are

function progressRender() {
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++);{
        progress.innerHTML += "<div class='prog' id=" +qIndex + "></div>";
    }
}
//This function will run when the answer the user selected is correct
function answerIsCorrect() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}

//This function will run when the answer the user selected is incorrect
function answerIsWrong() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}

const questionTime = 10;
const gaugeWidth = 150;
let count = 0;
const gaugeProgessUnit = gaugeWidth/questionTime;
let TIMER = setInterval(counterRender,1000);

//This is the function for the question counter
function counterRender(){
if( count <= questionTime ) {
    counter.innerHTML = count;  
    timeGauge.style.width = gaugeProgressUnit * count + "px";
    count++;
} else {
    count = 0;
    answerIsWrong();
    if( runningQuestionIndex < lastQuestionIndex){ 
        runningQuestionIndex++;
        questionRender();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}
}
let score = 0;
function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex) {
        count = 0;
        runningQuestionIndex++;
        questionRender();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}
