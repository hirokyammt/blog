import PostPreview from '../components/post-preview'
import BackToHome from '../components/back-to-home'

export default function CategorizedPosts({ tag, posts }) {
  return (
    <section className="lg:px-12">
      <h1 className="text-5xl md:text-7xl font-bold capitalize tracking-tighter leading-tight mt-16 mb-16 md:mb-12">
        # {tag.replace('-', ' ')}
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
      <BackToHome />
    </section>
  )
}
