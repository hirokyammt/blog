import BackToHome from '../components/back-to-home'
import Hashtags from '../components/hashtags'

export default function PostFooter({ tags }) {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <Hashtags tags={tags} />
      <BackToHome />
    </div>
  )
}
