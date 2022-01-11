import Link from 'next/link'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import ReadMore from '../components/read-more'
import Hashtags from '../components/hashtags'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  tags,
  slug,
}) {
  return (
    <div className="rounded border border-accent-2">
      <div className="duration-200 hover:opacity-80 mb-4">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={315}
          width={600}
        />
      </div>
      <div className="p-4">
        <h2 className="text-3xl leading-snug mb-3">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h2>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Hashtags tags={tags} />
        <ReadMore slug={slug} />
      </div>
    </div>
  )
}
