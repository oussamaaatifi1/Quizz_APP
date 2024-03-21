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