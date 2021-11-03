import PostPreview from '../components/post-preview'

export default function RelatedPosts({ posts }) {
  return (
    <section>
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
        Related Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            excerpt={`${post.excerpt.substr(0, 100)}...`}
            tags={post.tags}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  )
}
