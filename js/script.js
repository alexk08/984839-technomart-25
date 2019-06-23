var link = document.querySelector(".write-button");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var nameField = popup.querySelector("#name-field");
var email = popup.querySelector("#email-field");
var textMail = popup.querySelector("#text-mail-field");
var form = popup.querySelector(".write-us-form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    nameField.focus();
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!nameField.value || !email.value || !textMail.value) {
    evt.preventDefault();
    console.log("Для отправки сообщения необходимо заполнить все поля");
    }
});