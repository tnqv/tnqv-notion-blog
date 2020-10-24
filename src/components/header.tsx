import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

export default ({ titlePre = '' }) => {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    router.back()
  }

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} TNQV Blog</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta name="og:title" content="TNQV Blog" />
        <meta name="twitter:site" content="@tnqvsys" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <a onClick={handleClick}>Back to home</a>
    </header>
  )
}
