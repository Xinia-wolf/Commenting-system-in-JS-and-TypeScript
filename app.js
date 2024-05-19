document
  .getElementById("commentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const commentText = document.getElementById("commentText").value;

    // Создание нового комментария
    const newComment = new Comment(/* параметры */);

    // Добавление комментария в систему
    userManager.addComment(newComment);

    // Очистка полей формы
    document.getElementById("commentText").value = "";

    // Отображение нового комментария
    displayComments();
  });
