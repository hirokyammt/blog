import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import SocialMedia from '../components/social-media'
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
        <div className="h-screen flex bg-accent-1 border-b border-accent-2">
          <Container>
            <Header />
            <section className="lg:px-12">  
              <div className="pt-8 text-lg absolute z-10">
                <p>Hello! I am Hiroki,</p>
                <p className="py-2 text-3xl font-bold">Product Manager</p>
                <p>focus on software engineering and data science.</p>
                <p className="py-4">Please have a seat and scroll down.</p>
                <div className="pt-32 text-3xl text-bottom flex duration-200">
                  <SocialMedia />
                </div>
              </div>
              <Image
                src={HOME_IMAGE_URL}
                alt="Cover Image for About me"
                className="brightness-105 opacity-20"
                layout="responsive"              
                width={1200}
                height={630}
              />
            </section>
          </Container>
        </div>
        <div className="max-w-2xl text-lg leading-relaxed mx-auto px-5">  
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-none mt-12 mb-8">
            About me
          </h1>
          <p>
            I am a product manager at the largest e-commerce company in Japan.
            I have an ability of software development as well as am getting better in marketing and design fields through working with cross-functional teams.
            I am currently working on product management, project management and sometimes data science.
          </p>
          <p>
            This is a personal blog that stores my experience as a product manager.
            The website itself is also developed by myself with Next.js and Markdown.
            If you are interested in the source code, you can find the Github link below.
          </p>
          <BackToHome />
        </div>
      </article>  
    </Layout>
  )
}
