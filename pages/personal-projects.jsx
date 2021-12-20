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

      <div className="flex flex-wrap justify-center my-5">
        {allPostsData.map(({ id, date, title, git, category }) => (
          <div
            className="rounded-md p-3 m-2 group ring-1 ring-gray-400 dark:ring-gray-700 hover:bg-lighter dark:hover:bg-darker transition-colors hover:shadow-md shadow-sm flex-grow-0 flex-shrink basis-48 cursor-pointer select-none flex flex-col relative"
            key={'/personal-projects/' + id}
            onClick={(e) => {
              e.preventDefault();
              router.push('/personal-projects/' + id);
            }}
          >
            <h5 className="text-center">{title}</h5>
            <div className="bg-lighter dark:bg-darker group-hover:bg-lightest dark:group-hover:bg-darkest py-1 px-3 my-1 rounded-full mr-auto">
              <HiOutlineCalendar className="inline-block" /> {date}
            </div>
            <div className="bg-lighter dark:bg-darker group-hover:bg-lightest dark:group-hover:bg-darkest py-1 px-3 my-1 rounded-full mr-auto">
              <HiOutlineTag className="inline-block" />{' '}
              {category === undefined ? 'Miscellaneous' : category}
            </div>
            {git !== undefined && (
              <BsGithub className="absolute opacity-50 right-3" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
