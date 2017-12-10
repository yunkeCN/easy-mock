const faker = require('faker')
const fs = require('fs')
const path = require('path')

let fakerSnippets = '';
const fakerHelpers = Object.keys(faker).filter(key => ['locales', 'locale', 'localeFallback', 'definitions'].indexOf(key) === -1);
fakerHelpers.forEach((help) => {
  const helpers = faker[help];
  fakerSnippets += `#${help}\r\n`
  Object.keys(helpers).forEach((method) => {
    fakerSnippets += `snippet faker.${help}.${method}
	@faker.${help}.${method}
`
  })
})

fs.writeFileSync(path.join(__dirname, '../views/pages/project-detail/snippets/faker.snippets'), fakerSnippets)
