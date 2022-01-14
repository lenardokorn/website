import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'personal-projects');

export function getSortedPostsData() {
  // Get file names
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove '.md' from file name
    const id = fileName.replace(/\.md$/, '');

    // Read file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // Parse metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  // Parse metadata section
  const matterResult = matter(fileContents);

  // Convert markdown to html string
  let contentHtml = '';
  if (matterResult.data.git === undefined) {
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    contentHtml = processedContent.toString();
  } else {
    let markdown = await fetch(
      `https://raw.githubusercontent.com/${matterResult.data.git}/master/README.md`
    );
    if (!markdown.ok) {
      markdown = await fetch(
        `https://raw.githubusercontent.com/${matterResult.data.git}/main/README.md`
      );
    }
    const processedContent = await remark()
      .use(html)
      .process(await markdown.text());
    contentHtml = processedContent.toString();
  }

  // Combine data with id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
