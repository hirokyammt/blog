import Link from 'next/link'
import CoverImage from '../components/cover-image'
import ReadMore from '../components/read-more'
import Hashtags from '../components/hashtags'

export default function RelatedPosts({ posts }) {
  return (
    <section>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8">
        Related Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-20 mb-32">
        {posts.map((post) => (
          <div className="rounded border border-accent-2">
            <div className="duration-200 hover:opacity-80 mb-4">
              <CoverImage
                slug={post.slug}
                title={post.title}
                src={post.coverImage}
                height={315}
                width={600}
            />
            </div>
            <div className="p-4">
              <h3 className="text-3xl leading-snug mb-3">
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                  <a className="hover:underline">{post.title}</a>
                </Link>
              </h3>
              <p className="text-lg leading-relaxed mb-4">{`${post.excerpt.substr(0, 140)}...`}</p>
              <Hashtags tags={post.tags} />
              <ReadMore slug={post.slug} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
