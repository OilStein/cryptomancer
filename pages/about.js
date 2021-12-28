import Head from 'next/head'

const About = () => {
  return (
    <div>
      <Head>
        <title>Cryptomancer - About</title>
        <meta name="about" content="Vincit Rising Star Application About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Used technologies:
      </h1>
      <ul>
        <li>
          Next.js - <a>https://nextjs.org/</a>
        </li>
      </ul>
    </div>
  )
}

export default About