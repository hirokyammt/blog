import Link from 'next/link'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function SocialMedia() {
  return (
    <>
      <Link href="https://twitter.com/hirokyammt">
        <a target="_blank" className="hover:opacity-80 mx-4">
          <FaTwitter title={'Twitter'} />
        </a>
      </Link>
      <Link href="https://instagram.com/hirokyammt">
        <a target="_blank" className="hover:opacity-80 mx-4">
          <FaInstagram title={'Instagram'} />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/hirokyammt">
        <a target="_blank" className="hover:opacity-80 mx-4">
          <FaLinkedin title={'LinkedIn'} />
        </a>
      </Link>
    </>
  )
}
