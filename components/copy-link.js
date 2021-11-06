import { ImLink } from 'react-icons/im'
import copyToClipboard from '../lib/copyToClipboard'
import { HOME_URL } from '../lib/constants'

export default function CopyLink({ slug }) {
  return (
      <div onClick={() => copyToClipboard(`${HOME_URL}/posts/${slug}`)}>
        <span className="py-4 flex justify-center items-center rounded border border-accent-2 cursor-pointer hover:opacity-80 my-8">
          <ImLink size={20} />
          <span className="pl-2 tracking-wide">Click to Copy Link</span>
        </span>
      </div>
  )
}
