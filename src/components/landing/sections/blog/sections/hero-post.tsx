// components/hero-post.tsx
import DateFormatter from '../components/date-formatter';
import CoverImage from '../components/cover-image';
import Link from 'next/link';
import { route } from "@/lib/constants";

// Props type definition including tags and styles
type HeroPostProps = {
  title: string;
  coverImage: string;
  date: string;
  tags: string[]; // Include tags in the props
  slug: string;
  excerpt: string;
  tagStyles: { [key: string]: string }; // CSS module for styling tags
};

const HeroPost = ({
  title,
  coverImage,
  date,
  tags,
  slug,
  excerpt,
  tagStyles,
}: HeroPostProps) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} githubPath={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link as={`${route.baseUrl}/${route.postRoute}/${slug}`} href={`${route.baseUrl}/${route.postRoute}/[slug]`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {/* Render the tags as styled bubbles */}
          <div className={tagStyles.tagContainer}>
            {tags.map(tag => (
              <span key={tag} className={tagStyles.tagBubble}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;