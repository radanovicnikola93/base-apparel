const input = document.querySelector("#email-input--address");
const btn = document.querySelector(".email-input--button");
const errorImg = document.querySelector(".error-img");
const errorText = document.querySelector(".error-text");
const successText = document.querySelector(".success-text");

btn.addEventListener("click", () => {
    mailRgx = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  if (mailRgx.test(input.value)) {
      errorImg.classList.remove("warning");
      errorText.classList.remove("warning");
    successText.classList.add("success");
    return true;
  } else {
    errorImg.classList.add("warning");
    errorText.classList.add("warning");
    return false;
  }
});
