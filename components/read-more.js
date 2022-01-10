import Link from 'next/link'

export default function ReadMore({ slug }) {
  return (
    <div className="mb-4">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="text-lg hover:underline">
          Read more &raquo;
        </a>
      </Link>
    </div>
  )
}
