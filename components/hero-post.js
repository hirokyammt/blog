import Link from 'next/link'
import CoverImage from '../components/cover-image'
import DateFormatter from '../components/date-formatter'
import ReadMore from '../components/read-more'
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
    <section className="rounded border md:border-0 border-accent-2 lg:mx-12 mb-20 md:mb-28">
      <div className="duration-200 hover:opacity-80 mb-4 md:mb-8">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={630}
          width={1200}
        />
      </div>
      <div className="p-4 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h2 className="text-4xl lg:text-6xl leading-tight mb-4">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h2>
          <div className="text-lg mb-4 md:mb-0">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Hashtags tags={tags} />
          <ReadMore slug={slug} />
        </div>
      </div>
    </section>
  )
}
