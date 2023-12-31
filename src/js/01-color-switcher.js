const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
};

let intervalId = null;

refs.startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);

    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

