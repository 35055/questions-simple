const btn = document.querySelector(".btn");
const question = document.querySelector(".question");
let currentValue = 0;

// const htmlQuestions = [
//   { question: "Что такое HTML?" },
//   { question: "Какие основные теги используются в HTML?" },
//   { question: "Что такое атрибуты тегов в HTML?" },
//   { question: "Какие основные типы списков поддерживает HTML?" },
//   { question: "Что такое таблицы в HTML и как они используются?" },
//   { question: "Что такое формы в HTML?" },
//   { question: "Какие типы элементов формы поддерживает HTML?" },
//   { question: "Что такое мультимедиа в HTML?" },
//   { question: "Какие основные семантические элементы в HTML?" },
//   { question: "Что такое аудио и видео в HTML?" },
// ];

const htmlQuestions = [
  { question: "В чем разница между null и undefined?", answer: "" },
  { question: "Для чего используется оператор '&&'?", answer: "" },
  { question: "Для чего используется оператор '||'?", answer: "" },
  {
    question:
      "Является ли использование унарного плюса (оператор '+') самым быстрым способом преобразования строки в число?",
    answer: "",
  },
  { question: "Что такое DOM?", answer: "" },
  {
    question: "Что такое распространение события (Event Propogation)?",
    answer: "",
  },
  { question: "Что такое всплытие события (Event Bubbling)?", answer: "" },
  { question: "Что такое погружение события (Event Capturing)?", answer: "" },
  {
    question:
      "В чем разница между методами event.preventDefault() и event.stopPropagation()?",
    answer: "",
  },
  {
    question: "Как узнать об использовании метода event.preventDefault()?",
    answer: "",
  },
];

function getRandomQuestions(array) {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray;
}

const randomHtmlQuestions = getRandomQuestions(htmlQuestions);

btn.addEventListener("click", () => {
  if (btn.innerHTML === "Начать") {
    btn.innerHTML = "Далее";
  }
  if (question.innerHTML === "Вопросы закончились. Обновить страницу?") {
    window.location.reload();
  }
  if (currentValue === 10) {
    question.innerHTML = "Вопросы закончились. Обновить страницу?";
    btn.innerHTML = "Обновить";
  }

  if (currentValue !== 10) {
    question.innerHTML = randomHtmlQuestions[currentValue++].question;
  }
});
