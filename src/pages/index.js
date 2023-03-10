import Head from 'next/head'
// import { Inter } from 'next/font/google'
import Script from 'next/script'
import Homepage from '../../components/Homepage/Homepage'
import NavBar from '../../components/NavBar/NavBar'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Federica Costantino</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/seasvg.svg" />
        
      </Head>
 
      <main >
       
        <NavBar/>
        <Homepage/>
        <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      </main>
      
  
    </>
  )
}
