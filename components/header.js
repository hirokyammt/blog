import Link from 'next/link'

export default function Header() {
  return (
    <section className="lg:px-12 mb-20 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">Hiroom</a>
        </Link>
        .
      </h2>
    </section>
  )
}
