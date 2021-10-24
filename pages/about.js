import { useRouter } from 'next/router'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import CoverImage from '../components/cover-image'
import Layout from '../components/layout'
import { HOME_DESCRIPTION, HOME_URL, SITE_NAME, HOME_IMAGE_URL } from '../lib/constants'

export default function AboutMe({ preview }) {
  const router = useRouter()
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <>
          <article className="mb-32">
            <Head>
              <title>
                About me | Hiroom.
              </title>
              <meta name="description" content={HOME_DESCRIPTION} />
              <meta property="og:url" content={`${HOME_URL}/about`} />
              <meta property="og:type" content="article" />
              <meta property="og:title" content="About me | Hiroom." />
              <meta property="og:site_name" content={SITE_NAME} />
              <meta property="og:description" content={HOME_DESCRIPTION} />
              <meta property="og:image" content={HOME_IMAGE_URL} />               
            </Head>
            <div className="max-w-2xl text-lg leading-relaxed mx-auto">
              <CoverImage title="About me" src={HOME_IMAGE_URL} height={630} width={1200} />
              <h1 className="text-2xl font-bold mt-12 mb-8">About me</h1>
              <p>
                Hi there! My name is Hiroki.
                I am a product manager at the largest e-commerce company in Japan.
                I have an ability of software development as well as
                am getting better in marketing and design fields through working with cross-functional teams.
                I am currently working on product management, project management and sometimes data science.
                I would like to be a super product manager in the near future:)
              </p>
              <p>
                You can contact me on Twitter {''}
                <a
                  href="https://twitter.com/hirokyammt"
                  className="font-bold hover:underline"
                >
                  @hirokyammt
                </a>
                .
              </p>
            </div>
          </article>
        </>
      </Container>
    </Layout>
  )
}
