import Link from 'next/link'

export default function Hashtags({ tags }) {
  return (
    <>
      {tags.map((tag) => {
        return (
          <Link key={tag.toString()} href={`/categories/${tag}`}>
            <a className="px-3 py-1 text-base capitalize inline-block rounded bg-accent-1 hover:opacity-80 mr-2 mb-1">
              # {tag.replace('-', ' ')}
            </a>
          </Link>
        )
      })}
    </>
  )
}
