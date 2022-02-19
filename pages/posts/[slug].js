import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../components/container'
import Header from '../../components/header'
import PostTitle from '../../components/post-title'
import PostHeader from '../../components/post-header'
import PostBody from '../../components/post-body'
import PostFooter from '../../components/post-footer'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '../../lib/api'
import { HOME_URL, SITE_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

const COUNT_OF_RELATED = 4

export default function Post({ post, relatedPosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
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
                  {post.title}
                </title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:url" content={`${HOME_URL}/posts/${post.slug}`} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.title} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={`${HOME_URL}${post.coverImage}`} />  
              </Head>
              <PostHeader title={post.title} coverImage={post.coverImage} />
              <PostBody date={post.date} content={post.content} />
              <PostFooter tags={post.tags} slug={post.slug} posts={relatedPosts} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'tags',
    'content',
    'coverImage',
    'excerpt',
  ])
  const relatedPosts = getRelatedPosts(COUNT_OF_RELATED, post.title, [
    'title',
    'date',
    'slug',
    'tags',
    'coverImage',
    'excerpt',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      },
      relatedPosts
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        },
      }
    }),
    fallback: false,
  }
}
