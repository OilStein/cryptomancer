import Header from './Header'
import Nav from './Nav'
import Head from 'next/head'

const Layout = ({children, title}) => {
  return (
    <div className='bg-grey-300'>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Vincit Rising Star Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    
      <main className='container mx-auto max-w-xl pt-8 min-h-screen'>
        <Nav />
        <Header />
        {children}
      </main>
    </div>
  )
}

export default Layout