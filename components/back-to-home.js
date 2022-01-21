import Link from 'next/link'

export default function BackToHome() {
  return (
    <div className="my-16">
      <Link href="/">
        <a className="text-lg hover:underline">
          ← Back to home
        </a>
      </Link>
    </div>
  )
}
