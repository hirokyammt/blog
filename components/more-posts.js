import Link from 'next/link'
import PostPreview from '../components/post-preview'

export default function MorePosts({ posts }) {
  return (
    <section className="lg:px-12">
      <div className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
        More Posts
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-24 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            excerpt={post.excerpt}
            tags={post.tags}
            slug={post.slug}
          />
        ))}
      </div>
      <div className="text-right my-32">
        <Link href="/archives/1">
          <a className="text-lg hover:underline">
            View all posts →
          </a>
        </Link>
    </div>
    </section>
  )
}
