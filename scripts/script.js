const btn = document.querySelector(".btn");
const question = document.querySelector(".question");
let currentValue = 0;


export const questionsArray = [
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
  { question: "Почему obj.someprop.x приводит к ошибке?", answer: "" },
  {
    question: "Что такое цель события или целевой элемент (event.target)?",
    answer: "",
  },
  {
    question: "Что такое текущая цель события (event.currentTarget)?",
    answer: "",
  },
  { question: "В чем разница между операторами '==' и '==='?", answer: "" },
  {
    question:
      "Почему результатом сравнения двух похожих объектов является false?",
    answer: "",
  },
  { question: "Для чего используется оператор '!!'?", answer: "" },
  { question: "Как записать несколько выражений в одну строку?", answer: "" },
  { question: "Что такое поднятие (Hoisting)?", answer: "" },
  { question: "Что такое область видимости (Scope)?", answer: "" },
  { question: "Что такое замыкание (Closures)?", answer: "" },
  { question: "Какие значения в JS являются ложными?", answer: "" },
  { question: "Как проверить, является ли значение ложным?", answer: "" },
  { question: "Для чего используется директива «use strict»?", answer: "" },
  { question: "Какое значение имеет this?", answer: "" },
  { question: "Что такое прототип объекта?", answer: "" },
  { question: "Что такое IIFE?", answer: "" },
  {
    question: "Для чего используется метод Function.prototype.apply?",
    answer: "",
  },
  {
    question: "Для чего используется метод Function.prototype.call?",
    answer: "",
  },
  { question: "В чем разница между методами call и apply?", answer: "" },
  {
    question: "Для чего используется метод Function.prototype.bind?",
    answer: "",
  },
  {
    question:
      "Что такое функциональное программирование и какие особенности JS позволяют говорить о нем как о функциональном языке программирования?",
    answer: "",
  },
  {
    question: "Что такое функции высшего порядка (Higher Order Functions)?",
    answer: "",
  },
  {
    question:
      "Почему функции в JS называют объектами первого класса (First-class Objects)?",
    answer: "",
  },
  { question: "Как бы Вы реализовали метод Array.prototype.map?", answer: "" },
  {
    question: "Как бы Вы реализовали метод Array.prototype.filter?",
    answer: "",
  },
  {
    question: "Как бы Вы реализовали метод Array.prototype.reduce?",
    answer: "",
  },
  { question: "Что такое объект arguments?", answer: "" },
  { question: "Как создать объект, не имеющий прототипа?", answer: "" },
  {
    question:
      "Почему в представленном коде переменная b становится глобальной при вызове функции?",
    answer: "",
  },
  { question: "Что такое ECMAScript?", answer: "" },
  {
    question: "Что нового привнес в JS стандарт ES6 или ECMAScript2015?",
    answer: "",
  },
  {
    question: "В чем разница между ключевыми словами «var», «let» и «const»?",
    answer: "",
  },
  { question: "Что такое стрелочные функции (Arrow Functions)?", answer: "" },
  { question: "Что такое классы (Classes)?", answer: "" },
  { question: "Что такое шаблонные литералы (Template Literals)?", answer: "" },
  {
    question: "Что такое деструктуризация объекта (Object Destructuring)?",
    answer: "",
  },
  { question: "Что такое модули (Modules)?", answer: "" },
  { question: "Что такое объект Set?", answer: "" },
  {
    question: "Что такое функция обратного вызова (Callback Function)?",
    answer: "",
  },
  { question: "Что такое промисы (Promises)?", answer: "" },
  { question: "Что такое async/await?", answer: "" },
  {
    question: "В чем разница между spread-оператором и rest-оператором?",
    answer: "",
  },
  {
    question: "Что такое параметры по умолчанию (Default Parameters)?",
    answer: "",
  },
  { question: "Что такое объектная обертка (Wrapper Objects)?", answer: "" },
  {
    question:
      "В чем разница между явным и неявным преобразованием или приведением к типу (Implicit and Explicit Coercion)?",
    answer: "",
  },
  {
    question: "Что такое NaN? Как проверить, является ли значение NaN?",
    answer: "",
  },
  { question: "Как проверить, является ли значение массивом?", answer: "" },
  {
    question:
      "Как проверить, что число является четным, без использования деления по модулю или деления с остатком (оператора %)?",
    answer: "",
  },
  { question: "Как определить наличие свойства в объекте?", answer: "" },
  { question: "Что такое AJAX?", answer: "" },
  { question: "Как в JS создать объект?", answer: "" },
  {
    question: "В чем разница между методами Object.freeze и Object.seal?",
    answer: "",
  },
  {
    question: "В чем разница между оператором «in» и методом hasOwnProperty?",
    answer: "",
  },
  {
    question: "Какие приемы работы с асинхронным кодом в JS Вы знаете?",
    answer: "",
  },
  {
    question:
      "В чем разница между обычной функцией и функциональным выражением?",
    answer: "",
  },
  { question: "Как в JS вызвать функцию?", answer: "" },
  {
    question: "Что такое запоминание или мемоизация (Memoization)?",
    answer: "",
  },
  {
    question: "Как бы Вы реализовали вспомогательную функцию запоминания?",
    answer: "",
  },
  {
    question:
      "Почему typeof null возвращает object? Как проверить, является ли значение null?",
    answer: "",
  },
  { question: "Для чего используется ключевое слово «new»?", answer: "" },
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
