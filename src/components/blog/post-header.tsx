// src/components/blog/post-header.tsx
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import { PostTitle } from './post-title'
import styles from '@/styles/Tags.module.css' // Import the CSS module for tags

type Props = {
  title: string
  coverImage: string
  date: string
  tags: string[] // Added tags array
}

export const PostHeader = ({ title, coverImage, date, tags }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} githubPath={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
        {/* Display tags as styled bubbles */}
        <div className={styles.tagContainer}>
          {tags.map(tag => (
            <span key={tag} className={styles.tagBubble}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  )
}

// export default PostHeader