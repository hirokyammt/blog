import Link from 'next/link'
import Container from '../components/container'
import SocialMedia from '../components/social-media'
import { SITE_NAME } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:pl-12 lg:w-1/2 flex flex-col">
            <div className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10">
              <Link href="/">
                <a className="hover:opacity-80">{SITE_NAME}</a>
              </Link>
            </div>
            <div className="text-4xl flex justify-center lg:justify-start duration-200 mb-10 lg:mb-0">
              <SocialMedia />
            </div>
          </div>
          <div className="lg:pl-8 lg:w-1/2 flex flex-col">
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
          &copy; 2022 Hiroki Yamamoto
        </div>
      </Container>
    </footer>
  )
}
