import { getAllPostsIds, getPostData } from '../../lib/posts';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

export default function Post({ postData }) {
  return (
    <>
      <Link href="/personal-projects">
        <a>←Back</a>
      </Link>
      <br />
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      {postData.git !== undefined && (
        <Link href={`https://github.com/${postData.git}`}>
          <a target="_blank">
            <BsGithub className="inline-block" /> View on GitHub
          </a>
        </Link>
      )}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
