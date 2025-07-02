// app/head.tsx
const title = 'Ebowwa Labs'
const url = 'https://ebowwa.xyz/'
const description = 'Building fast and with precision. Ebowwa Labs runs multiple projects exploring offline, AI-first solutions. We cut through fluff to deliver actionable systems that remove friction and accelerate growth.'
const author = 'Elijah Arbee'
const twitter = '@innitEbowwa'

export default function Head() {
  return (
    <>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='simulation api, threejs, 3d rendering, nextjs, vercel, typescript'
      />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta property='og:title' content={title} />
      <meta property='og:type' content='site' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={'/social-share.png'} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />

      <link rel='apple-touch-icon' href='/platform_optimized_images_named/image_1/iphone/iphone_180x180.png' />
      <link rel='apple-touch-icon' sizes='16x16' href='/platform_optimized_images_named/image_1/web/web_16x16.png' />
      <link rel='apple-touch-icon' sizes='32x32' href='/platform_optimized_images_named/image_1/web/web_32x32.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/platform_optimized_images_named/image_1/iphone/iphone_180x180.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' color='#000000' href='/platform_optimized_images_named/image_1/web/web_96x96.png' />
      <link rel='apple-touch-startup-image' href='/platform_optimized_images_named/image_1/iphone/iphone_180x180.png' />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />
      <link rel='shortcut icon' href='/platform_optimized_images_named/image_1/web/web_96x96.png' />

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={twitter} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='/social-share.png' />
    </>
  )
}
