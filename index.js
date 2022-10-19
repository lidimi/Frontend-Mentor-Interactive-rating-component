const submitBtn = document.querySelector(".submit");
const mainPage = document.querySelector(".main-page");
const thanksPage = document.querySelector(".thx-page");
const rateBtns = document.querySelectorAll(".reate-btn")
const rate = document.querySelector("span");

submitBtn.addEventListener('click', displayThanks);

function displayThanks() {
    mainPage.style.display = 'none';
    thanksPage.style.display = 'block';
} 


rateBtns.forEach(button => {
    button.addEventListener('click', () => {
        rate.innerHTML = button.innerHTML
    });
});

