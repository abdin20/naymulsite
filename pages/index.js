import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import React from 'react';
import Sound from 'react-sound'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        

      
      </Head>
      <section className={utilStyles.headingMd}>
    
     
      {/* <Sound url="music.mp3" playStatus={Sound.status.PLAYING}/> */}
        <p >im a code monkey ooh ooh aa aa</p>
        <a href="https://github.com/abdin20">Check out my Github</a>

 
      </section>
      <section>
        <br></br>
        <br></br>
        <Link href='https://www.bet365.com/'>
        
        <a>
        <Image
          priority
          src="/images/gambling.png"
          // className={utilStyles.borderCircle}
          height={900}
          width={1400}

        />
        </a>
        </Link> 

        <iframe src="https://www.youtube.com/embed/RAl_rc0GYO8?autoplay=1" allow='autoplay'></iframe>
        

      </section>
    </Layout>
  )
}
