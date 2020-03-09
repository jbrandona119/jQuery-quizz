const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
// const qImg = document.getElementById("qImg");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
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
        // imgSrc : "img/picture1.png",
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
    },
    {
        question : "How do you write 'Hello World' in an alert box in JavaScript?",
        imgSrc : "img/picture3.png",
        choiceA : "print(Hello World",
        choiceB : "create.text(Hello World)",
        choiceC : "alert('Hello World')",
        choiceD : "There is no alert box",
        correct : "C"
    },

    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture4.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    },

    {
        question : "How are Java and JavaScript related?",
        imgSrc : "img/picture5.png",
        choiceA : "They are the exact same programming language",
        choiceB : "Java is for Apple MacBooks and JavaScript is for Windows",
        choiceC : "The only similarities are in name and the fact they're both programming languages",
        choiceD : "They were invented by the same individual",
        correct : "C"
    },
    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture6.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    },
    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture7.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    },
    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture8.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    },
    {
        question : "How do you identify a class in CSS?",
        imgSrc : "img/picture9.png",
        choiceA : "Use a # sign",
        choiceB : "You type 'class' and then the name of the element",
        choiceC : "You don't use any unique identifier",
        choiceD : "You type a period before the name of the element",
        correct : "D"
    },
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

const lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let count = 0;;


//This function generates the questions as you move along the quiz
function renderQuestion() {
    let q = questions[runningQuestionIndex];
    // qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" +q.question+ "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// function to start quiz
function startQuiz(){
    start.style.display = "none";
    questionRender();
    quiz.style.display = "block";
    progressRender();
    counterRender();
    quiz.style.display = "block";
    TIMER = setInterval(counterRender,1000);
}
// //create the question
function questionRender(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>"+ q.question +"</p>";
    // qImg.innerHTML = "<img src=" + q.imgSrc +">";
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD
}

//This function is for the progress bar to show the user how far along in the quiz they are
let qIndex = runningQuestionIndex;
function progressRender() {
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++);{
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

//score rendering function
function scoreRender() {
    scoreContainer.style.display = "block";
    const scorePercent = Math.round(100 * score/questions.length);
    let img = 
            ( scorePercent >= 80 ) ? "img/5.png" :
            ( scorePercent >= 60 ) ? "img/4.png" :
            ( scorePercent >= 40 ) ? "img/3.png" :
            ( scorePercent >= 20 ) ? "img/2.png" : "img/1.png";
    scoreContainer.innerHTML = "<img src=" + img + ">";
    scoreContainer.innerHTML = "<p>" + scorePercent + "%</p>";
}

//This function will run when the answer the user selected is correct
// function answerIsCorrect() {
//     document.getElementById("#prog").style.backgroundColor = "green";
// }

// //This function will run when the answer the user selected is incorrect
// function answerIsWrong() {
//     document.getElementById("prog").style.backgroundColor = "red";
// }

const questionTime = 10;
const gaugeWidth = 150;
// let count = 0;
let gaugeUnit = gaugeWidth / questionTime;
let TIMER = setInterval(counterRender,1000);

//This is the function for the question counter
function counterRender(){
if(count <= questionTime) {
    counter.innerHTML = count;  
    timeGauge.style.width = gaugeUnit * count + "px";
    count++;
} else {
    count = 0;
    //color will turn red if wrong
    answerIsWrong();
    if(runningQuestionIndex < lastQuestionIndex){ 
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
    if(answer == questions[runningQuestionIndex].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        questionRender();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}
//answer is correct
function answerIsCorrect() {
    document.getElementById("progress").style.backgroundColor = "#0f0";
}
//answer is incorrect
function answerIsWrong() {
    document.getElementById("progress").style.backgroundColor = "#f00";
}
