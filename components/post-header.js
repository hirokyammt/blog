import PostTitle from '../components/post-title'
import CoverImage from '../components/cover-image'
import DateFormatter from '../components/date-formatter'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage
          title={title}
          src={coverImage}
          height={630}
          width={1200}
        />
      </div>
      <div className="max-w-2xl text-lg mx-auto mb-6">
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}
