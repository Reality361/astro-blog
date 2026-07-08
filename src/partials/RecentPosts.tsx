import type { MarkdownInstance } from "astro";
import type { IFrontmatter } from "astro-boilerplate-components";
import {
  BlogGallery,
  GradientText,
  Section,
} from "astro-boilerplate-components";

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a className="text-cyan-300 hover:text-cyan-200" href="/posts/">
            View all posts
          </a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
