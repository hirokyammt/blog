import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../components/container'
import CategorizedPosts from '../../components/categorized-posts'
import Header from '../../components/header'
import PostTitle from '../../components/post-title'
import Layout from '../../components/layout'
import { getCategorizedPosts, getAllTags } from '../../lib/api'
import { HOME_DESCRIPTION, HOME_URL, SITE_NAME, HOME_IMAGE_URL } from '../../lib/constants'

export default function Category({ tag, posts, preview }) {
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
                  Categorized by {tag.replace('-', ' ')} | {SITE_NAME}
                </title>
                <meta name="description" content={HOME_DESCRIPTION} />
                <meta property="og:url" content={`${HOME_URL}/categories/${tag}`} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Categorized by ${tag.replace('-', ' ')} | ${SITE_NAME}`} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:description" content={HOME_DESCRIPTION} />
                <meta property="og:image" content={`${HOME_URL}${HOME_IMAGE_URL}`} />
              </Head>
              {posts && (
                <CategorizedPosts tag={tag} posts={posts} />
              )}
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const posts = getCategorizedPosts(params.tag, [
    'title',
    'date',
    'slug',
    'tags',
    'coverImage',
    'excerpt',
  ])
  const tag = params.tag

  return {
    props: {
      posts,
      tag
    },
  }
}

export async function getStaticPaths() {
  const tags = getAllTags(['tags'])

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag
        },
      }
    }),
    fallback: false,
  }
}
