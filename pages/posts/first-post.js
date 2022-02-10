import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'
import React from 'react';
import Sound from 'react-sound'

export default function FirstPost() {
    return (<>

 
    <Head>
        <title>yalla</title>
    
    </Head>
    <Sound url="music.mp3" playStatus={Sound.status.PLAYING}/>
    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

        <p>test</p>
     
        </>
    )}
  