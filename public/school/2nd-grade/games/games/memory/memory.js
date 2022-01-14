const cards = document.getElementsByClassName('memory-card');
const grid = document.getElementById('grid');
const scorePlayer1Element = document.getElementById('player1');
const scorePlayer2Element = document.getElementById('player2');

const cardArray = ['HTML', 'CSS', 'Python', 'JavaScript', 'Java', 'Bootstrap', 'Angular', 'React', 'Ubuntu', 'Windows', 'Apple', 'Google', '<i class="fab fa-html5"></i>', '<i class="fab fa-css3-alt"></i>', '<i class="fab fa-python"></i>', '<i class="fab fa-js-square"></i>', '<i class="fab fa-java"></i>', '<i class="fab fa-bootstrap"></i>', '<i class="fab fa-angular"></i>', '<i class="fab fa-react"></i>', '<i class="fab fa-ubuntu"></i>', '<i class="fab fa-windows"></i>', '<i class="fab fa-apple"></i>', '<i class="fab fa-google"></i>'];
const cardArrayCopy = [...cardArray];

let cardsChosen = [];
let cardsChosenIDs = [];
const finishedCards = [];
let scorePlayer1 = 0;
let scorePlayer2 = 0;

let round = 0;
const currentPlayerElement = document.getElementById('current-player');

for (let i = 0; i < cards.length; i++) {
    let index = Math.floor(Math.random() * (cardArray.length - 1 - 0 + 1) + 0);
    cards[i].innerHTML = cardArray[index];
    let id = cardArrayCopy.indexOf(cardArray[index]);
    if (id >= cardArrayCopy.length / 2) {
        id -= cardArrayCopy.length / 2;
    }
    cards[i].setAttribute('data-id', id);
    cardArray.splice(index, 1);

    cards[i].addEventListener('click', flipCard);
}

function flipCard() {
    if (this.classList.contains('back')) {
        this.classList.remove('back');
        cardsChosen.push(this);
        cardsChosenIDs.push(parseInt(this.getAttribute('data-id')));

        if (cardsChosen.length === 2) {
            // Remove event listener if two cards are already chosen
            for (let i = 0; i < cards.length; i++) {
                cards[i].removeEventListener('click', flipCard);
            }
            setTimeout(checkMatch, 750);
        }
    }
}

function checkMatch() {
    const card1 = cardsChosenIDs[0];
    const card2 = cardsChosenIDs[1];
    round++;

    if (card1 === card2) {
        round++;
        finishedCards.push(cardsChosen[0]);
        finishedCards.push(cardsChosen[1]);
        cardsChosen[0].removeEventListener('click', flipCard);
        cardsChosen[1].removeEventListener('click', flipCard);

        if ((round % 2) + 1 === 1) {
            scorePlayer1++;
        } else {
            scorePlayer2++;
        }
    } else {
        cardsChosen[0].classList.add('back');
        cardsChosen[1].classList.add('back');
    }

    cardsChosen = [];
    cardsChosenIDs = [];

    // Add event listener back in
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', flipCard);
    }

    scorePlayer1Element.innerText = `Player 1: ${scorePlayer1} pairs`;
    scorePlayer2Element.innerText = `Player 2: ${scorePlayer2} pairs`;
    if (scorePlayer1 === 1) {
        scorePlayer1Element.innerText = scorePlayer1Element.innerText.replace('pairs', 'pair');
    }
    if (scorePlayer2 === 1) {
        scorePlayer2Element.innerText = scorePlayer2Element.innerText.replace('pairs', 'pair');
    }

    if ((round % 2) + 1 === 1) {
        currentPlayerElement.innerText = "Player 1's turn";
        scorePlayer1Element.classList.remove('light');
        scorePlayer2Element.classList.add('light');
    } else {
        currentPlayerElement.innerText = "Player 2's turn";
        scorePlayer1Element.classList.add('light');
        scorePlayer2Element.classList.remove('light');
    }

    if (finishedCards.length === cards.length) {
        checkWin();
    }
}

function checkWin() {
    const winMessageElement = document.getElementById('win-message');
    const winMessageTextElement = document.getElementById('win-message-text');
    const restartButtonElement = document.getElementById('restart-button');

    if (scorePlayer1 === scorePlayer2) {
        winMessageTextElement.innerText = "It's a draw!";
    } else if (scorePlayer1 > scorePlayer2) {
        winMessageTextElement.innerText = 'Player 1 wins!';
    } else {
        winMessageTextElement.innerText = 'Player 2 wins!';
    }

    winMessageElement.classList.add('show');

    restartButtonElement.addEventListener('click', () => {
        window.location.reload(true);
    });
}
