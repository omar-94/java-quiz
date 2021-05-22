// ELEMENTS IN HTML DECLARED
var quizContainer = document.getElementById('quiz-box');
var quizQuestions = document.getElementById('questions')
var startButton = document.getElementById('start');
var timeLeft = document.getElementById('time-left');
var timeDisplay =document.getElementById('time-display');

// QUESTIONS TO BE ASKED
var questionList = [
	{
		question: "What are variables used for in JavaScript Programs?",
		choices: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of the above"],
		correctAnswer: "Storing numbers, dates, or other values",
	},
	{
		question: "Inside which HTML element do we put the JavaScript?",
		choices: ["<js>", "<scripting>", "<script>", "<javascript"],   
		correctAnswer: "<script>",
	},
	{
		question: "How can you get the total number of arguments passed to a function?",
		choices: ["Using args.length property", "Using arguments.length property", "Both of the above", "None of the above"], 
		correctAnswer: "Using arguments.length property",
	},
	{
		question: "Which built-in method returns the string representation of the number's value?",
		choices: ["toValue()", "toNumber()", "toString()", "None of the above"],
		correctAnswer: "toString()",
	},
	{
		question: "Which of the following function of Array object removes the last element from an array and returns that element?",
		choices: ["pop()", "push()", "join()", "map()"],    
		correctAnswer: "pop()",
	},
]

// VARIABLES DECLARED
var questionIndex = 0
var score = 0
var penalty = 10
var time = 100

// ELEMENTS CREATED
var ulQuiz = document.createElement('ul');

// FUNCTIONS 
	// FUNCTION TO START QUIZ
function startQuiz(questionIndex) {
	quizQuestions.innerHTML = "";
	ulQuiz.innerHTML= "";
	var questionAsked = questionList[questionIndex].question;
	var choicesAsked = questionList[questionIndex].choices
	for (var i = 0; i < questionList.length; i++) {
		quizQuestions.textContent = questionAsked;
	}
	choicesAsked.forEach(function(newItem) {
		var listQuestions = document.createElement('li');
		listQuestions.textContent = newItem;
		quizQuestions.appendChild(ulQuiz);
		ulQuiz.appendChild(listQuestions);
		listQuestions.addEventListener("click", (compare));
	})
}

	// FUNCTION TO COMPARE ANSWERS
function compare(event) {
	var element = event.target;

	if (element.matches("li")) {
		var createDiv = document.createElement("div");
		createDiv.setAttribute("id", "createDiv")
		if (element.textContent == questionList[questionIndex].correctAnswer) {
			score ++;
			createDiv.textContent = "Correct Answer!"
		} else {
			time = time - penalty;
			createDiv.textContent = "Wrong Answer!"
		}
	}

	// Next Question
	questionIndex++;

	if (questionIndex >= questionList.length) {
		allDone();
		createDiv.textContent = "Your score is:" + score + "/" + questionList.length;
	} else {
		startQuiz(questionIndex);
	}
	quizQuestions.appendChild(createDiv);
}

	// FUNCTION COUNTDOWN TIMER
function countDown() {
	var timeInterval = setInterval(function() {
		timeLeft.textContent = time;
		time--;
		if (time < 0) {
			clearInterval(timeInterval);
			sendMessage();
		}
	}, 1000);
	startQuiz(questionIndex);
}

//FUNCTION TO BE DONE
function allDone() {
	quizQuestions.innerHTML = "";
	timeDisplay.innerHTML = "";

}

	// GAME OVER MESSAGE
function sendMessage() {
	timeDisplay.textContent = "Game Over";
}
	// COUNTDOWN BEGINS ON CLICK
startButton.addEventListener('click', countDown);



