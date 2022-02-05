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
        className="my-5 flex flex-col rounded-md bg-orange-300 px-4 py-3 text-red-700 shadow-md sm:flex-row"
        role="alert"
      >
        <FiAlertTriangle className="mr-4 h-14 w-14 self-center py-1" />
        <p className="m-0">
          These websites are static HTML sites which I had to port over so that
          I could display them on this site which is a Next.js site.
          <br />I think I did a pretty good job, but note that some sites may
          not work properly.
          {' ;)'}
        </p>
      </div>

      <div className="my-5 flex flex-wrap justify-center">
        {school2ndGrade.map(({ title, icon, description, href }) => (
          <div
            className="m-2 flex flex-shrink flex-grow-0 basis-48 cursor-pointer select-none flex-col rounded-md p-3 shadow-sm ring-1 ring-gray-400 hover:bg-lighter hover:shadow-md dark:ring-gray-700 dark:hover:bg-darker"
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
