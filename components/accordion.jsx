import { HiChevronDown } from 'react-icons/hi';

export default function Accordion({ entries }) {
  return (
    <ul className="group my-2 select-none list-none rounded-md px-0 shadow-sm ring-1 ring-gray-400 last:border-b-0 dark:ring-gray-700">
      {entries.map(({ title, text }, index) => (
        <li
          key={index}
          className={
            (index === entries.length - 1 ? '' : 'border-b ') +
            'border-b-gray-300 hover:bg-lighter dark:border-b-gray-800 dark:hover:bg-darker'
          }
        >
          <div className="px-3 pt-3">
            <label
              htmlFor={title.replace(/\s/g, '') + index}
              className="flex cursor-pointer flex-wrap items-center"
            >
              <input
                type="checkbox"
                name={title.replace(/\s/g, '') + index}
                id={title.replace(/\s/g, '') + index}
                className="peer hidden"
              />
              <span className="mb-3 text-lg font-medium peer-checked:mb-0">
                {title}
              </span>
              <HiChevronDown className="ml-auto mb-3 text-2xl transition-transform peer-checked:mb-0 peer-checked:rotate-180" />
              <p className="mb-3 hidden w-full peer-checked:block">{text}</p>
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
}
