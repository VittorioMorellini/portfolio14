"use client"
import { Box } from '@mui/material'
import Image from 'next/image'
import { Container } from '../components/container'
//import { server } from '../config/config'
import ImageLoader from '../utils/imageLoader'
import Link from 'next/link'

function Home() {
  
  return (
    <div>
      <Container size="2xl">
        <Box className='grid gap-10 md:grid-cols-2'>
          <div className="flex w-full h-full text-center justify-center">
              {/* h-56 md:h-[500px] */}
              <Image
                loader={ImageLoader}
                unoptimized
                src={"/images/vittorio.png"}
                alt="Vittorio Morellini"
                width="300"
                height="300"
              />
          </div>
          <div className="h-full w-full md:m-0">
              <div className="bg-cyan-200">
                <h1 className="font-black text-2xl md:text-5xl">
                  Software engineer at{" "}
                  <Link
                    href="https://sixtema.it"
                    className="underline hover:text-sky-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sixtema
                  </Link>
                  <br />(Modena, Italy)
                </h1>
                <h2 className="text-xl md:text-3xl mt-2">
                  Software Developer dotnet (C#) and React.js (typescript)
                </h2>
              </div>
          </div>
        </Box>
      </Container>
      <Container size="xl">
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 mt-0 md:mt-12">
            <p>
              <br/>
              <b style={{fontSize: '16px'}}>Who am I?</b><br/>
              I have never been a nerd.<br />
              I am not so young, unfortunately<br />
              I am a software engineer and I love web development.<br />
              I am a full stack developer because I don&apos;t want to leave nor backend neither frontend<br />
              I have worked as a software engineer for more than
              twenty years in product and consultancy companies.<br />
              A technical director told me that I am still mid level on the web, 
              but I have the ambition and the determination to become a <b>Senior SDE</b> on the Web<br />
              <br />
              I started before the new millenium working as a developer in visual basic 6.
              But I have always felt the desire to develop on the Web.<br />
              If on the backend I&apos;ve always been certain to select .Net ecosystem,
              for the front end, after a road on more companies, I am convinced to develop 
              in javascript with the best frameworks that are available:
              React, Angular, Vue...<br />
              I am a React developer since october 2020, every day I work to improve in the front end enviroment  
              <br />
              <br />
              I am currently working as a <b>Senior Software Engineer</b> at{" "}
              <b>Sixtema</b> in two main ecosystem: <br/>
              React.js on Frontend<br />
              dotnet (C#) on Backend <br />
              <br />
            </p>
            <div className="relative w-full h-76 md:h-full text-center">
              <Image
                loader={ImageLoader}
                unoptimized
                src={"/images/Coding.jpg"}
                alt="Coding is our life"
                width={500}
                height={300}                
                />
            </div>
          </div>
      </Container>  
    </div>
  )
}

//Dynamic load categories does not work in component, only in page so I have to load from outside
//Cannot use this function in component
// export async function getServerSideProps (context: any) {
//   console.log('Sono in server sides category')

//   const res = await fetch(server +'/api/category')
//   console.log('Res recuperate server sides category', res)
//   const results: Category[] = await res.json();
  
//   return {
//     props: {
//       categories: results
//     }
//   }
// }

export default Home
