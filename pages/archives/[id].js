import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../components/container'
import Pager from '../../components/pager'
import Header from '../../components/header'
import PostTitle from '../../components/post-title'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import { HOME_DESCRIPTION, HOME_URL, SITE_NAME, HOME_IMAGE_URL } from '../../lib/constants'

const COUNT_PER_PAGE = 6

export default function Archive({ id, posts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !posts) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  Archive {id} of posts | {SITE_NAME}
                </title>
                <meta name="description" content={HOME_DESCRIPTION} />
                <meta property="og:url" content={`${HOME_URL}/archives/${id}`} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Archive ${id} of posts | ${SITE_NAME}`} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:description" content={HOME_DESCRIPTION} />
                <meta property="og:image" content={`${HOME_URL}${HOME_IMAGE_URL}`} />
              </Head>
              {posts && (
                <Pager id={id} posts={posts} />
              )}
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const id = params.id
  const end = COUNT_PER_PAGE * id
  const start = end - COUNT_PER_PAGE
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
    'coverImage',
    'excerpt',
  ]).slice(start, end)

  return {
    props: {
      id,
      posts
    },
  }
}

export async function getStaticPaths() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
    'coverImage',
    'excerpt',
  ])
  const ids = Array.from({
    length: Math.ceil(allPosts.length / COUNT_PER_PAGE)
  }, (_, i) => i + 1)
  
  return {
    paths: ids.map((id) => {
      return {
        params: {
          id: `${id}`
        },
      }
    }),
    fallback: false,
  }
}
