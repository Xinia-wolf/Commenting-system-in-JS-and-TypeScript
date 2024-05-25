document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.querySelector(".comment__form");
  const limitElement = document.querySelector(".comment__form-limit");
  const textarea = document.querySelector(".comment__form-text");
  const submitButton = document.querySelector(".comment__form-button");

  // Инициализация кнопки в состоянии "неактивной"
  submitButton.disabled = true;

  // Обработчик события input для textarea
  const handleInput = function (event) {
    const textLength = event.target.value.length;
    const maxLimit = 1000;

    // Обновление элемента span с информацией о количестве символов
    limitElement.textContent = `${textLength}/${maxLimit}`;

    // Проверка на превышение лимита символов
    if (textLength > maxLimit) {
      limitElement.style.color = "red";
      commentForm.setAttribute("disabled", true); // Запрещаем отправку формы
    } else {
      limitElement.style.color = ""; // Сброс цвета, если все в порядке
      commentForm.removeAttribute("disabled"); // Разрешаем отправку формы
    }

    // Динамическое изменение высоты textarea
    textarea.style.height = "auto"; // Сброс высоты перед расчетом
    textarea.style.height = textarea.scrollHeight + "px"; // Установка новой высоты

    // Активация кнопки при вводе хотя бы одного символа
    if (textLength > 0) {
      submitButton.disabled = false;
      submitButton.classList.add("active");
    } else {
      submitButton.disabled = true;
      submitButton.classList.remove("active");
    }
  };

  // Применяем обработчик к textarea
  textarea.addEventListener("input", handleInput);

  // Обработчик события submit для формы
  commentForm.addEventListener("submit", function (event) {
    const textLength = textarea.value.length;
    const maxLimit = 1000;

    if (textLength > maxLimit) {
      alert("Количество символов превышает допустимый лимит.");
      event.preventDefault(); // Отмена отправки формы
    }
  });
});
