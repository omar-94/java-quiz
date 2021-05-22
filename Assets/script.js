var quizContainer = document.getElementById('quiz-box');
var resultContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start');
var timeLeft = document.getElementById('time-left');


// QUESTIONS TO BE ASKED
var questions = [
	{
		question: "What are variables used for in JavaScript Programs?",
		answers: {
			a: "Storing numbers, dates, or other values", 
			b: "Varying randomly",
			c: "Causing high-school algebra flashbacks",
			d: "None of the above",
		},    
		correctAnswer: "a"
	},
	{
		question: "Inside which HTML element do we put the JavaScript?",
		answers: {
			a: "<js>", 
			b: "<scripting>",
			c: "<script>",
			d: "<javascript",
		},    
		correctAnswer: "c"
	},
	{
		question: "How can you get the total number of arguments passed to a function?",
		answers: {
			a: "Using args.length property", 
			b: "Using arguments.length property",
			c: "Both of the above",
			d: "None of the above",
		},    
		correctAnswer: "b"
	},
	{
		question: "Which built-in method returns the string representation of the number's value?",
		answers: {
			a: "toValue()", 
			b: "toNumber()",
			c: "toString()",
			d: "None of the above",
		},    
		correctAnswer: "c"
	},
	{
		question: "Which of the following function of Array object removes the last element from an array and returns that element?",
		answers: {
			a: "pop()", 
			b: "push()",
			c: "join()",
			d: "map()",
		},    
		correctAnswer: "a"
	},
]


// FUNCTIONS TO BE RUNNED 
	// FUNCTION TO START QUIZ
function startQuiz() {

}
	// FUNCTION COUNTDOWN TIMER'
var time = 100
function countDown() {
	setInterval(function(){
		if(time <= 0) {
			clearInterval(time = 0)
		}
		timeLeft.innerHTML = time
		time -= 1
	}, 1000)
}

startButton.addEventListener('click', countDown);

	// FUNCTION SUBMIT QUESTION
function nextQuestion() {

}

// DISPLAY QUIZ
startQuiz();

// WHEN NEXT QUESTION IS CLICKED... NEXT QUESTION IS SHOWN
nextQuestion();

