async function run() {
  const res = await fetch('https://freeimage.host/i/CKgFyUQ');
  const text = await res.text();
  console.log(text.match(/<meta property="og:image" content="(.*?)"/)?.[1] || 'Not found');
  console.log(text.match(/<link rel="image_src" href="(.*?)"/)?.[1] || 'Not found');
  console.log(text.match(/https:\/\/iili\.io\/.*?(png|jpg)/g));
}
run();
