// ELEMENTS IN HTML DECLARED
var quizContainer = document.getElementById('quiz-box');
var quizQuestionsDiv = document.getElementById('questions')
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
timeInterval = 0

// ELEMENTS CREATED
var ulQuiz = document.createElement('ul');

// FUNCTIONS 
	// FUNCTION COUNTDOWN TIMER AND START QUIZ
function countDown() {
	var timeInterval = setInterval(function() {
		timeLeft.textContent = time;
		time = time - 1;
		if (time <= -1) {
			clearInterval(timeInterval);
			allDone();
			timeDisplay.textContent = "Time is up!";
		}
	}, 1000);
	startQuiz(questionIndex);
}

	// COUNTDOWN BEGINS ON CLICK
startButton.addEventListener('click', countDown);
 
	// FUNCTION TO SHOW QUIZ
function startQuiz(questionIndex) {
	quizQuestionsDiv.innerHTML = "";
	ulQuiz.innerHTML= "";
	var questionAsked = questionList[questionIndex].question;
	var choicesAsked = questionList[questionIndex].choices
	for (var i = 0; i < questionList.length; i++) {
		quizQuestionsDiv.textContent = questionAsked;
	}
	choicesAsked.forEach(function(newItem) {
		var listQuestions = document.createElement('li');
		listQuestions.textContent = newItem;
		quizQuestionsDiv.appendChild(ulQuiz);
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
		createDiv.textContent = "You answered " + score + "/" + questionList.length + " correctly.";
	} else {
		startQuiz(questionIndex);
	}
	quizQuestionsDiv.appendChild(createDiv);
}

//FUNCTION TO BE DONE
function allDone() {
	quizQuestionsDiv.innerHTML = "";
	timeDisplay.innerHTML = "";

	var createHeading = document.createElement("h1");
	createHeading.setAttribute("id", "createHeading");
	createHeading.textContent = "Quiz Complete";
	quizQuestionsDiv.appendChild(createHeading);

	var createP = document.createElement("p");
	createP.setAttribute("id", "createP");
	quizQuestionsDiv.appendChild(createP);

	if(time >= 0) {
		var timeRemaining = time;
		clearInterval(timeInterval);
		var createP2 = document.createElement("p");
		createP.textContent = "Your final score is: " + (timeRemaining + score);
		quizQuestionsDiv.appendChild(createP2);
	}

	var createLabel = document.createElement("label");
	createLabel.setAttribute("id", "createLabel");
	createLabel.textContent = "Enter your initials: ";
	quizQuestionsDiv.appendChild(createLabel);

	var createInput = document.createElement("input");
	createInput.setAttribute("type", "text");
	createInput.setAttribute("id", "initials");
	createInput.textContent = "";
	quizQuestionsDiv.appendChild(createInput);

	var createSubmit = document.createElement("button");
	createSubmit.setAttribute("type", "submit");
	createSubmit.setAttribute("id", "submit");
	createSubmit.textContent = "Submit";
	quizQuestionsDiv.appendChild(createSubmit);

	createSubmit.addEventListener("click", function(){
		var initials = createInput.value;
		if (initials === null) {
			console.log("No value entered!");
		} else {
			var finalScore = {
				initials: initials,
				score: (timeRemaining + score),
			}
			console.log(finalScore);
			var allScores = localStorage.getItem("allScores");
			if(allScores === null) {
				allScores = [];				
			} else {
				allScores = JSON.parse(allScores);
			}
			allScores.push(finalScore);
			var newScore = JSON.stringify(allScores);
			localStorage.setItem("allScores", newScore);
		}
	});

}




