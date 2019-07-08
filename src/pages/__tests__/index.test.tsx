import React from 'react'
import { render } from '@testing-library/react'
import Index from '../index'

jest.mock('../../components/seo', () => 'div')

it('Home page should contain blog posts.', () => {
  const props = {
    data: {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              id: '174a38df-cf7b-5961-9b5f-9fa442181f66',
              frontmatter: {
                title: 'เล่าหนังสือ - เมื่อหัวว่าง จึงสร้างสรรค์',
                cover: null,
                date: '15 May, 2019',
                tags: ['เล่าหนังสือ'],
              },
              fields: {
                slug: '/เมื่อหัวว่างจึงสร้างสรรค์/',
              },
              excerpt:
                '"เมื่อหัวว่าง จึงสร้างสรรค์" แต่งโดยคุณต้อง กวีวุฒิ เจ้าของเพจเฟสบุ๊คและพอดแคสต์  แปดบรรทัดครึ่ง  โดยก่อนจะเล่าถึงหนังสือเล่มนี้ ขอออกตัวก่อนว่า ผมเป็นคนชอบฟังพอดแคสต์มากๆ ซึ่งรายการหนึ่งที่ผมมักจะฟังอยู่เป็นประจำคือ  "แปดบรรทัดครึ่ง"  นี่แหละครับ ด…',
            },
          },
        ],
      },
    },
  }

  const { getByText } = render(<Index {...props} />)

  expect(getByText('เล่าหนังสือ - เมื่อหัวว่าง จึงสร้างสรรค์')).toBeDefined()
})
