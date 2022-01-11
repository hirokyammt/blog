import Link from 'next/link'

export default function ReadMore({ slug }) {
  return (
    <div className="p-4 text-right">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="text-base hover:underline">
          Read more &raquo;
        </a>
      </Link>
    </div>
  )
}
