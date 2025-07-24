"use client"
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { z } from 'zod';
import { route } from "@/lib/constants";
import { useState } from "react";

const CoverImageSchema = z.object({
  title: z.string(),
  githubPath: z.string(),
  slug: z.string().optional(),
});

type Props = z.infer<typeof CoverImageSchema>;

const CoverImage = ({ title, githubPath, slug }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const result = CoverImageSchema.safeParse({ title, githubPath, slug });
  if (!result.success) {
    console.error(`Invalid props provided to CoverImage component: ${JSON.stringify(result.error.format())}`);
    return <p>Error loading image. Please check the provided props.</p>;
  }

  const githubUser = "ebowwar";
  const githubRepo = "asset-store";
  const githubBranch = "main";
  const baseURL = `https://cdn.jsdelivr.net/gh/${githubUser}/${githubRepo}@${githubBranch}`;
  const imageUrl = `${baseURL}/${githubPath}`;

  const image = (
    <Image
      src={imageUrl}
      alt={`Cover Image for ${title}`}
      width={1600}
      height={900}
      sizes="(max-width: 640px) 100vw, 640px"
      className={cn("shadow-sm w-full h-auto", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      onLoad={() => setIsLoading(false)}
      onError={() => setHasError(true)}
    />
  );

  return (
    <div className="sm:mx-0">
      {isLoading && <div className="loading-placeholder" />}
      {hasError && <p>Failed to load the cover image.</p>}
      {!hasError && (
        slug ? (
          <Link
            as={`${route.baseUrl}/${route.postRoute}/${slug}`}
            href={`${route.baseUrl}/${route.postRoute}/[slug]`}
            aria-label={title}
          >
            {image}
          </Link>
        ) : (
          image
        )
      )}
    </div>
  );
};

export default CoverImage;