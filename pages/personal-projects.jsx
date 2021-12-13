import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function PersonalProjects({ allPostsData }) {
  return (
    <ul>
      {allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/personal-projects/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          {id}
          <br />
          {date}
        </li>
      ))}
    </ul>
  );
}
