import Hashtags from '../components/hashtags'
import CopyLink from '../components/copy-link'
import SectionSeparator from '../components/section-separator'
import RelatedPosts from '../components/related-posts'
import BackToHome from '../components/back-to-home'

export default function PostFooter({ tags, slug, posts }) {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <Hashtags tags={tags} />
      <CopyLink slug={slug} />
      <SectionSeparator />
      <RelatedPosts posts={posts} />
      <BackToHome />
    </div>
  )
}
