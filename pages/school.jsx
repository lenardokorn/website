import { school2ndGrade } from '../lib/school-2nd-grade';
import { FiAlertTriangle } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function School() {
  const router = useRouter();

  return (
    <>
      <section>
        <h1>School</h1>
        <p>
          Here you can find my school projects that I thought would be worth
          showing on my website.
        </p>
      </section>

      <hr />

      <h2>2nd grade</h2>
      <p>
        This is the year in which we started learning the basics of web
        development in school. They look quite boring (especially the first
        few), but I still chose to show them because in my opinion they show my
        progress when it comes to web development very well.
      </p>

      <div
        className="bg-orange-300 text-red-700 px-4 py-3 shadow-md rounded-md flex my-5 flex-col sm:flex-row"
        role="alert"
      >
        <FiAlertTriangle className="py-1 w-14 h-14 mr-4 self-center" />
        <p className="m-0">
          These websites are static HTML sites which I had to port over so that
          I could display them on this site which is a Next.js site.
          <br />I think I did a pretty good job, but note that some sites may
          not work properly.
          {' ;)'}
        </p>
      </div>

      <div className="flex flex-wrap justify-center my-5">
        {school2ndGrade.map(({ title, icon, description, href }) => (
          <div
            className="rounded-md p-3 m-2 ring-1 ring-gray-400 dark:ring-gray-700 hover:bg-lighter dark:hover:bg-darker hover:shadow-md shadow-sm flex-grow-0 flex-shrink basis-48 cursor-pointer select-none flex flex-col"
            key={href}
            onClick={(e) => {
              e.preventDefault();
              router.push('/school/2nd-grade/' + href);
            }}
          >
            <span className="mx-auto">{icon}</span>
            <h5 className="text-center">{title}</h5>
            <p className="font-light">{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
