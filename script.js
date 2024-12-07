const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", Correct: false },
      { text: "Blue Whale", Correct: true },
      { text: "Elephant", Correct: false },
      { text: "Giraffe", Correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", Correct: true },
      { text: "Bhutan", Correct: false },
      { text: "Nepal", Correct: false },
      { text: "Sri Lanka", Correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", Correct: false },
      { text: "Gobi", Correct: false },
      { text: "Sahara", Correct: false },
      { text: "Antarctica", Correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", Correct: false },
      { text: "Australia", Correct: true },
      { text: "Arctic", Correct: false },
      { text: "Africa", Correct: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Tokyo", Correct: true },
      { text: "Osaka", Correct: false },
      { text: "Kyoto", Correct: false },
      { text: "Hiroshima", Correct: false },
    ],
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", Correct: false },
      { text: "Albert Einstein", Correct: true },
      { text: "Nikola Tesla", Correct: false },
      { text: "Marie Curie", Correct: false },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon River", Correct: true },
      { text: "Nile River", Correct: false },
      { text: "Yangtze River", Correct: false },
      { text: "Mississippi River", Correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", Correct: true },
      { text: "Venus", Correct: false },
      { text: "Saturn", Correct: false },
      { text: "Jupiter", Correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", Correct: false },
      { text: "Leonardo da Vinci", Correct: true },
      { text: "Pablo Picasso", Correct: false },
      { text: "Claude Monet", Correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol O?",
    answers: [
      { text: "Oxygen", Correct: true },
      { text: "Osmium", Correct: false },
      { text: "Ozone", Correct: false },
      { text: "Oganesson", Correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", Correct: false },
      { text: "Japan", Correct: true },
      { text: "South Korea", Correct: false },
      { text: "Thailand", Correct: false },
    ],
  },
  {
    question: "Who was the first man to walk on the moon?",
    answers: [
      { text: "Buzz Aldrin", Correct: false },
      { text: "Neil Armstrong", Correct: true },
      { text: "Yuri Gagarin", Correct: false },
      { text: "Michael Collins", Correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", Correct: false },
      { text: "Indian Ocean", Correct: false },
      { text: "Arctic Ocean", Correct: false },
      { text: "Pacific Ocean", Correct: true },
    ],
  },
  {
    question: "Which country invented paper?",
    answers: [
      { text: "Egypt", Correct: false },
      { text: "China", Correct: true },
      { text: "India", Correct: false },
      { text: "Greece", Correct: false },
    ],
  },
  {
    question: "Which animal is known for its black and white stripes?",
    answers: [
      { text: "Zebra", Correct: true },
      { text: "Tiger", Correct: false },
      { text: "Panda", Correct: false },
      { text: "Skunk", Correct: false },
    ],
  },
  {
    question: "Which is the tallest mountain in the world?",
    answers: [
      { text: "Mount Kilimanjaro", Correct: false },
      { text: "Mount Everest", Correct: true },
      { text: "K2", Correct: false },
      { text: "Mount Fuji", Correct: false },
    ],
  },
  {
    question: "What is the largest city by population?",
    answers: [
      { text: "New York City", Correct: false },
      { text: "Tokyo", Correct: true },
      { text: "Shanghai", Correct: false },
      { text: "Delhi", Correct: false },
    ],
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", Correct: false },
      { text: "Avocado", Correct: true },
      { text: "Onion", Correct: false },
      { text: "Garlic", Correct: false },
    ],
  },
  {
    question: "Who is known as the Father of India?",
    answers: [
      { text: "Jawaharlal Nehru", Correct: false },
      { text: "Mahatma Gandhi", Correct: true },
      { text: "Subhas Chandra Bose", Correct: false },
      { text: "Sardar Patel", Correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol Fe?",
    answers: [
      { text: "Iron", Correct: true },
      { text: "Fluorine", Correct: false },
      { text: "Francium", Correct: false },
      { text: "Flerovium", Correct: false },
    ],
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.Correct) {
      button.dataset.correct = answer.Correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
