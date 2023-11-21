const buttonElement = document.querySelector("#click-button");
const paragraphElement = document.querySelector(".content2");

buttonElement.addEventListener("click", function (event) {
  paragraphElement.innerHTML =
    "Hello There! If you want to know more about me you can contact me through contact page.";
});
