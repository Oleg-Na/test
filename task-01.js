// Задача: необхідно створити форму в якій буде 2 інпута для чисел і один селект для математичної операції(+, -,*, /).
// По сабміту форми користувач має побачити результат.Результат має бути завжди цілим числом.Додай лейбли до полів вводу та анотації, щоб було інтуітивно зрозуміло що робити.
// Завдання можеш оформити у Github та прислати нам посиланням на репозіторій або розшарити нам його за допомогою гуглдоку..

publish.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { numberf, numberc }
  } = event.currentTarget;

  if (numberf.value === "" || numberc.value === "") {
    return alert("Будь ласка, введіть число!");
  }
  let numberFirst = document.getElementById("first_value").value;
  let numberSecond = document.getElementById("second_value").value;
  // let numberFirstValue = parseFloat(numberFirst);
  // let numberSecondValue = parseFloat(numberSecond);
  // let action = document.getElementById('sample').value;
  let multi = (numberSecond / numberFirst).toFixed(7)
  let result = document.getElementById("result_multi");
  result.innerHTML = multi
   
    
}
