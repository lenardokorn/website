// TODO: Use icons
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export default function DarkModeSwitch() {
  const handleChange = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <label className="relative flex justify-between items-center ml-auto">
      <input
        type="checkbox"
        className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md cursor-pointer"
        onChange={handleChange}
      />
      <span className="w-14 h-7 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-6 after:h-6 after:bg-white after:rounded-full after:duration-300 peer-checked:after:translate-x-6"></span>
    </label>
  );
}
