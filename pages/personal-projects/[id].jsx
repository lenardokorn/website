import { getAllPostsIds, getPostData } from '../../lib/posts';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineCalendar, HiOutlineTag, HiArrowSmLeft } from 'react-icons/hi';
import LinkButton from '../../components/link-button';

export default function Post({ postData }) {
  return (
    <>
      <section>
        <div className="flex">
          <LinkButton href="/personal-projects">
            <HiArrowSmLeft className="inline-block" /> Back
          </LinkButton>
          {postData.git !== undefined && (
            <div className="ml-auto">
              <LinkButton
                href={`https://github.com/${postData.git}`}
                newTab={true}
              >
                <BsGithub className="inline-block" /> View on Github
              </LinkButton>
            </div>
          )}
        </div>
        <h1 className="mt-3 mb-1">{postData.title}</h1>
        <div className="space-x-2">
          <span className="rounded-full bg-lighter py-1 px-3 dark:bg-darker">
            <HiOutlineCalendar className="inline-block" /> {postData.date}
          </span>
          <span className="rounded-full bg-lighter py-1 px-3 dark:bg-darker">
            <HiOutlineTag className="inline-block" />{' '}
            {postData.category === undefined
              ? 'Miscellaneous'
              : postData.category}
          </span>
        </div>
      </section>

      <hr />

      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        className="markdown"
      />
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
