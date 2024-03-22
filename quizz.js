<<<<<<< HEAD

let currentQuestions = 0;
let score = 0;
let totalQuestions = 16;
let currentQuestion = 1;

// Timer function
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let fiveMinutes = 60 * 15; // 15 minutes
    let display = document.getElementById("timer");
    startTimer(fiveMinutes, display);
};


function updateProgress() {
    let progressBar = document.getElementById("progress-bar");
    let progressPercentage = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = progressPercentage + "%";

    let questionCount = document.getElementById("question-count");
    questionCount.textContent = currentQuestion + " / " + totalQuestions;
}


document.getElementById("Button_Next").addEventListener("click", function() {

//    this.style.background = 'tomato';
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        updateProgress();
    }
});


function showQuestion() {
    let question = questions[currentQuestions];
    document.querySelector('.que_text ').innerText = question.question;
    let quizsHTML = '';
    question.quizs.forEach(quiz => {
        quizsHTML += `<div class="quiz">${quiz}</div>`;
    });
    document.querySelector('.quiz_list').innerHTML = quizsHTML;
    document.querySelector('.total_que p:nth-child(1)').innerText = currentQuestions + 1;
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    currentQuestions++;
    if (currentQuestions < questions.length) {
        showQuestion();
        document.querySelector('.total_que p:nth-child(1)').innerText = currentQuestions + 1;
    } else {
        // Si toutes les questions ont été répondues, affichez les résultats
        showResults();
    }
}

// Fonction pour vérifier la réponse sélectionnée
function checkAnswer(selectedquiz) {
    let question = questions[currentQuestion];
    let userAnswer = selectedquiz.innerText;
    if (userAnswer === question.answer) {
        score++;
        selectedquiz.classList.add('answered');
    }
    document.querySelectorAll('.quiz').forEach(quiz => {
        quiz.style.pointerEvents = 'none'; // Désactiver les clics sur les autres quizs après avoir sélectionné une réponse
    });
}

// Fonction pour afficher les résultats
function showResults() {
    alert(`You scored ${score} out of ${questions.length}`);
    // Vous pouvez ajouter d'autres actions ici, comme afficher un bouton pour recommencer le quiz
}

// Événement pour passer à la question suivante lors du clic sur le bouton Next
document.querySelector('#Button_Next').addEventListener('click', nextQuestion);

// Appel initial pour afficher la première question
=======
var totalQuestions = 16;
var currentQuestion = 1;

        // Timer function
        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        window.onload = function () {
            var fiveMinutes = 60 * 15, // 30 minutes
                display = document.getElementById("timer");
            startTimer(fiveMinutes, display);
        };

        // Function to update progress bar and question number
        function updateProgress() {
            var progressBar = document.getElementById("progress-bar");
            var progressPercentage = (currentQuestion / totalQuestions) * 100;
            progressBar.style.width = progressPercentage + "%";

            var questionCount = document.getElementById("question-count");
            questionCount.textContent = currentQuestion + " / " + totalQuestions;
        
        
        }

        // Next button click event
        document.getElementById("Button_Next").addEventListener("click", function() {
            
            // Increase current question numbe
            if (currentQuestion < 16){
                currentQuestion++;

            // Update progress bar and question count
            updateProgress();
            }
            
        });
>>>>>>> main
