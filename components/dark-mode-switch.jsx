import { useEffect, useRef } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function DarkModeSwitch() {
  const ref = useRef();

  const handleChange = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      ref.current.checked = true;
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <label className="relative ml-auto flex items-center justify-between">
      <input
        type="checkbox"
        className="peer absolute left-1/2 h-full w-full -translate-x-1/2 cursor-pointer appearance-none rounded-md"
        onChange={handleChange}
        ref={ref}
      />
      <span className="ml-4 flex h-7 w-14 flex-shrink-0 items-center rounded-full bg-gradient-to-r from-pink-600 via-yellow-500 to-yellow-400 p-1 shadow-sm duration-300 ease-in-out after:h-6 after:w-6 after:rounded-full  after:bg-white after:shadow-sm after:duration-300 peer-checked:from-blue-600 peer-checked:via-indigo-600 peer-checked:to-purple-800 peer-checked:after:translate-x-6"></span>
    </label>
  );
}
