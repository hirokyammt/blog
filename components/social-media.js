import Link from 'next/link'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function SocialMedia() {
  return (
    <>
      <Link target="_blank" href="https://twitter.com/hirokyammt">
        <a className="hover:opacity-80 mx-4">
          <FaTwitter title={'Twitter'} />
        </a>
      </Link>
      <Link target="_blank" href="https://instagram.com/hirokyammt">
        <a className="hover:opacity-80 mx-4">
          <FaInstagram title={'Instagram'} />
        </a>
      </Link>
      <Link target="_blank" href="https://linkedin.com/in/hirokyammt">
        <a className="hover:opacity-80 mx-4">
          <FaLinkedin title={'LinkedIn'} />
        </a>
      </Link>
    </>
  )
}
