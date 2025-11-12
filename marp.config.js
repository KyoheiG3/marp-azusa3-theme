const { Marp } = require('@marp-team/marp-core');
const hljs = require('highlight.js');
const { registerDartLanguage } = require('./highlighter/dart');

// Register custom Dart language definition
hljs.registerLanguage('dart', registerDartLanguage);

module.exports = {
  engine: (opts) => {
    const marp = new Marp({
      ...opts,
      html: true,
    });
    const { markdown } = marp;

    // Use highlight.js with enhanced Dart support
    markdown.set({ highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
        } catch {}
      }
      return '';
    }});

    return marp;
  }
};
