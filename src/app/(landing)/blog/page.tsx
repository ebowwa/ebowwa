// src/app/(landing)/blog/page.tsx

import Container from "@/components/landing/sections/blog/sections/container";
import HeroPost from "@/components/landing/sections/blog/sections/hero-post";
import { Intro } from "@/components/landing/sections/blog/sections/intro";
import MoreStories from "@/components/landing/sections/blog/sections/more-stories";
import { getAllPosts } from "@/components/landing/sections/blog/lib/api";
// Importing necessary components and styles
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';


import styles from '@/components/landing/sections/blog/styles/Tags.module.css'; // Import the CSS module for tags

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
        <Head>
          <title>{`Concrete Stamping, Landscaping with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              tags={heroPost.tags} // Pass tags to HeroPost
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              tagStyles={styles} // Pass the CSS module for tag styling
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        </main>
  );
}