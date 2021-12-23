import Head from 'next/head'
import Container from '../components/container'
import MorePosts from '../components/more-posts'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import { HOME_URL, SITE_NAME, HOME_IMAGE_URL, HOME_DESCRIPTION } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Hiroom. | hiroomblog.com</title>
          <meta name="description" content={HOME_DESCRIPTION} />
          <meta property="og:url" content={HOME_URL} />
          <meta property="og:type" content="blog" />
          <meta property="og:title" content="Hiroom. | hiroomblog.com" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:description" content={HOME_DESCRIPTION} />
          <meta property="og:image" content={`${HOME_URL}${HOME_IMAGE_URL}`} />
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              excerpt={heroPost.excerpt}
              tags={heroPost.tags}
              slug={heroPost.slug}
            />
          )}
          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
