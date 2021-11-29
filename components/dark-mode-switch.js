// TODO: Use icons
import { useEffect, useRef } from 'react';

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
    <label className="relative flex justify-between items-center ml-auto">
      <input
        type="checkbox"
        className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md cursor-pointer"
        onChange={handleChange}
        ref={ref}
      />
      <span className="w-14 h-7 flex items-center flex-shrink-0 ml-4 p-1 bg-gradient-to-r shadow-sm rounded-full duration-300 ease-in-out from-pink-600 via-yellow-500 to-yellow-400 peer-checked:from-blue-600 peer-checked:via-indigo-600 peer-checked:to-purple-800  after:w-6 after:h-6 after:bg-white after:shadow-sm after:rounded-full after:duration-300 peer-checked:after:translate-x-6"></span>
    </label>
  );
}
