const wordElement = document.getElementById('word');

const words = ['dispensable', 'polymorphism', 'memorise', 'passenger', 'superficial', 'superstitious', 'motionless', 'interpolation', 'sublime', 'suppose', 'productive', 'miniature', 'previous', 'separate', 'promise', 'asynchronous', 'ambiguous', 'attempt', 'agonising', 'perpetual', 'ambitious', 'ingenuity', 'opportunity', 'curiosity', 'parallel', 'observe', 'analyse', 'organic', 'responsible', 'dysfunctional', 'frequent', 'admiration', 'competition', 'ludicrous', 'colossal', 'psychedelic', 'frightening', 'materialistic', 'statement', 'assembly', 'furniture', 'actually', 'disturbed', 'functional', 'coordinated', 'nostalgic', 'concerned', 'confession', 'irritating', 'desirable'];
const usedWords = [];

let lives = 3;
let points = 0;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.innerText);
}

function drop(event) {
    event.preventDefault();
    check(event.dataTransfer.getData('text'), event.target.innerText === 'New');
}

function displayRandomWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    wordElement.innerText = word;
}

function reduceLives() {
    let heartElements = document.getElementsByClassName('fa-heart');
    lives--;

    if (lives >= 0) {
        heartElements[lives].classList.remove('fas');
        heartElements[lives].classList.add('far');
    }

    if (lives === 0) {
        gameOver();
    }
}

function check(word, isNew) {
    if (isNew) {
        if (usedWords.includes(word)) {
            reduceLives();
            playWrongAnimation(document.getElementById('new'));
        } else {
            points++;
            document.getElementById('points').innerText = `Score: ${points}`;
            usedWords.push(word);
            playRightAnimation(document.getElementById('new'));
        }
    } else {
        if (!usedWords.includes(word)) {
            reduceLives();
            usedWords.push(word);
            playWrongAnimation(document.getElementById('already-seen'));
        } else {
            points++;
            document.getElementById('points').innerText = `Score: ${points}`;
            playRightAnimation(document.getElementById('already-seen'));
        }
    }
    displayRandomWord();
}

function playRightAnimation(element) {
    party.element(element, {
        count: 100,
        countVariation: 0.5,
        angleSpan: 80,
        yVelocity: -300,
        yVelocityVariation: 1,
        rotationVelocityLimit: 6,
        scaleVariation: 0.8,
    });

    element.classList.add('right');
    setTimeout(() => {
        element.classList.remove('right');
    }, 1000);
}

function playWrongAnimation(element) {
    element.classList.add('wrong');
    setTimeout(() => {
        element.classList.remove('wrong');
    }, 1000);
}

function gameOver() {
    const winMessageElement = document.getElementById('win-message');
    const winMessageTextElement = document.getElementById('win-message-text');
    const restartButtonElement = document.getElementById('restart-button');

    winMessageTextElement.innerText = `${points} words`;
    winMessageElement.classList.add('show');

    restartButtonElement.addEventListener('click', () => {
        window.location.reload(true);
    });
}

displayRandomWord();

document.getElementById('already-seen').addEventListener('click', () => {
    check(wordElement.innerText, false);
});

document.getElementById('new').addEventListener('click', () => {
    check(wordElement.innerText, true);
});
