// Custom Dart language definition to enhance syntax highlighting
function registerDartLanguage(hljs) {
  const KEYWORDS = [
    'abstract', 'as', 'assert', 'async', 'await', 'break', 'case', 'catch',
    'class', 'const', 'continue', 'covariant', 'default', 'deferred', 'do',
    'dynamic', 'else', 'enum', 'export', 'extends', 'extension', 'external',
    'factory', 'false', 'final', 'finally', 'for', 'Function', 'get', 'hide',
    'if', 'implements', 'import', 'in', 'interface', 'is', 'late', 'library',
    'mixin', 'new', 'null', 'of', 'on', 'operator', 'part', 'required',
    'rethrow', 'return', 'sealed', 'set', 'show', 'static', 'super', 'switch',
    'sync', 'this', 'throw', 'true', 'try', 'typedef', 'var', 'void', 'when',
    'while', 'with', 'yield'
  ];

  const BUILT_IN_TYPES = [
    'int', 'double', 'num', 'bool', 'String', 'List', 'Set', 'Map',
    'Runes', 'Symbol', 'Object', 'Future', 'Stream', 'Duration',
    'DateTime', 'Uri', 'Iterable', 'Uint8List', 'File', 'Directory'
  ];

  const BUILT_IN_FUNCTIONS = [
    'print', 'identical', 'identityHashCode'
  ];

  return {
    name: 'Dart',
    keywords: {
      keyword: KEYWORDS,
      built_in: [...BUILT_IN_TYPES, ...BUILT_IN_FUNCTIONS],
      literal: ['true', 'false', 'null']
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'string',
        variants: [
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          {
            begin: 'r\'',
            end: '\''
          },
          {
            begin: 'r"',
            end: '"'
          }
        ]
      },
      {
        className: 'number',
        variants: [
          { begin: '\\b(0[xX][0-9a-fA-F]+)' },
          { begin: '\\b(\\d+(\\.\\d+)?([eE][+-]?\\d+)?)' }
        ],
        relevance: 0
      },
      {
        // Class definitions
        className: 'class',
        beginKeywords: 'class interface mixin enum',
        end: '{',
        excludeEnd: true,
        contains: [
          {
            className: 'title',
            begin: '[A-Z][a-zA-Z0-9_]*'
          }
        ]
      },
      {
        // Type annotations and class instantiation (uppercase first letter)
        className: 'title class_',
        begin: '\\b[A-Z][a-zA-Z0-9_]*\\b',
        keywords: {
          _: []
        },
        relevance: 0
      },
      {
        // Function/method calls (standalone)
        className: 'title function_',
        begin: '\\b[a-zA-Z_][a-zA-Z0-9_]*(?=\\()',
        keywords: {
          _: []
        },
        relevance: 0
      },
      {
        // Method calls (after dot, followed by parentheses)
        className: 'title function_',
        begin: '\\.[a-zA-Z_][a-zA-Z0-9_]*(?=\\()',
        relevance: 0
      },
      {
        // Property access (NOT followed by parentheses)
        className: 'property',
        begin: '\\.[a-zA-Z_][a-zA-Z0-9_]*\\b(?!\\()',
        relevance: 0
      },
      {
        // Variables and identifiers (lowercase start, not a keyword or built-in)
        className: 'variable',
        begin: '\\b(?!' + [...KEYWORDS, ...BUILT_IN_FUNCTIONS, 'true', 'false', 'null'].join('\\b|') + '\\b)[a-z_][a-zA-Z0-9_]*\\b',
        relevance: 0
      }
    ]
  };
}

module.exports = { registerDartLanguage };
