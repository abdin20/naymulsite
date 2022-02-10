import Head from 'next/head'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from "next/image"
import musicBot from "../public/music_bot.jpg"
import monkeyGamePic from "../public/game.jpg"
import weProsperPic from "../public/weprosper.png"


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <>
      <div className="space-y-14 lg:space-y-24 dark:text-white">
        <Head>
          <title>Naymul Mohammed</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* 
          <h1 className="mb-10 mt-2 font-bold text-gray-900 lg:text-3xl dark:text-white">
           <a href="https://github.com/abdin20/JumboBot"><u>Discord Music Bot</u></a>
          </h1>
          <Image
            src={musicBot}
            alt="Profile"
            priority={true}
            className="my-10 rounded-full"
            width={210}
            height={200}
          />
    */}




        <main className="max-w-4xl mx-auto mt-16 antialiased">
        </main>
      </div>

      <div>

      <Grid container spacing={3} justifyContent="center">
          <Grid item xs={2}>
            <h1 className="mb-4 font-bold text-gray-900 lg:text-3xl dark:text-white">
              <a href="https://devpost.com/software/weprosper"><u>WeProsper</u></a>
            </h1>
            <Image
              src={weProsperPic}
              alt="Profile"
              priority={true}
              
              width={300}
              height={100}
            />
            
          </Grid>
          <Grid item xs={2} sm={3}>
          <Box py={7}>
            <p className="text-gray-800 dark:text-white">WeProsper provides a login system which allows users to verify their income by uploading a PDF of their notice of assessment from the CRA and then access services specifically for them. App is built using ReactJS, Auth0, UI Path Automation and MongoDB. </p>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={2}>
            <h1 className="mb-4 font-bold text-gray-900 lg:text-3xl dark:text-white">
              <a href="https://github.com/abdin20/CrazyBall"><u>Super Monkey Ball Clone</u></a>
            </h1>
            <Image
              src={monkeyGamePic}
              alt="Profile"
              priority={true}
              className="rounded-full"
              width={210}
              height={200}
            />
            
          </Grid>
          <Grid item xs={1} sm={3}>
          <Box py={14}>
            <p className="text-gray-800 dark:text-white">A clone of the popular game Super Monkey Ball. The game is written in C# in unity. Features include unlockable skins, abilities such as a magnet and invulnerability, moving floors, shooting projectiles and more!</p>
            </Box>
          </Grid>
        </Grid>


        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={2}>
            <h1 className="mb-4 font-bold text-gray-900 lg:text-3xl dark:text-white">
              <a href="https://github.com/abdin20/JumboBot"><u>Discord Music Bot</u></a>
            </h1>
            <Image
              src={musicBot}
              alt="Profile"
              priority={true}
              className="rounded-full"
              width={210}
              height={200}
            />
          </Grid>
          <Grid item xs={1} sm={3}>
          <Box py={10}>
            <p className="text-gray-800 dark:text-white">A discord bot built with DiscordJS. Users can request to play any youtube video and the bot will join to play. All queue data is stored using MongoDB. Users can also request image searches which is done by using Microsoft Azure Services </p>
          </Box>
          </Grid>
        </Grid>

      </div>
    </>
  )
}
