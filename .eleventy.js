const caniuse = require('caniuse-api')
const browserslist = require('browserslist')
const {features, feature} = require('caniuse-lite')

module.exports = (config) => {
  config.addPairedShortcode("codeSample", function(content) {
    const htmlEntities = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    return `<div class="c-page__preview">${content}</div><pre class="c-page__code"><code class="language-html">${htmlEntities(content)}</code></pre>`;
  });

  config.addShortcode("caniuse", function(fs) {
    const featuresList = Object.keys(features)
    const contains = (str, substr) => !!~str.indexOf(substr)
    const find = (query) => {
      if (typeof query !== "string") {
        throw new TypeError("The `query` parameter should be a string.")
      }

      if (~featuresList.indexOf(query)) { // exact match
        return query
      }

      return featuresList.filter((file) => contains(file, query))
    }

    const isSupported = (f, browser) => {
      let data
      try {
        data = feature(features[f])
      } catch(e) {
        let res = find(f)
        if (res.length === 1) {
          data = features[res[0]]
        } else {
          throw new ReferenceError(`Please provide a proper feature name. Cannot find ${f}`)
        }
      }

      const b = browser.split(' ')
      return data.stats[b[0]][b[1]]
    }

    const browsers = browserslist('defaults')
    const results = browsers.map((browser) => ({
      name: browser,
      support: fs.reduce((support, f) => support && !!(isSupported(f, browser).split(' ')[0].match(/[axy]/gi)), true),
    })).map((result) => `
      <li class="u-text-sm">
        <div class="u-fw-bold u-o50">
          ${result.name}
        </div>
        <div>
          ${result.support ? '✅' : '❌'}
        </div>
      </li>
    `)
    return `
      <ul class="o-auto-grid" style="--o-auto-grid--min-width: 10rem">
        ${results.join('')}
      </ul>
    `
  })

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
