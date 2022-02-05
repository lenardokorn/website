import { getSortedPostsData } from '../lib/posts';
import { HiOutlineCalendar, HiOutlineTag } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function PersonalProjects({ allPostsData }) {
  const router = useRouter();

  return (
    <>
      <section>
        <h1>Personal Projects</h1>
        <p>
          This is where I showcase any personal projects that I thought were
          cool enough for you to see! These projects may include stuff I coded,
          things I made in Blender, or videos that I made.
        </p>
      </section>

      <hr />

      <div className="my-5 flex flex-wrap justify-center">
        {allPostsData.map(({ id, date, title, git, category }) => (
          <div
            className="group relative m-2 flex flex-shrink flex-grow-0 basis-48 cursor-pointer select-none flex-col rounded-md p-3 shadow-sm ring-1 ring-gray-400 hover:bg-lighter hover:shadow-md dark:ring-gray-700 dark:hover:bg-darker"
            key={'/personal-projects/' + id}
            onClick={(e) => {
              e.preventDefault();
              router.push('/personal-projects/' + id);
            }}
          >
            <h5 className="text-center">{title}</h5>
            <div className="my-1 mr-auto rounded-full bg-lighter py-1 px-3 group-hover:bg-lightest dark:bg-darker dark:group-hover:bg-darkest">
              <HiOutlineCalendar className="inline-block" /> {date}
            </div>
            <div className="my-1 mr-auto rounded-full bg-lighter py-1 px-3 group-hover:bg-lightest dark:bg-darker dark:group-hover:bg-darkest">
              <HiOutlineTag className="inline-block" />{' '}
              {category === undefined ? 'Miscellaneous' : category}
            </div>
            {git !== undefined && (
              <BsGithub className="absolute right-3 opacity-50" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
