import { useState } from 'react'
import { MdSearch, MdClose } from 'react-icons/md'
import Search from '../components/search'

export default function Intro() {
  const [open, setOpen] = useState(false);

  return (
    <section className="lg:px-12 flex items-center justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight z-20">
        Hiroom.
      </h1>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl md:text-5xl cursor-pointer hover:opacity-80 z-20"
      >
        {open ? <MdClose /> : <MdSearch />}
      </div>
      {open && <Search />}
    </section>
  )
}
