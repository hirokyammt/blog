import Head from 'next/head'
import { FaChevronDown } from 'react-icons/fa'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import SocialMedia from '../components/social-media'
import CoverImage from '../components/cover-image'
import BackToHome from '../components/back-to-home'
import { HOME_URL, SITE_NAME, HOME_IMAGE_URL, ABOUT_DESCRIPTION } from '../lib/constants'

export default function AboutMe({ preview }) {
  return (
    <Layout preview={preview}>   
      <article className="mb-32">
        <Head>
          <title>
            About me | {SITE_NAME}
          </title>
          <meta name="description" content={ABOUT_DESCRIPTION} />
          <meta property="og:url" content={`${HOME_URL}/about`} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={`About me | ${SITE_NAME}`} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:description" content={ABOUT_DESCRIPTION} />
          <meta property="og:image" content={HOME_IMAGE_URL} />               
        </Head>
        <div className="h-screen flex items-center justify-center bg-gradient-to-t from-accent-1 border-b border-accent-2">
          <section className="px-5">
            <Header />
            <div className="lg:px-12 text-lg md:text-xl">
              <p>Hello! I am Hiroki,</p>
              <p className="py-2 text-3xl md:text-4xl font-bold">Product Manager</p>
              <p>focusing on software engineering and data science.</p>
              <p className="pt-2">Please have a seat and scroll down.</p>
              <div className="py-20 text-4xl flex duration-200">
                <SocialMedia />
              </div>
              <FaChevronDown title={'Scroll Down'} className="animate-bounce" />
            </div>
          </section>
        </div>
        <Container>
          <div className="max-w-2xl text-lg leading-relaxed mx-auto">  
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-none mt-12 mb-8">
              About me
            </h1>
            <div>
              I am a product manager in the Internet industry based in Japan.
              I am currently working at a tech start-up company with many ex-big-tech colleagues to energize people's lives with data.
              I am in charge of developing a data platform based on machine learning engines to provide data solutions with clients.
              My background is computational science.
              I had developed optimization algorithms and machine learning algorithms for mechanical problems.
              I received the grand prize for my master's thesis by estimating brain injuries using data assimilation and deep learning.
              When I was a master's student, I developed and evaluated charging controllers for electric vehicle fleet as a research intern in Germany.
              I think the experience, living and working in the culturally different environment with people from various countries, developed the necessary competencies to excel in the global arena.
              As a result, I was assigned as a product manager to an international team at the leargest e-commerce company in Japan right after graduation.
            </div>
            <div>
              I love learning many things.
              It helps me work on product management with cross-functional teams even though I still have less experience.
              I am willing to moving exciting places over the world.
              Please feel free to reach out to me on social medias.
            </div>
            <div className="my-8">
              <CoverImage
                title={"About me"}
                src={HOME_IMAGE_URL}
                height={630}
                width={1200}
              />
            </div>
            <div>
              This is a personal blog that stores my experience or thoughts about mainly work.
              I have developed the website itself with Next.js, Tailwind CSS and Markdown.
              If you are interested in the source code, you can find the Github link below.
            </div>
            <BackToHome />
          </div>
        </Container>
      </article>  
    </Layout>
  )
}
