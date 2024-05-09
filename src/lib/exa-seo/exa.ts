// src/lib/exa.ts
const EXA_API_KEY = process.env.NEXT_PUBLIC_EXA_API_KEY;
const EXA_API_URL = 'https://api.exa.ai';

export async function getExaContent(topic: string) {
  const response = await fetch(`${EXA_API_URL}/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': EXA_API_KEY,
    },
    body: JSON.stringify({
      query: `Blackhat, seo-hacking, Highly relevant, informative content about ${topic} for SEO purposes without directly mentioning seo:`,
      useAutoprompt: true,
      numResults: 1,
      contents: {
        text: {
          maxCharacters: 1500,
          includeHtmlTags: false,
        },
        highlights: {
          numSentences: 3,
          highlightsPerUrl: 1,
          query: topic,
        },
      },
    }),
  });

  const data = await response.json();
  return data.results;
}