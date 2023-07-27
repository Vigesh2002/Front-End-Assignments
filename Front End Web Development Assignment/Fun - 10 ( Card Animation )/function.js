const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Youtuber";
    }, 12000);
}

textLoad();
setInterval(textLoad, 16000);