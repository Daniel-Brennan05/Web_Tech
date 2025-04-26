const quizData = [
    {
      question: "Which football club won Champions League last year?",
      options: ["Real Madrid", "Manchester City", "Manchester United", " FC Barcelona"],
      answer: "Real Madrid"
    },
    {
      question: "In which year Hibernian won Scottish Cup?",
      options: ["2019", "2018", "2017", "2016"],
      answer: "2016"
    },
    {
      question: "Who holds the record for most Ballon d'Ors?",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Kylian Mbappé", "Neymar JR."],
      answer: "Lionel Messi"
    },
    {
      question: "Which football club won Premier League last year?",
      options: ["Real Madrid", "Manchester City", "Manchester United", " FC Barcelona"],
      answer: "Manchester City"
    },
    {
      question: "Who won Golden Boy award in 2024?",
      options: ["Eduardo Camavinga", "Jamal Musiala", "Jude Bellingham", "Lamine Yamal"],
      answer: "Lamine Yamal"
    },
    {
      question: "Who won the World Cup 2022?",
      options: ["France", "Germany", "Argentina", "Spain"],
      answer: "Argentina"
    },
    {
      question: "Which country hosted World Cup in 2014?",
      options: ["Brazil", "Argentina", "Germany", "Poland"],
      answer: "Brazil"
    },
    {
      question: "Who won the UEFA Euro 2016 tournament?",
      options: ["Poland", "Portugal", "Spain", "Germany"],
      answer: "Portugal"
    },
    {
      question: "Which football club is known as The Red Devils",
      options: ["Arsenal", "Manchester United", "Liverpool", "Bayern Munich"],
      answer: "Manchester United"
    },
    {
      question: "What is the name of Real Madrid's home stadium?",
      options: ["Old Traford", "Camp Nou", "Santiago Bernabéu", "Metropolitano"],
      answer: "Santiago Bernabéu"
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1> Thank you for completing the quiz!</h1>
      <p>Your score is: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();