import Link from 'next/link'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Container from '../components/container'
import { SITE_NAME } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col lg:pl-12 lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10">
              <Link href="/">
                <a className="hover:opacity-80">{SITE_NAME}</a>
              </Link>
            </h3>
            <div className="text-4xl flex justify-center lg:justify-start duration-200 mb-10 lg:mb-0">
              <Link href="https://twitter.com/hirokyammt">
                <a className="mx-4 hover:opacity-80">
                  <FaTwitter />
                </a>
              </Link>
              <Link href="https://instagram.com/hirokyammt">
                <a className="mx-4 hover:opacity-80">
                  <FaInstagram />
                </a>
              </Link>
              <Link href="https://linkedin.com/in/hirokyammt">
                <a className="mx-4 hover:opacity-80">
                  <FaLinkedin />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:pl-8 lg:w-1/2">
            <Link href="https://github.com/hirokyammt/blog">
              <a className="flex justify-center hover:underline mb-4">
                View on GitHub
              </a>
            </Link>
            <Link href="/about">
              <a className="flex justify-center hover:underline mb-4">
                About me
              </a>
            </Link>
          </div>
        </div>
        <div className="py-2 text-sm flex justify-center">
          &copy; 2021 Hiroki Yamamoto
        </div>
      </Container>
    </footer>
  )
}
