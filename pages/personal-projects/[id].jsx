import { getAllPostsIds, getPostData } from '../../lib/posts';
import { BsGithub } from 'react-icons/bs';
import LinkButton from '../../components/link-button';

export default function Post({ postData }) {
  return (
    <>
      <section>
        <div className="flex">
          <LinkButton href="/personal-projects">← Back</LinkButton>
          {/* <Link href="/personal-projects">
            <a>← Back</a>
          </Link> */}
          {postData.git !== undefined && (
            <div className="ml-auto">
              <LinkButton href={`https://github.com/${postData.git}`}>
                <BsGithub className="inline-block" /> View on GitHub
              </LinkButton>
            </div>
          )}
        </div>
        <h1 className="mt-3 mb-1">{postData.title}</h1>
        <span className="bg-lighter dark:bg-darker py-1 px-3 rounded-full">
          {postData.date}
        </span>
      </section>

      <hr />

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
