import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const targetUrl = searchParams.get('url')
  if (!targetUrl) {
    return new Response('Missing URL', { status: 400 })
  }
  if (targetUrl.includes('localhost') || targetUrl.includes('127.0.0.1')) {
    return new Response('Invalid target', { status: 400 })
  }
  try {
    const html = await fetch(targetUrl).then(r => r.text())
    const cheerio = await import('cheerio')
    const $ = cheerio.load(html)

    const getMeta = (name: string) =>
      $(`meta[property='${name}']`).attr('content') ||
      $(`meta[name='${name}']`).attr('content')

    const base = new URL(targetUrl)
    const favicon = $('link[rel="icon"]').attr('href') || '/favicon.ico'

    return Response.json({
      title: getMeta('og:title') || $('title').text(),
      description: getMeta('og:description') || getMeta('description'),
      image: getMeta('og:image'),
      favicon: favicon.startsWith('/') ? `${base.origin}${favicon}` : favicon,
    })
  } catch (e) {
    console.error('Preview error', e)
    return new Response('Failed to fetch metadata', { status: 500 })
  }
}
