import copyToClipboard from '../lib/copyToClipboard'
import { HOME_URL } from '../lib/constants'

export default function CopyLink({ slug }) {
  return (
      <div onClick={(event) => copyToClipboard(event, `${HOME_URL}/posts/${slug}`)}>
        <span className="py-4 font-bold tracking-wide flex justify-center rounded-full border border-accent-2 cursor-pointer hover:opacity-80 my-8">
          Copy Link to Share
        </span>
      </div>
  )
}
