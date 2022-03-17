import Link from 'next/link'
import Container from '../components/container'
import SocialMedia from '../components/social-media'
import { SITE_NAME } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col items-center justify-center">
          <div className="text-4xl font-bold tracking-tighter leading-tight text-center mb-10">
            <Link href="/">
              <a className="hover:opacity-80">{SITE_NAME}</a>
            </Link>
          </div>
          <div className="text-4xl flex justify-center duration-200 mb-10">
            <SocialMedia />
          </div>
          <Link href="https://github.com/hirokyammt/blog">
            <a className="flex justify-center hover:underline mb-4">
              View on GitHub
            </a>
          </Link>
          <Link href="/about">
            <a className="flex justify-center hover:underline">
              About me
            </a>
          </Link>
        </div>
        <div className="py-2 text-sm flex justify-center">
          &copy; 2022 Hiroki Yamamoto
        </div>
      </Container>
    </footer>
  )
}
