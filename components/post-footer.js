import BackToHome from '../components/back-to-home'
import Hashtags from '../components/hashtags'
import CopyLink from '../components/copy-link'

export default function PostFooter({ tags, slug }) {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <Hashtags tags={tags} />
      <CopyLink slug={slug} />
      <BackToHome />
    </div>
  )
}
