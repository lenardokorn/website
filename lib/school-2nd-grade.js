const hi = require('react-icons/hi');
const fa = require('react-icons/fa');
const si = require('react-icons/si');

const iconProps = {
  className: 'w-10 h-10',
};

module.exports = {
  school2ndGrade: [
    {
      title: 'Vacation Photos',
      icon: hi.HiPhotograph(iconProps),
      description: 'A page where I display three photos from my vacations.',
      href: 'vacation-photos',
    },
    {
      title: 'Links',
      icon: hi.HiLink(iconProps),
      description: 'A few important links with different fonts and colors.',
      href: 'links',
    },
    {
      title: 'New Startpage',
      icon: hi.HiDocumentAdd(iconProps),
      description:
        'A new start page which was made by using a template from w3schools.',
      href: 'new-page',
    },
    {
      title: 'Nokia',
      icon: hi.HiDeviceMobile(iconProps),
      description:
        'A CSS table resembling a Nokia phone with various icons in different sizes.',
      href: 'nokia',
    },
    {
      title: 'CSS Properties',
      icon: fa.FaCss3Alt(iconProps),
      description: 'A page which displays various CSS properties.',
      href: 'css-startpage',
    },
    {
      title: 'CSS Properties Total',
      icon: fa.FaCss3Alt(iconProps),
      description:
        'Another page which features a new start page and various CSS properties.',
      href: 'css-properties-total/css-properties-total-start',
    },
    {
      title: 'JS Exercises',
      icon: fa.FaJsSquare(iconProps),
      description: 'Three beginner JavaScript exercises.',
      href: 'js-exercises1',
    },
    {
      title: 'JS Euler Problems',
      icon: fa.FaJsSquare(iconProps),
      description:
        'Three problems from Project Euler programmed in JavaScript.',
      href: 'three-euler-problems',
    },
    {
      title: 'Game Descriptions',
      icon: fa.FaGamepad(iconProps),
      description:
        'Descriptions for the upcoming games that Nina Moritz and I will make.',
      href: 'game-descriptions/tinf-games',
    },
    {
      title: 'Games',
      icon: fa.FaGamepad(iconProps),
      description: 'The games that Nina Moritz and I made! (still in progress)',
      href: 'games/tinf-games',
    },
    {
      title: 'PHP Homework 1',
      icon: si.SiPhp(iconProps),
      description: 'Three beginner PHP exercises',
      href: 'php/homework1/index.php',
    },
    {
      title: 'PHP Homework 2',
      icon: si.SiPhp(iconProps),
      description: 'A form made with PHP.',
      href: 'php/homework2/index.php',
    },
    {
      title: 'PHP Homework 3',
      icon: si.SiPhp(iconProps),
      description:
        'PHP Homework 3 that I made in collaboration with Nina Moritz.',
      href: 'php/homework3/index.php',
    },
  ],
};
