import Link from 'next/link'
import CoverImage from '../components/cover-image'
import DateFormatter from '../components/date-formatter'
import Hashtags from '../components/hashtags'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  tags,
  slug,
}) {
  return (
    <section className="lg:px-12 mb-20 md:mb-28">
      <div className="duration-200 hover:opacity-80 mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={630}
          width={1200}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h2 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h2>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Hashtags tags={tags} />
        </div>
      </div>
    </section>
  )
}
