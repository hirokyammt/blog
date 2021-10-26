import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../components/container'
import CategorizedStories from '../../components/categorized-stories'
import Header from '../../components/header'
import PostTitle from '../../components/post-title'
import Layout from '../../components/layout'
import { getCategorizedPosts, getAllTags } from '../../lib/api'
import { HOME_DESCRIPTION, HOME_URL, SITE_NAME, HOME_IMAGE_URL } from '../../lib/constants'

export default function Category({ posts, category }) {
  const router = useRouter()
  if (!router.isFallback && !posts) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  Categorized stories by {category.replace('-', ' ')} | Hiroom.Blog
                </title>
                <meta name="description" content={HOME_DESCRIPTION} />
                <meta property="og:url" content={`${HOME_URL}/categories/${category}`} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Categorized stories by ${category.replace('-', ' ')} | ${SITE_NAME}`} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:description" content={HOME_DESCRIPTION} />
                <meta property="og:image" content={`${HOME_URL}${HOME_IMAGE_URL}`} />
              </Head>
              {posts && (
                <CategorizedStories posts={posts} category={category} />
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
    'coverImage',
    'excerpt',
    'tags',
  ])
  const category = params.tag

  return {
    props: {
      posts,
      category
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
