const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "William Shakespeare", correct: true }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false },
            { text: "O2", correct: false }
        ]
    },
    {
        question: "Which country is famous for kangaroos?",
        answers: [
            { text: "Australia", correct: true },
            { text: "Brazil", correct: false },
            { text: "Canada", correct: false },
            { text: "India", correct: false }
        ]
    },
    {
        question: "What is the tallest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: true },
            { text: "Hippo", correct: false },
            { text: "Whale", correct: false }
        ]
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            { text: "Mitochondria", correct: true },
            { text: "Nucleus", correct: false },
            { text: "Ribosome", correct: false },
            { text: "Endoplasmic reticulum", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "What is the square root of 64?",
        answers: [
            { text: "8", correct: true },
            { text: "6", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon dioxide", correct: false },
            { text: "Helium", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
// const answersButtons = document.getElementsByClassName("answer-buttons");
const answersButtons = document.getElementsByClassName("answer-buttons")[0];

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
 let score = 0;

function startQuiz() {
 currentQuestionIndex = 0;    
 score = 0;
 nextButton.innerHTML = "Next";
 showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex +1;
questionElement.innerHTML =questionNo + ". " + currentQuestion.question;


currentQuestion.answers.forEach(answer =>{
const button =document.createElement("button");
button.innerHTML = answer.text;
button.classList.add("btn");
answersButtons.appendChild(button);
if (answer.correct) {
    button.dataset.correct=answer.correct;
}
button.addEventListener("click", selectAnswer);
})
}

function resetState() {
    nextButton.style.display = "none";
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect) {
        selectedBtn.classList.add("correct"); 
        score++;  
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
 button.classList.add("correct");            
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showscore(){
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else{
        showscore();
    }
}
nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex< questions.length) {
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();



