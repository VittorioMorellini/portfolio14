import { Container } from './components/container'
import Link from 'next/link'
import Hero from '@/components/client/hero'
import Code from '@/components/client/code'
import Presentation from '@/components/client/presentation'
import PageTransition from '@/components/pageTransition'

function Home() {
  return (
    <PageTransition allowScroll={false}>
    <div>
      <Container size="2xl">
        <div className='grid gap-10 md:grid-cols-2'>
          <Hero />
          <Presentation />
        </div>
      </Container>
      <Container size="xl">
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 mt-0 md:mt-12">
            <p>
              <br/>
              <b style={{fontSize: '16px'}}>Who am I?</b><br/>
                I am a software engineer and I love web development.<br />
                I am not so young, unfortunately, I am a full stack developer because I don&apos;t want to leave nor backend neither frontend<br />
                I have worked as a software engineer for more than
                twenty years in product and consultancy companies.<br />
                I have the determination to be a reference as a <b>Senior SDE</b> on the Web<br />
                <br />
                I started at the beginning of new millenium working as a developer in Visual Basic 6.
                But I have always felt the desire to develop on the Web.<br />
                If on the backend I&apos;ve always been certain to select dotnet ecosystem,
                for the front end, after a road on more companies, I am convinced to develop 
                in javascript with the best frameworks that are available:
                React, Angular, Vue...<br />
                I am a React.js developer since october 2020, every day I work to improve in the front end enviroment  
                <br /><br />
                I am currently working as a <b>Software Engineer</b> at{" "}
                <b>Sixtema</b> in two main ecosystem: <br/>
                React.js & Next.js (Typescript) on Frontend<br />
                dotnet (C#) on Backend <br />
                <br />
            </p>
            <Code />
          </div>
      </Container>  
    </div>
    </PageTransition>  
  )
}

export default Home
