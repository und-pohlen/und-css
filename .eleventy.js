module.exports = (config) => {
  config.addPairedShortcode("codeSample", function(content) {
    const htmlEntities = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    return `<div class="c-page__preview">${content}</div><pre class="c-page__code"><code class="language-html">${htmlEntities(content)}</code></pre>`;
  });

  config.addPassthroughCopy('docs/assets/vendor')

  return {
    dir: {
      input: 'docs',
      data: 'data',
      includes: 'includes',
      layouts: 'layouts',
      output: 'dist',
    },
  }
}
