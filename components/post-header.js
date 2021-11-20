import PostTitle from '../components/post-title'
import CoverImage from '../components/cover-image'

export default function PostHeader({ title, coverImage }) {
  return (
    <section className="lg:px-12 mb-8 md:mb-16 sm:mx-0">
      <PostTitle>{title}</PostTitle>
      <CoverImage
        title={title}
        src={coverImage}
        height={630}
        width={1200}
      />
    </section>
  )
}
