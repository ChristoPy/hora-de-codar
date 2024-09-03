let cachedQuote = null;
let cacheExpiration = null;

const quotes = [
  'bora codar?', 'eai, bora codar?',
  'bora codar hj?', 'eai, bora codar hj?',
  'bora codar produto?', 'eai, bora codar produto?',
  'bora codar startup', 'eai, bora codar startup?',
  'bora subir produto?', 'eai, bora subir produto?',
  'codagem liberada', 'vamo codar?',
  'bora codar logo esse produto', 'vamo?',
  'código tá liberado, bora?', 'bora codar hj sim ou nao?',
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export function GET() {
  const now = new Date();

  if (!cachedQuote || now > cacheExpiration) {
    cachedQuote = getRandomQuote();
    cacheExpiration = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours from now
  }

  return new Response(JSON.stringify({ quote: cachedQuote }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
