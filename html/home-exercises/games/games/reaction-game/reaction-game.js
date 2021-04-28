const gameElement = document.getElementById('game');
const timeElement = document.getElementById('time');

const redString = 'rgb(240, 0, 0)';
const greenString = 'rgb(56, 176, 0)';
const blueString = 'rgb(0, 119, 182)';

let startTime;

document.body.style.backgroundColor = blueString;

gameElement.addEventListener('click', handlePress);
window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        handlePress();
    }
});

function handlePress() {
    switch (getComputedStyle(document.body).backgroundColor) {
        case redString:
            handleRed();
            break;
        case greenString:
            handleGreen();
            break;
        case blueString:
            handleBlue();
            break;
    }
}

function handleBlue() {
    document.body.style.backgroundColor = redString;
    timeElement.innerText = 'Wait for green...';

    const time = Math.random() * (8000 - 2000 + 1) + 2000;
    setTimeout(() => {
        if (getComputedStyle(document.body).backgroundColor === redString) {
            console.log('boo !! 👻');
            timeElement.innerText = 'boo !! 👻';
            document.body.style.backgroundColor = greenString;
            startTime = new Date();
        }
    }, time);
}

function handleGreen() {
    timeElement.innerText = `${new Date() - startTime} ms`;
    document.body.style.backgroundColor = blueString;
}

function handleRed() {
    console.log('not ok 😡');
    timeElement.innerText = 'You have to wait for green! 😡';
    document.body.style.backgroundColor = blueString;
}
