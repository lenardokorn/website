let subheading = document.getElementById('subheading');

let typewriter = new Typewriter(subheading, {
    loop: true,
    delay: 60,
    deleteSpeed: 10,
    wrapperClassName: 'typewriter-wrapper',
    cursorClassName: 'typewriter-cursor',
});

// prettier-ignore
typewriter
    .pauseFor(500)
    .typeString('Yup, that\'s me!')
    .pauseFor(1500)
    .deleteChars(15)
    .pauseFor(250)
    .typeString('People say nothing is impossible')
    .pauseFor(1000)
    .typeString(', but I do nothing every day.')
    .pauseFor(1500)
    .deleteChars(71)
    .pauseFor(250)
    .typeString('✨ <span style="font-style: italic">h e l o</span> ✨')
    .pauseFor(1500)
    .deleteAll()
    .pauseFor(250)
    .start();
