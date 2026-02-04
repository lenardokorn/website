import { createSignal } from 'solid-js';
import '../styles/crt.css';

const Shell = () => {
  return (
    <>
      <span class="font-bold text-yellow-200">lenardokorn@website</span>
      <span>:</span>
      <span class="text-blue-300">~/info $ </span>
    </>
  );
};

const NavigationTerminal = () => {
  const [selectedLink, setSelectedLink] = createSignal('');

  return (
    <div class="crt flex min-w-full flex-col rounded-xl bg-dark/90 p-5 font-mono break-all text-light shadow-xl shadow-black/20 select-none md:min-w-md dark:bg-black/15">
      <div class="w-full">
        <Shell />
        <span>ls -a</span>
      </div>
      <nav class="w-full">
        <ul class="font-bold">
          <li>
            <a
              class="px-2.5 py-0.5 underline decoration-dotted transition-colors duration-75 hover:bg-light hover:text-dark sm:no-underline"
              href="#about"
              on:mouseenter={() => {
                setSelectedLink('about');
              }}
              on:mouseleave={() => {
                setSelectedLink('');
              }}
            >
              about
            </a>
          </li>
          <li>
            <a
              class="px-2.5 py-0.5 underline decoration-dotted transition-colors duration-75 hover:bg-light hover:text-dark sm:no-underline"
              href="#projects"
              on:mouseenter={() => {
                setSelectedLink('projects');
              }}
              on:mouseleave={() => {
                setSelectedLink('');
              }}
            >
              projects
            </a>
          </li>
        </ul>
      </nav>
      <div class="w-full">
        <Shell />
        <span>cd </span>
        {selectedLink() === '' ? (
          <span class="animate-pulse">█</span>
        ) : (
          <span>{selectedLink()}</span>
        )}
      </div>
    </div>
  );
};

export default NavigationTerminal;
