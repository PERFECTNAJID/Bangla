addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  // The main M3U8 link
  const targetUrl = 'https://jiotvbpklive.cdn.jio.com/bpk-tv/IDCDemo_IPL23_Sports18_MOB/Fallback/index.m3u8';

  // Fetch and forward the content
  return fetch(targetUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; CustomProxy/1.0)',
    },
  });
}