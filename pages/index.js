import Head from 'next/head'
import Image from 'next/image'

export default function Home({ping}) {
  return (
    <div>
      <Head>
        <title>Cryptomancer</title>
        <meta name="description" content="Vincit Rising Star Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Welcome to Cryptomancer</h1>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://api.coingecko.com/api/v3/ping`)
  const ping  = await res.json()

  return {
    props: {
      ping
    }
  }
}
