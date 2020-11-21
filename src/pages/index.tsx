import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '../components/footer'
import Layout from '../components/layout'
import Body from '../components/body'
import blogStyles from '../styles/blog.module.css'
import sharedStyles from '../styles/shared.module.css'
import Head from 'next/head'
import PacmanLoader from 'react-spinners/PacmanLoader'

import styles from '../styles/header.module.css'

import { Container, Div, Text } from 'atomize'

import { getBlogLink, getDateStr, postIsPublished } from '../lib/blog-helpers'
import { textBlock } from '../lib/notion/renderers'
import getNotionUsers from '../lib/notion/getNotionUsers'
import getBlogIndex from '../lib/notion/getBlogIndex'

const override = `
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
`

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    unstable_revalidate: 10,
  }
}

const Index = ({ posts = [], preview }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      {loading === false ? (
        <Layout>
          <header className={styles.header}>
            <Head>
              <title>TNQV Blog</title>
              <meta
                name="description"
                content="An Next.js site using Notion for the blog"
              />
              <meta name="og:title" content="TNQV Blog" />
              <meta name="twitter:site" content="@tnqvsys" />
              <meta name="twitter:card" content="summary_large_image" />
            </Head>
          </header>
          <Body></Body>
          <Container>
            {preview && (
              <Div className={blogStyles.previewAlertContainer}>
                <Div className={blogStyles.previewAlert}>
                  <b>Note:</b>
                  {` `}Viewing in preview mode{' '}
                  <Link href={`/api/clear-preview`}>
                    <button className={blogStyles.escapePreview}>
                      Exit Preview
                    </button>
                  </Link>
                </Div>
              </Div>
            )}
            <Div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
              {posts.length === 0 && (
                <p className={blogStyles.noPosts}>There are no posts yet</p>
              )}
              {posts.map(post => {
                return (
                  <Div className={blogStyles.postPreview} key={post.Slug}>
                    <Text tag="section" textSize="display1" textWeight="500">
                      <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                        <Div className={blogStyles.titleContainer}>
                          {!post.Published && (
                            <span className={blogStyles.draftBadge}>Draft</span>
                          )}
                          <a>{post.Page}</a>
                        </Div>
                      </Link>
                    </Text>
                    {post.Authors.length > 0 && (
                      <Text
                        tag="section"
                        textSize="title"
                        textWeight="300"
                        className="authors"
                      >
                        By: {post.Authors.join(' ')}
                      </Text>
                    )}
                    {post.Date && (
                      <Text
                        tag="section"
                        textSize="title"
                        textWeight="300"
                        className="posted"
                      >
                        Posted: {getDateStr(post.Date)}
                      </Text>
                    )}
                    <Text
                      textSize="paragraph"
                      textWeight="300"
                      textColor="black300"
                      m={{ b: '2rem' }}
                    >
                      {(!post.preview || post.preview.length === 0) &&
                        'No preview available'}
                      {(post.preview || []).map((block, idx) =>
                        textBlock(block, true, `${post.Slug}${idx}`)
                      )}
                    </Text>
                  </Div>
                )
              })}
            </Div>
          </Container>
          <Footer />
        </Layout>
      ) : (
        <PacmanLoader
          size={'50px'}
          css={override}
          color={'#5a5a5a'}
          loading={true}
        />
      )}
    </>
  )
}

export default Index
