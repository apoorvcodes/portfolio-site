import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Connect from '../components/Connect'
import Footer from '../components/Footer'
const Home: NextPage = () => {
  return (
    <div className='text-white'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
         <Navbar/>
         <Hero/>
         <Projects/>
         <About/>
         <Connect/>
         <Footer/>
       </div>
  )
}

export default Home
