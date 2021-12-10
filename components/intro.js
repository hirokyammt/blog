import { FaSearch } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className="lg:px-12 flex items-center justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
        Hiroom.
      </h1>
      <div className="text-left text-xl md:text-3xl">
        <FaSearch />
      </div>
    </section>
  )
}
