import { HiChevronDown } from 'react-icons/hi';

export default function Accordion({ entries }) {
  return (
    <ul className="rounded-md px-0 my-2 group ring-1 ring-gray-400 dark:ring-gray-700 shadow-sm list-none select-none last:border-b-0">
      {entries.map(({ title, text }, index) => (
        <li
          key={index}
          className={
            (index === entries.length - 1 ? '' : 'border-b ') +
            'border-b-gray-300 dark:border-b-gray-800 hover:bg-lighter dark:hover:bg-darker'
          }
        >
          <div className="px-3 pt-3">
            <label
              htmlFor={title.replace(/\s/g, '') + index}
              className="cursor-pointer flex items-center flex-wrap"
            >
              <input
                type="checkbox"
                name={title.replace(/\s/g, '') + index}
                id={title.replace(/\s/g, '') + index}
                className="hidden peer"
              />
              <span className="font-medium text-xl mb-3 peer-checked:mb-0">
                {title}
              </span>
              <HiChevronDown className="text-2xl ml-auto peer-checked:rotate-180 transition-transform mb-3 peer-checked:mb-0" />
              <p className="hidden peer-checked:block w-full mb-3">{text}</p>
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
}
