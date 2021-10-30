import Link from 'next/link'

export default function Hashtags({ tags }) {
  return (
    <>
      {tags.map((tag) => {
        return (
          <Link as={`/categories/${tag}`} href="/categories/[tag]">
            <a className="px-4 py-1 text-base capitalize inline-block rounded-full border border-accent-2 hover:opacity-80">
              # {tag.replace('-', ' ')}
            </a>
          </Link>
        )
      })}
    </>
  )
}
