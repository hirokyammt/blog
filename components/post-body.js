import DateFormatter from '../components/date-formatter'
import markdownStyles from '../components/markdown-styles.module.css'

export default function PostBody({ date, content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <DateFormatter dateString={date} />
      </div>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
