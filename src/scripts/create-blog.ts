import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'
import kebabCase from 'lodash.kebabcase'

type BlogInput = {
  title: string
  tags: string
  draft: boolean
  coverImage: string
  bookCover: string
}

const createBlog = ({
  title,
  tags,
  draft,
  coverImage,
  bookCover,
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
# coverImage: '${coverImage}'
# bookCover: '${bookCover}'
tags: [${tags
    .split(',')
    .map(tag => `'${kebabCase(tag)}'`)
    .join()}]
draft: ${draft}
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
      name: 'coverImage',
      message: 'Cover image ?',
      default: ({ title }: BlogInput) => `${kebabCase(title)}-cover-image.jpg`,
    },
    {
      type: 'input',
      name: 'bookCover',
      message: 'Book cover ?',
      default: ({ title }: BlogInput) => `${kebabCase(title)}-book-cover.jpg`,
    },
    {
      type: 'input',
      name: 'draft',
      message: 'Draft ?',
      default: true,
    },
  ])
  .then(answers => createBlog(answers))
  .catch(error => console.error(error))
