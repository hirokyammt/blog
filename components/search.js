import SocialMedia from '../components/social-media'

export default function Search() {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-white z-10">
      <div className="text-4xl flex justify-center duration-200 mt-16">
        <SocialMedia />
      </div>
      <span className="text-xl font-bold grid place-items-center h-screen">
        Sorry. Currently under development:(
      </span>
    </div>
  )
}
