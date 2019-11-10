import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from 'gatsby'

import Index from '../index'

jest.mock('../../components/seo', () => 'div')

it('Home page should contain blog posts.', () => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          social: {
            medium: 'asd',
            github: 'asd',
          },
        },
      },
    }),
  )

  const props = {
    data: {
      books: {
        edges: [
          {
            node: {
              id: '2fe29c10-79c2-5bc4-b6a1-ea26d36a54d8',
              frontmatter: {
                title: 'เล่าหนังสือ - ฤาสิ้นสุดมนุษยภาพ',
                cover: {
                  name: '12-years-a-slave',
                  publicURL:
                    '/static/12-years-a-slave-da6375c6b3202b55f2cd031cc78cb5d5.jpg',
                },
                thumbnail: {
                  name: '12-years-a-slave-thumbnail',
                  publicURL:
                    '/static/12-years-a-slave-thumbnail-67fd6f1378f29e8e6c8ef6f01efe3b8e.jpg',
                },
                date: '13 August, 2019',
                tags: ['เล่าหนังสือ'],
              },
              fields: {
                slug: '/12-years-a-slave/',
              },
              excerpt:
                'ฤาสิ้นสุดมนุษยภาพ หรืออีกชื่อหนึ่งคือ "12 Years a Slave" เป็นเรื่องราวของชายชื่อ "โซโลมอน นอร์ทอัพ" ชายผิวสีผู้เป็นอิสระชนของรัฐนิวยอร์ก ที่ชีวิตพลิกผันถูกพรากจากครอบครัวไปเป็นทาสยาวนานถึงสิบสองปี หลังการเป็นอิสระเขาจึงบอกเล่าเรื่องราวทั้งหมดผ่านหนั…',
            },
          },
          {
            node: {
              id: 'b6d243c5-3e3b-5f46-9b14-ee940146e37a',
              frontmatter: {
                title: 'เล่าหนังสือ - เมื่อหัวว่าง จึงสร้างสรรค์',
                cover: {
                  name: 'เมื่อหัวว่าง-จึงสร้างสรรค์',
                  publicURL:
                    '/static/เมื่อหัวว่าง-จึงสร้างสรรค์-6595f3ec77e1ab106cce702385f7028b.jpg',
                },
                thumbnail: {
                  name: 'เมื่อหัวว่าง-จึงสร้างสรรค์-thumbnail',
                  publicURL:
                    '/static/เมื่อหัวว่าง-จึงสร้างสรรค์-thumbnail-d49da8030fc2c88290704f7548e91b00.jpg',
                },
                date: '15 May, 2019',
                tags: ['เล่าหนังสือ'],
              },
              fields: {
                slug: '/เมื่อหัวว่าง-จึงสร้างสรรค์/',
              },
              excerpt:
                '"เมื่อหัวว่าง จึงสร้างสรรค์" แต่งโดยคุณต้อง กวีวุฒิ เจ้าของเพจเฟสบุ๊คและพอดแคสต์ แปดบรรทัดครึ่ง โดยก่อนจะเล่าถึงหนังสือเล่มนี้ ขอออกตัวก่อนว่า ผมเป็นคนชอบฟังพอดแคสต์มากๆ ซึ่งรายการหนึ่งที่ผมมักจะฟังอยู่เป็นประจำคือ "แปดบรรทัดครึ่ง" นี่แหละครับ ด้วยเ…',
            },
          },
          {
            node: {
              id: '01ba425b-5cd1-5fbf-913e-393485583d78',
              frontmatter: {
                title:
                  'เล่าหนังสือ - ชีวิตดีขึ้นทุกๆด้านด้วยการจัดบ้านแค่ครั้งเดียว',
                cover: {
                  name: 'ชีวิตดีขึ้นทุกๆด้านด้วยการจัดบ้านแค่ครั้งเดียว',
                  publicURL:
                    '/static/ชีวิตดีขึ้นทุกๆด้านด้วยการจัดบ้านแค่ครั้งเดียว-5852729eb92b914de37c72cb751146ef.jpg',
                },
                thumbnail: {
                  name:
                    'ชีวิตดีขึ้นทุกๆด้านด้วยการจัดบ้านแค่ครั้งเดียว-thumbnail',
                  publicURL:
                    '/static/ชีวิตดีขึ้นทุกๆด้านด้วยการจัดบ้านแค่ครั้งเดียว-thumbnail-4d54799ba3df7424123ff0fb7da94961.jpg',
                },
                date: '04 April, 2019',
                tags: ['เล่าหนังสือ'],
              },
              fields: {
                slug: '/ชีวิตดีขึ้นทุกๆด้านด้วยการจัดบ้านแค่ครั้งเดียว/',
              },
              excerpt:
                'ตอนที่ผมเห็นหนังสือเล่มนี้วางอยู่บนชั้นหนังสือขายดีเนี่ย ผมเดาไว้ว่ามันต้องมีเทคนิคในการจัดบ้านแบบเมพๆ แน่ๆ แต่พอได้อ่านเข้าจริงๆ ผมเดาผิดแฮะ เนื้อหามันไม่ได้เน้นไปที่การเก็บของเท่าไหร่ครับ แต่กลับเน้นไปที่การทิ้งของมากกว่า! ผมว่าถ้าเปลี่ยนชื่อหนังส…',
            },
          },
          {
            node: {
              id: '6f96f592-fe36-5846-acb8-06b8fcccca3c',
              frontmatter: {
                title:
                  'เล่าหนังสือ - เทคนิคเปลี่ยนคุณให้เป็นคนไม่ผัดวันประกันพรุ่งและลงมือทำทันที',
                cover: {
                  name:
                    'เทคนิคเปลี่ยนคุณให้เป็นคนไม่ผัดวันประกันพรุ่งและลงมือทำทันที',
                  publicURL:
                    '/static/เทคนิคเปลี่ยนคุณให้เป็นคนไม่ผัดวันประกันพรุ่งและลงมือทำทันที-2836eaa427a8a790b5ab210f50263926.jpg',
                },
                thumbnail: {
                  name:
                    'เทคนิคเปลี่ยนคุณให้เป็นคนไม่ผัดวันประกันพรุ่งและลงมือทำทันที-thumbnail',
                  publicURL:
                    '/static/เทคนิคเปลี่ยนคุณให้เป็นคนไม่ผัดวันประกันพรุ่งและลงมือทำทันที-thumbnail-4818aaa90e6be708e528079c3ff6290a.jpg',
                },
                date: '23 February, 2019',
                tags: ['เล่าหนังสือ'],
              },
              fields: {
                slug:
                  '/เทคนิคเปลี่ยนคุณให้เป็นคนไม่ผัดวันประกันพรุ่งและลงมือทำทันที/',
              },
              excerpt:
                'เมื่อวันก่อนไปเดินเล่นร้านหนังสือ เจอหนังสือเล่มหนึ่งตั้งอยู่บนชั้นหนังสือยอดนิยมชื่อว่า "เทคนิคเปลี่ยนคุณให้เป็นคนไม่ผัดวันประกันพรุ่งและลงมือทำทันที" นี่แค่เห็นหน้าปกก็คิดละว่า เฮ้ย! หนังสือเล่มนี้มันเขียนมาให้เราอ่านแน่ๆ 555 ก็ไม่ลังเลรีบคว้าไปจ่…',
            },
          },
        ],
      },
      mediumBlogs: {
        nodes: [
          {
            id: 'f2fda113-515f-5438-9276-74a7c67cd2dc',
            date: 'a month ago',
            title: 'สิ่งที่ได้เรียนรู้จากการใช้ Snapshot Testing ใน Jest',
            link:
              'https://medium.com/@aofleejay/%E0%B8%AA%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89-snapshot-testing-%E0%B9%83%E0%B8%99-jest-865eb3cfe9e8?source=rss-c43e114f9da2------2',
          },
          {
            id: '2c66b8bf-436b-5d78-ad9e-affdf4c22e0b',
            date: '4 months ago',
            title: 'จัดระเบียบโค้ดให้สวยงามด้วย Prettier',
            link:
              'https://medium.com/@aofleejay/%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B9%82%E0%B8%84%E0%B9%89%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%A1%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-prettier-179888b55f1e?source=rss-c43e114f9da2------2',
          },
          {
            id: '753dc660-c782-50f2-a8da-390943239386',
            date: '4 months ago',
            title: 'ทำเทมเพลตให้กับ Issue/Merge Request ใน GitLab กันหน่อย',
            link:
              'https://medium.com/@aofleejay/%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%97%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%95%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%81%E0%B8%B1%E0%B8%9A-issue-merge-request-%E0%B9%83%E0%B8%99-gitlab-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%AD%E0%B8%A2-c98b8642630d?source=rss-c43e114f9da2------2',
          },
          {
            id: '2aad59ac-e2cf-5a25-bf3e-c8e3dc083927',
            date: '4 months ago',
            title: 'เพิ่มความมุ้งมิ้งให้ Commit Message ด้วย Gitmoji กันโหน่ย',
            link:
              'https://medium.com/@aofleejay/%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A1%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B8%A1%E0%B8%B4%E0%B9%89%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B9%89-commit-message-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-gitmoji-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%82%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%A2-c2efa70a2def?source=rss-c43e114f9da2------2',
          },
          {
            id: '048fea16-a457-598c-8bea-b18ce32a6671',
            date: '5 months ago',
            title: 'มาลอง Data Driven Testing ใน Jest กันหน่อย',
            link:
              'https://medium.com/@aofleejay/%E0%B8%A1%E0%B8%B2%E0%B8%A5%E0%B8%AD%E0%B8%87-data-driven-testing-%E0%B9%83%E0%B8%99-jest-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%AD%E0%B8%A2-54d6e4f6f30a?source=rss-c43e114f9da2------2',
          },
          {
            id: '3ad6d8c2-de03-5eb0-9ab5-fc22246db8f5',
            date: '8 months ago',
            title: 'ลด Query ซ้ำ ด้วย GraphQL Fragment',
            link:
              'https://medium.com/@aofleejay/%E0%B8%A5%E0%B8%94-query-%E0%B8%8B%E0%B9%89%E0%B8%B3-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-graphql-fragment-fcebe10be640?source=rss-c43e114f9da2------2',
          },
          {
            id: '0b7a03c3-2449-5c8a-9124-ab5c914cf0eb',
            date: '8 months ago',
            title: 'งานที่มองไม่เห็น',
            link:
              'https://medium.com/@aofleejay/%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99-7924538f2e6b?source=rss-c43e114f9da2------2',
          },
          {
            id: '68607d0a-9583-59a0-b24c-8bb0eb20e6e2',
            date: '9 months ago',
            title:
              'บันทึกการใช้งาน iOS Universal Links และ Android App Links บน React Native',
            link:
              'https://medium.com/@aofleejay/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99-ios-universal-links-%E0%B9%81%E0%B8%A5%E0%B8%B0-android-app-links-%E0%B8%9A%E0%B8%99-react-native-b867ca254bdb?source=rss-c43e114f9da2------2',
          },
          {
            id: '82a3cd6b-f50c-58cd-9db9-6ec84296fb8d',
            date: 'a year ago',
            title: 'บันทึกการใช้งาน Automatic Persisted Queries',
            link:
              'https://engineering.thinknet.co.th/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99-automatic-persisted-queries-14caa741c2f0?source=rss-c43e114f9da2------2',
          },
          {
            id: '61761b9e-b4a3-51fd-83f6-af7c2fcefa20',
            date: 'a year ago',
            title: 'บันทึกการใช้งาน Apollo Engine',
            link:
              'https://engineering.thinknet.co.th/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99-apollo-engine-c097c8ee9073?source=rss-c43e114f9da2------2',
          },
        ],
      },
      site: {
        siteMetadata: {
          social: {
            medium: 'https://medium.com/@aofleejay/latest',
          },
        },
      },
    },
  }

  const { queryByText } = render(<Index {...props} />)

  expect(
    queryByText('สิ่งที่ได้เรียนรู้จากการใช้ Snapshot Testing ใน Jest'),
  ).toBeDefined()
  expect(queryByText("Books I've read.")).toBeDefined()
})
