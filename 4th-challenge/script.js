const quizData = [
    {
      question: "What does CSS stand for?",
      answers: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: 0
    },
    {
      question: "What does HTML stand for?",
      answers: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Terminal Markup Language"
      ],
      correctAnswer: 0
    },
    {
      question: "What does DOM stand for?",
      answers: [
        "Document Object Model",
        "Document Orientation Model",
        "Digital Object Model",
        "Digital Orientation Model"
      ],
      correctAnswer: 0
    },
    {
      question: "What does API stand for?",
      answers: [
        "Application Programming Interface",
        "Advanced Programming Interface",
        "Application Process Interface",
        "Advanced Process Interface"
      ],
      correctAnswer: 0
    },
    {
      question: "What does AJAX stand for?",
      answers: [
        "Asynchronous JavaScript and XML",
        "Asynchronous JavaScript and XHTML",
        "Asynchronous JSON and XML",
        "Asynchronous JSON and XHTML"
      ],
      correctAnswer: 0
    }
  ];
  
  const quizContainer = document.getElementById('quiz');
  const question = document.getElementById('question');
  const answer = document.querySelectorAll('label[for^="answer"]');
  const submitButton = document.getElementById('submit');
  const timerElement = document.getElementById("time-left");  
  const scoreForm = document.getElementById('score-form');
  const scoreElement = document.getElementById('score');
  const initialsInput = document.getElementById('initials');
  const saveButton = document.getElementById('save');
  const startButton = document.getElementById('start-button');
  
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 60;
  let intervalId;
  
  function startQuiz() {
    startButton.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    timerElement.textContent = `Time: ${timeLeft}`;
    setTime();
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    question.textContent = currentQuestion.question;
    for (let i = 0; i < currentQuestion.answers.length; i++) {
      answer[i].textContent = currentQuestion.answers[i];
    }
  }
  
  function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {return;}
    const answer = parseInt(selected.value);
    if (answer === quizData[currentQuestion].correctAnswer) {
      score++;
    } else {
      timeLeft -= 10;
      if (timeLeft < 0) timeLeft = 0;
    }
    currentQuestion++;
    if (currentQuestion === quizData.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }
  
  function setTime() {
    intervalId = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        endQuiz();
      } else {
        timerElement.textContent = `${timeLeft}`;
      }
    }, 1000);
  }
  
  function endQuiz() {
    clearInterval(intervalId);
    quizContainer.classList.add('hidden');
    scoreForm.classList.remove('hidden');
    scoreElement.textContent = score;
  }
  
  function saveScore(event) {
    event.preventDefault();
    const initials = initials.value.toUpperCase();
    if (initials) {
      const highScores = JSON.parse(localStorage.getItem('highScores') || '[]');
      highScores.push({ initials, score });
      localStorage.setItem('highScores', JSON.stringify(highScores));
      window.location.href = 'highscores.html';
    }
  }
  
  startButton.addEventListener('click', startQuiz);
  submitButton.addEventListener('click', checkAnswer);
  saveButton.addEventListener('click', saveScore);
  