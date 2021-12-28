import Head from 'next/head'
import Image from 'next/image'
import Status from '../components/Status'

export default function Home({ping}) {
  return (
    <div>
      <Head>
        <title>Cryptomancer - Home</title>
        <meta name="description" content="Vincit Rising Star Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Status ping={ping} />
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