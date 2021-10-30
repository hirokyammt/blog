import { FaLink } from 'react-icons/fa'
import copyToClipboard from '../lib/copyToClipboard'
import { HOME_URL } from '../lib/constants'

export default function CopyLink({ slug }) {
  return (
      <buttun onClick={() => copyToClipboard(`${HOME_URL}/posts/${slug}`)}>
        <div className="p-4 flex justify-center items-center rounded-lg border border-accent-2 hover:opacity-80 my-8">
          <FaLink />
          Copy the URL to share this article!
        </div>
      </buttun>
  )
}
