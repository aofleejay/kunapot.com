import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'
import kebabCase from 'lodash.kebabcase'

type BlogInput = {
  title: string
  tags: string
  published: boolean
  thumbnail: string
  cover: string
}

const createBlog = ({
  title,
  tags,
  published,
  thumbnail,
  cover,
}: BlogInput) => {
  const targetDir = __dirname + `/../blogs/${kebabCase(title)}`

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir)
  }

  const date = new Date().toISOString()
  const blogContent = `---
title: '${title}'
description: ''
date: '${date}'
cover: '${cover}'
thumbnail: '${thumbnail}'
tags: [${tags
    .split(',')
    .map(tag => `'${tag}'`)
    .join()}]
published: ${published}
---`

  fs.writeFileSync(path.join(targetDir + '/index.md'), blogContent, {
    encoding: 'utf8',
  })
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Blog title ?',
      validate: title => !!title || 'Enter title bro!!',
    },
    {
      type: 'input',
      name: 'tags',
      message: 'Enter tags (comma separate)',
      default: 'ทั่วไป',
    },
    {
      type: 'input',
      name: 'thumbnail',
      message: 'Thumbnail url ?',
      default: ({ title }: BlogInput) => `${kebabCase(title)}-thumbnail.jpg`,
    },
    {
      type: 'input',
      name: 'cover',
      message: 'Cover url ?',
      default: ({ title }: BlogInput) => `${kebabCase(title)}.jpg`,
    },
    {
      type: 'input',
      name: 'published',
      message: 'Should blog published ?',
      default: false,
    },
  ])
  .then(answers => createBlog(answers))
  .catch(error => console.error(error))
