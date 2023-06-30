import { Container } from '@/components'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div id='hero' className='container m-auto my-10'>
        <Container height={"min-h-[50vh]"} width={"w-7/8"} title={"Web Developer"}>
          <div className="px-20">
            <h2 className="uppercase text-5xl mt-16 ">RONALDO ROSA JUNIOR</h2>
            <h3 className="text-sm italic mt-1">Web Developer Full Stack - HTML/CSS - Javascript - ReactJS - React Native - NodeJS</h3>
            <p className="mt-10 text-2xl">Especializado em desenvolvimento web e móvel com anos de experiência criando websites e aplicações em diversas tecnologias.</p>
            <div id="hero-buttons" className="flex justify-center mt-10">
              <Link href="/about">
                <button className="text-black bg-black">
                  <div className="button-bg bg-white"></div>
                  <span className="text">Currículo</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="text-white bg-black ml-5">
                  <div className="button-bg bg-brutal-blue"></div>
                  <span className="text">Contato</span>
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      
      <div id='content' className='container m-auto my-10'>
        <Container height={"min-h-[60vh]"} width={"w-7/8"} title={"Content"}>
          <div className="flex">
            <Container height={"min-h-[60vh]"} width={"w-2/6"} title={"Content"}>
              content
            </Container>
            <Container height={"min-h-[60vh]"} width={"w-2/6"} title={"Content"}>
              content
            </Container>
          </div>
        </Container>
      </div>
    </>
    
  )
}
