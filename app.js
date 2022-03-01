const input = document.querySelector('#email-input--address');
const btn = document.querySelector(".email-input--button");
const errorImg = document.querySelector('.error-img');
const errorText = document.querySelector(".error-text");

console.log(input)
console.log(btn)
console.log(errorImg)
console.log(errorText)

btn.addEventListener('click', validateEmail);

function validateEmail(inputText) {
    const mailRgx = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/

    if (inputText.value !== mailRgx) {
        errorImg.classList.add('warning');
        errorText.classList.add('warning');
        return false;
    }
}