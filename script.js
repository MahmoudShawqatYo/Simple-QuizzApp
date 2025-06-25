const quizData = [
    {
      question: "What is the capital of France?",
      a: "London",
      b: "Berlin",
      c: "Paris",
      d: "Madrid",
      correct: "c",
    },
    {
      question: "Which language runs in the browser?",
      a: "PHP",
      b: "Python",
      c: "Java",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheet",
      b: "Cascading Style Sheet",
      c: "Computer Style Sheet",
      d: "Creative Style Sheet",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const questionEl = document.getElementById("question");
  const answerEls = document.querySelectorAll(".answer");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.textContent = currentQuizData.question;
    a_text.textContent = currentQuizData.a;
    b_text.textContent = currentQuizData.b;
    c_text.textContent = currentQuizData.c;
    d_text.textContent = currentQuizData.d;
  }
  
  function getSelected() {
    let answer = undefined;
    answerEls.forEach((el) => {
      if (el.checked) {
        answer = el.id;
      }
    });
    return answer;
  }
  
  function deselectAnswers() {
    answerEls.forEach((el) => (el.checked = false));
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} correctly ✅</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }
  });
  