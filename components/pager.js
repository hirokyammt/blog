import Link from 'next/link'
import PostPreview from '../components/post-preview'

export default function Pager({ id, posts, totalIds }) {
  const prev = id > 1 ? id - 1 : null
  const next = id < totalIds ? id + 1 : null
  return (
    <section className="lg:px-12">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mt-16 mb-16 md:mb-12">
        All Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </div>
      <div className="flex justify-between my-16">
        {prev ? (
          <Link as={`/archives/${prev}`} href="/archives/[prev]">
            <a className="text-base hover:underline">
              ← Prev page
            </a>
          </Link>
        ) : ``}
        <span>
          Page {id}
        </span>
        {next ? (
          <Link as={`/archives/${next}`} href="/archives/[next]">
            <a className="text-base hover:underline">
              Next page →
            </a>
          </Link>
        ) : ``}
    </div>
    </section>
  )
}
