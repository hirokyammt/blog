import Head from 'next/head'
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
        <div className="h-screen flex items-center justify-center bggradient-t from-accent-1 border-b border-accent-2">
          <section className="px-5">
            <Header />
            <div className="lg:px-12 text-lg md:text-xl">
              <p>Hello! I am Hiroki,</p>
              <p className="py-2 text-3xl md:text-4xl font-bold">Product Manager</p>
              <p>focusing on software engineering and data science.</p>
              <p className="py-2">Please have a seat and scroll down.</p>
              <div className="pt-20 text-4xl flex duration-200">
                <SocialMedia />
              </div>
            </div>
          </section>
        </div>
        <Container>
          <div className="max-w-2xl text-lg leading-relaxed mx-auto">  
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-none mt-12 mb-8">
              About me
            </h1>
            <div>
              I am a product manager with 1+ years of experience in the Internet industry based in Tokyo.
              Currently, I am working at the largest e-commerce company in Japan.
            </div>
            <div className="my-8">
              <CoverImage
                title={"cover image"}
                src={HOME_IMAGE_URL}
                height={630}
                width={1200}
              />
            </div>
            <div>
              This is a personal blog that stores my experience or thoughts mainly about work.
              The website itself is also developed by myself with Next.js and Markdown.
              If you are interested in the source code, you can find the Github link below.
            </div>
            <BackToHome />
          </div>
        </Container>
      </article>  
    </Layout>
  )
}
