import Link from 'next/link';
import ModelViewer from '../components/model-viewer';
import Accordion from '../components/accordion';

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-full md:items-center md:justify-center">
        <div className="flex-grow">
          <h1 className="text-6xl">Hi, I'm Lenard!</h1>
          <p className="text-2xl font-light">I write code sometimes.</p>
        </div>
        <div className="flex-shrink-0 self-center">
          <div className="max-w-full w-[300px] lg:w-[450px]">
            <ModelViewer modelPath="/lenny.glb" />
          </div>
        </div>
      </div>

      <hr />

      <h2 id="about">About</h2>
      <h3>Who am I?</h3>
      <ul>
        <li>
          a student at{' '}
          <Link href="https://htl-kaindorf.at">
            <a target="_blank">HTBLA Kaindorf</a>
          </Link>
        </li>
        <li>
          a pretty big nerd (so much so that I built this entire website in my{' '}
          <i>free time</i>!)
        </li>
        <li>
          someone who is terrible at writing lists where I introduce myself
        </li>
        <li>someone who hates repetition</li>
        <li>
          someone who is terrible at writing lists where I introduce myself
        </li>
        <li>someone who likes irony</li>
      </ul>
      <h3>Nerd Facts</h3>
      <Accordion
        entries={[
          {
            title: 'Favorite programming language',
            text: `My favorite programming language is probably Dart because it is a "mix" between Java and JavaScript which probably share the second place.`,
          },
          {
            title: 'Spaces vs. tabs',
            text: `I use spaces (2 or 4, depending on the language) instead of tabs (unpopular opinion, I know, but I've tried using tabs and it was just too much of a hassle).`,
          },
          {
            title: 'Current interests',
            text: `The thing I'm most interested in (at the moment) is web development.`,
          },
          {
            title: 'IDEs',
            text: `I use Visual Studio Code for everything except Java where I use IntelliJ.`,
          },
          {
            title: 'This website',
            text: `This website is built using Next.js and it is hosted on Vercel. In addition to that, I use Tailwind to make it look ✨pretty✨.`,
          },
        ]}
      />
    </>
  );
}
