const questionNameElement = document.getElementById('question-name');
const questionElement = document.getElementById('question');
const questionImageElement = document.getElementById('question-image');
const answerElements = document.getElementsByClassName('answer');
const answerTextElements = document.getElementsByClassName('answer-text');

const questions = [
    {
        questionText: 'Zu welchem Land gehört diese Flagge?',
        questionImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/2000px-Flag_of_Estonia.svg.png',
        answers: ['Estland', 'Finnland', 'Litauen', 'Kosovo'],
        rightAnswerIndex: 0,
    },
    {
        questionText: 'Was ist die Hauptstadt von Nordmazedonien?',
        questionImage: 'https://images.musement.com/cover/0001/64/skopjeco-jpg_header-63013.jpeg',
        answers: ['Valletta', 'Chisinau', 'Skopje', 'Vilnius'],
        rightAnswerIndex: 2,
    },
    {
        questionText: 'Was ist das kleinste Land Europas?',
        questionImage: 'https://www.skr.de/fileadmin/_processed_/7/4/ansicht_des_petersdoms_am_abend_6a15f044c7.jpg',
        answers: ['San Marino', 'Vatikanstadt', 'Andorra', 'Monaco'],
        rightAnswerIndex: 1,
    },
    {
        questionText: 'Was ist das bevölkerungsreichste Land Europas?',
        questionImage: 'https://d1dlh1v05qf6d3.cloudfront.net/information/uploads/2018/11/Diverse-team-1260x840.jpg',
        answers: ['Frankreich', 'Spanien', 'Italien', 'Deutschland'],
        rightAnswerIndex: 3,
    },
    {
        questionText: 'In welchem Meer liegt Mallorca?',
        questionImage: '  https://www.belivehotels.com/imagenes/modules/hotel_mallorca_vacaciones_cala_moro_1_1600x1090.jpg',
        answers: ['Atlantik', 'Mittelmeer', 'Nordsee', 'Schwarzen Meer'],
        rightAnswerIndex: 1,
    },
    {
        questionText: 'Was ist der längste Fluss Europas?',
        questionImage: ' https://www.daserste.de/information/reportage-dokumentation/erlebnis-erde/sendung/hochwasser-an-der-wolga-folge-2-100~_v-varm_444daf.jpg',
        answers: ['Wolga', 'Donau', 'Kainach', 'Ural'],
        rightAnswerIndex: 0,
    },
    {
        questionText: 'Wie groß ist in etwa die Fläche von Europa?',
        questionImage: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Europa_Regionen.png',
        answers: ['15 Millionen Quadratkilometer', '20 Millionen Quadratkilometer', '5 Millionen Quadratkilometer', '10 Millionen Quadratkilometer'],
        rightAnswerIndex: 3,
    },
    {
        questionText: 'Wie viele Länder hat Europa?',
        questionImage: 'https://mbei.nrw/sites/default/files/styles/video_preview_image_big_960x540/public/assets/images/panthermedia_a12557547.jpg?itok=nnFVeEVG',
        answers: ['31', '42', '47', '58'],
        rightAnswerIndex: 2,
    },
    {
        questionText: 'Was ist die größte Stadt Europas?',
        questionImage: 'https://img.phmuseum.com/eyJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MTYwMCwiZml0IjoiY292ZXIifX0sImJ1Y2tldCI6InYyLXBtaC1jb21tdW5pdHkiLCJrZXkiOiJ1c2Vyc1wvMzUwMDdcL2dyYW50LXN1Ym1pc3Npb25zXC8xMzc1MFwvcG03dGRvN2U5MGU1YWRiMC5qcGcifQ==',
        answers: ['London', 'Madrid', 'Moskau', 'Paris'],
        rightAnswerIndex: 2,
    },
    {
        questionText: 'Welche Stadt ist auf dem Bild zu sehen?',
        questionImage: 'https://mypics.at/wp-content/uploads/2016/04/barcelona.jpg',
        answers: ['Barcelona', 'Madrid', 'Nizza', 'Bordeaux'],
        rightAnswerIndex: 0,
    },
    {
        questionText: 'Wie nennt man die Einwohner Monacos?',
        questionImage: 'https://cdn.getyourguide.com/img/country/58de16c85136f.jpeg/88.jpg',
        answers: ['Monacos', 'Monegassen', 'Manocaner', 'Monacoraner'],
        rightAnswerIndex: 1,
    },
    {
        questionText: 'Was ist die Hauptstadt von Zypern?',
        questionImage: 'https://g4w8c6t2.rocketcdn.me/wp-content/uploads/2018/09/Zypern-Kyrenia_1012532905.jpg',
        answers: ['Vaduz', 'Tallinn', 'Podgorica', 'Nikosia'],
        rightAnswerIndex: 3,
    },
    {
        questionText: 'Vilnius ist die Hauptstadt von welchem Land?',
        questionImage: 'https://tubestatic.orf.at/static/images/site/tube/2021026/img_0687.5951337.jpg',
        answers: ['Liechtenstein', 'Lettland', 'Litauen', 'Estland'],
        rightAnswerIndex: 2,
    },
    {
        questionText: 'Zu welchem Land gehört diese Flagge?',
        questionImage: 'https://www.nationalflaggen.de/flaggen-shop/out/pictures/master/product/1/image_100000434_1.png',
        answers: ['Vatikanstadt', 'Montenegro', 'Albanien', 'Andorra'],
        rightAnswerIndex: 1,
    },
    {
        questionText: 'Wieviele Länder sind in der EU?',
        questionImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png',
        answers: ['27', '22', '32', '41'],
        rightAnswerIndex: 0,
    },
    {
        questionText: 'Welche Brücke ist hier zu sehen?',
        questionImage: 'https://www.kafka-prag.de/fileadmin/_processed_/a/e/csm_karslbruecke_seitenansicht_870fb2eb26.jpg',
        answers: ['Öresund-Brücke (Ostsee, Kopenhagen)', 'Ponte Vasco de Gama (Tejo, Lissabon)', 'Rialtobrücke (Carnale Grande, Venedig)', 'Karlsbrücke (Moldau, Prag)'],
        rightAnswerIndex: 3,
    },
    {
        questionText: 'Wann wurde die Europäische Union gegründet?',
        questionImage: 'https://www.ifw-kiel.de/fileadmin/_processed_/f/0/csm_20190311_EP-086075A_EVS_124_2dbf38e842.jpg',
        answers: ['1993', '1985', '1998', '1979'],
        rightAnswerIndex: 0,
    },
    {
        questionText: 'Was ist der westlichste Punkt Europas?',
        questionImage: 'https://img.itinari.com/pages/images/original/7da8ab23-d1e0-4ebb-8bfb-55eab9dab3fe-istock-642116024.jpg?ch=DPR&dpr=1&w=1600&s=76282f8d066f8c43d2a4ababd7095c8d',
        answers: ['Zit de west', 'Lis de Camoe', 'Cabo da Roca', 'Deco ala mei'],
        rightAnswerIndex: 2,
    },
    {
        questionText: 'Was ist der beste Ort Österreichs?',
        questionImage: 'https://www.steiermark.com/bildarchiv/ab_winter_2015_16/4501-4600/4542_c_steiermark_tourismus_schiffer.jpg',
        answers: ['Söding City', 'Lobming', 'St. Veit am Vogau', 'Kaindorf a. d. Sulm'],
        rightAnswerIndex: 1,
    },
];

let currentQuestionIndex = 0;
let points = 0;
let dragAndDropFinishedCnt = 0;

function displayQuestion(index) {
    if (index < questions.length) {
        document.getElementById('score').innerText = `Score: ${points}/${questions.length + 6}`;
        questionNameElement.innerText = `Frage ${index + 1}`;
        questionElement.innerText = questions[index].questionText;
        questionImageElement.style.backgroundImage = "url('https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif')";
        questionImageElement.style.backgroundImage = `url('${questions[index].questionImage}')`;
        questionImageElement.innerHTML = '';
        for (let i = 0; i < answerTextElements.length; i++) {
            answerTextElements[i].innerText = questions[index].answers[i];
        }
    } else {
        setupLastQuestion();
    }
}

function checkAnswer(index) {
    if (currentQuestionIndex < questions.length) {
        if (answerTextElements[index].innerText === questions[currentQuestionIndex].answers[questions[currentQuestionIndex].rightAnswerIndex]) {
            console.log('right answer');
            answerElements[index].classList.add('right');
            points++;

            party.element(answerElements[index], {
                count: 100,
                countVariation: 0.5,
                angleSpan: 80,
                yVelocity: -300,
                yVelocityVariation: 1,
                rotationVelocityLimit: 6,
                scaleVariation: 0.8,
            });

            setTimeout(() => {
                answerElements[index].classList.remove('right');
                currentQuestionIndex++;
                displayQuestion(currentQuestionIndex);
            }, 1000);
        } else {
            console.log('wrong !! 😡');
            answerElements[index].classList.add('wrong');

            setTimeout(() => {
                answerElements[index].classList.remove('wrong');
                currentQuestionIndex++;
                displayQuestion(currentQuestionIndex);
            }, 1000);
        }
    }
}

function setupLastQuestion() {
    const lastQuestionHTML = `
<h4 id="score">Score: ${points}/${questions.length + 6}</h4>
<div id="question-wrapper">
    <h4 id="question-name">Frage ${currentQuestionIndex + 1}</h4>
    <p id="question" class="lead">Ordne die Hauptstadt dem Land zu!</p>
    <p>(Mit Drag-And-Drop 😎)</p>
    <div class="row drag-answer-row">
        <div class="col-md-6 col-sm-12 drag-answer-country">
            Weißrussland
        </div>
        <div class="col-md-6 col-sm-12 drag-answer-dest" ondrop="drop(event);" ondragover="allowDrop(event);"> </div>
    </div>
    <div class="row drag-answer-row">
        <div class="col-md-6 col-sm-12 drag-answer-country">
            Albanien
        </div>
        <div class="col-md-6 col-sm-12 drag-answer-dest" ondrop="drop(event);" ondragover="allowDrop(event);"> </div>
    </div>
    <div class="row drag-answer-row">
        <div class="col-md-6 col-sm-12 drag-answer-country">
            Montenegro
        </div>
        <div class="col-md-6 col-sm-12 drag-answer-dest" ondrop="drop(event);" ondragover="allowDrop(event);"> </div>
    </div>
    <div class="row drag-answer-row">
        <div class="col-md-6 col-sm-12 drag-answer-country">
            Kosovo
        </div>
        <div class="col-md-6 col-sm-12 drag-answer-dest" ondrop="drop(event);" ondragover="allowDrop(event);"> </div>
    </div>
    <div class="row drag-answer-row">
        <div class="col-md-6 col-sm-12 drag-answer-country">
            Ukraine
        </div>
        <div class="col-md-6 col-sm-12 drag-answer-dest" ondrop="drop(event);" ondragover="allowDrop(event);"> </div>
    </div>
    <div class="row drag-answer-row">
        <div class="col-md-6 col-sm-12 drag-answer-country">
            Malta
        </div>
        <div class="col-md-6 col-sm-12 drag-answer-dest" ondrop="drop(event);" ondragover="allowDrop(event);"> </div>
    </div>
</div>
<div id="answer-wrapper">
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div id="answer1" class="answer" draggable="true" ondragstart="drag(event);">
                <span class="answer-text">Tirana</span>
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div id="answer2" class="answer" draggable="true" ondragstart="drag(event);">
                <span class="answer-text">Minsk</span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div id="answer3" class="answer" draggable="true" ondragstart="drag(event);">
                <span class="answer-text">Podgorica</span>
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div id="answer4" class="answer" draggable="true" ondragstart="drag(event);">
                <span class="answer-text">Pristina</span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div id="answer5" class="answer" draggable="true" ondragstart="drag(event);">
                <span class="answer-text">Valletta</span>
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div id="answer6" class="answer" draggable="true" ondragstart="drag(event);">
                <span class="answer-text">Kiew</span>
            </div>
        </div>
    </div>
</div>
`;
    document.getElementById('quiz-wrapper').innerHTML = lastQuestionHTML;
}

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData('text', e.target.id);
}

function drop(e) {
    e.preventDefault();

    const answerID = e.dataTransfer.getData('text');
    const answerText = document.getElementById(answerID).innerText;
    const countryName = e.target.parentElement.innerText;
    const countryArray = ['Weißrussland', 'Albanien', 'Montenegro', 'Kosovo', 'Ukraine', 'Malta'];
    const cityArray = ['Minsk', 'Tirana', 'Podgorica', 'Pristina', 'Kiew', 'Valletta'];

    e.target.innerText = answerText;
    document.getElementById(answerID).remove();

    if (countryArray.indexOf(countryName) === cityArray.indexOf(answerText)) {
        e.target.classList.add('right');
        party.element(e.target, {
            count: 100,
            countVariation: 0.5,
            angleSpan: 80,
            yVelocity: -300,
            yVelocityVariation: 1,
            rotationVelocityLimit: 6,
            scaleVariation: 0.8,
        });

        points++;
        document.getElementById('score').innerText = `Score: ${points}/${questions.length + 6}`;
    } else {
        e.target.classList.add('wrong');
    }

    dragAndDropFinishedCnt++;
    if (dragAndDropFinishedCnt === 6) {
        endGame();
    }
}

function endGame() {
    console.log('Tha quiz do be ended tho 😳');

    const winMessageElement = document.getElementById('win-message');
    const winMessageTextElement = document.getElementById('win-message-text');
    const restartButtonElement = document.getElementById('restart-button');

    const pointsPercent = (points / (questions.length + 6)) * 100;
    if (pointsPercent <= 25) {
        winMessageTextElement.innerText = `${points} Punkte! Nix gut !! 😡`;
    } else if (pointsPercent <= 50) {
        winMessageTextElement.innerText = `${points} Punkte! Musst noch üben... 😌💅`;
    } else if (pointsPercent <= 75) {
        winMessageTextElement.innerText = `${points} Punkte! Gut 😌`;
    } else if (pointsPercent < 100) {
        winMessageTextElement.innerText = `${points} Punkte! Epic 😎😎😎`;
    } else {
        winMessageTextElement.innerHTML = `${points} Punkte! ✨ <span style="font-style: italic;">p e r f e c t</span> ✨`;
    }
    winMessageElement.classList.add('show');

    restartButtonElement.addEventListener('click', () => {
        window.location.reload(true);
    });
}

// Start by displaying the first question
displayQuestion(currentQuestionIndex);

// Handle normal answer selection
for (let i = 0; i < answerElements.length; i++) {
    answerElements[i].addEventListener('click', () => {
        checkAnswer(i);
    });
}

// Handle keyboard answer selection
window.addEventListener('keydown', (e) => {
    const key = parseInt(e.key);
    const possibleNumbers = [1, 2, 3, 4];

    if (possibleNumbers.includes(key)) {
        checkAnswer(key - 1);
    }
});
