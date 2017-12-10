/* global ace */
const mockSnippets = require('./mock.snippets')
const javascriptSnippets = require('./javascript.snippets')
const fakerSnippets = require('./faker.snippets')

ace.define('ace/snippets/javascript', ['require', 'exports', 'module'], function (e, t) {
  t.snippetText = javascriptSnippets + '\n' + mockSnippets + '\n' + fakerSnippets
  t.scope = 'javascript'
})
