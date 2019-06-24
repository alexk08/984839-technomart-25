var link = document.querySelector(".write-button");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var nameField = popup.querySelector("#name-field");
var emailField = popup.querySelector("#email-field");
var messageField = popup.querySelector("#message-field");
var form = popup.querySelector(".write-us-form");
var isStorageSupport = true;
var storage = "";

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

try {
    storage = localStorage.getItem("nameField");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
        nameField.value = storage;
        emailField.focus();
    } else {
        nameField.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!nameField.value || !emailField.value || !messageField.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("nameField", nameField.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});
  
mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});
  
 window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
        }
    }
});