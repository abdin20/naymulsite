import Head from 'next/head';
import { Box } from '@mui/system';
import Image from "next/image";
import weProsperPic from "../public/weprosper.png";

export default function Projects() {
  return (
    <>
      <div className="space-y-14 lg:space-y-24 dark:text-white">
        <Head>
          <title>Naymul Mohammed</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* test */}
        <main className="max-w-4xl mx-auto mt-16 antialiased">
          <section className="flex flex-col items-center space-y-8">
            <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8 md:space-y-0">
              <div className="flex flex-col items-center  space-y-4">
                <h1 className="mb-4 font-bold text-gray-900 lg:text-3xl dark:text-white">
                  <a href="https://devpost.com/software/weprosper"><u>WeProsper</u></a>
                </h1>
                <Image
                  src={weProsperPic}
                  alt="WeProsper"
                  priority={true}
                  width={300}
                  height={100}
                />
                <Box mt={2}>
                  <p className="text-gray-800 dark:text-white">
                    WeProsper provides a login system which allows users to verify their income by uploading a PDF of their notice of assessment from the CRA and then access services specifically for them. App is built using ReactJS, Auth0, UI Path Automation and MongoDB.
                  </p>
                </Box>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8 md:space-y-0">
              <div className="flex flex-col items-center  space-y-4">
                <h1 className="mb-4 font-bold text-gray-900 lg:text-3xl dark:text-white">
                  <a href="https://github.com/abdin20/CrazyBall"><u>Super Monkey Ball Clone</u></a>
                </h1>
                <Image
                  src="/game.jpg"
                  alt="Super Monkey Ball Clone"
                  priority={true}
                  className="rounded-full"
                  width={200}
                  height={200}
                />
                <Box mt={2}>
                  <p className="text-gray-800 dark:text-white">
                    A clone of the popular game Super Monkey Ball. The game is written in C# in Unity. Features include unlockable skins, abilities such as a magnet and invulnerability, moving floors, shooting projectiles and more!
                  </p>
                </Box>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8 md:space-y-0">
              <div className="flex flex-col items-center  space-y-4">
                <h1 className="mb-4 font-bold text-gray-900 lg:text-3xl dark:text-white">
                  <a href="https://github.com/abdin20/JumboBot/tree/Dumbo"><u>Discord Music Bot</u></a>
                </h1>
                <Image
                  src="/music_bot.jpg"
                  alt="Discord Music Bot"
                  priority={true}
                  className="rounded-full"
                  width={200}
                  height={200}
                />
                <Box mt={2}>
                  <p className="text-gray-800 dark:text-white">
                    A discord bot built with DiscordJS. Users can request to play any YouTube video and the bot will join to play. All queue data is stored using MongoDB. Users can also request image searches which is done by using Microsoft Azure Services.
                  </p>
                </Box>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
