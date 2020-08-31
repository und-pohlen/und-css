module.exports = (config) => {
  config.addPairedShortcode("codeSample", function(content) {
    const htmlEntities = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    return `<div>${content}</div><pre>${htmlEntities(content)}</pre>`;
  });

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
