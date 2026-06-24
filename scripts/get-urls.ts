async function getUrls() {
  const urls = ['https://freeimage.host/i/Cu7ugYQ', 'https://freeimage.host/i/Cu7urvV', 'https://freeimage.host/i/Cu7uvEb'];
  for (const url of urls) {
    const res = await fetch(url);
    const text = await res.text();
    const match = text.match(/<link rel=\"image_src\" href=\"(.*?)\"/);
    const match2 = text.match(/<meta property=\"og:image\" content=\"(.*?)\"/);
    const match3 = text.match(/<img id=\"image-viewer-container-img\" src=\"(.*?)\"/);
    console.log(url, match?.[1] || match2?.[1] || match3?.[1] || 'Not found', text.length);
  }
}
getUrls();
