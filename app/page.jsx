"use client";

import { Container } from '@/components'
import { VT323 } from 'next/font/google'
import { Button } from '@/components'

const vt323 = VT323({ 
  subsets: ['latin'],
  weight: ['400']
})


export default function Home() {
  return (
    <div>
      <div id='hero' className='container mx-auto my-3 2xl:my-5'>
        <Container 
          height={"min-h-[50vh]"}
          title={"Web Developer"} 
          topBar={true}
        >
          <div className="mt-6 px-3">
            <h2 className={`uppercase xl:text-8xl md:text-7xl text-6xl font-bold ${vt323.className}`}>RONALDO ROSA JUNIOR</h2>
            <h3 className="text-sm italic mt-1">Web Developer Full Stack - HTML/CSS - Javascript - ReactJS - React Native - NodeJS</h3>
            <p className="mt-10 xl:text-3xl text-2xl font-medium">Especializado em desenvolvimento web e móvel com anos de experiência criando websites e aplicações em diversas tecnologias.</p>
            <div id="hero-buttons" className="flex justify-center mt-10 text-2xl gap-x-8">
              
            <Button route='/about' text='About'  className={"bg-white py-2 px-5"}/>
            <Button route='/contact' text='Contact'  className={"text-white bg-royalblue py-2 px-5"}/>
            </div>
          </div>
        </Container>
      </div>
      
      <div id='content' className='container m-auto my-10'>
        <Container 
          height={"min-h-[60vh]"} 
          width={"w-7/8"} 
          title={"Content"} 
          topBar={true}
        >
          <div className="flex">
            <Container height={"min-h-[60vh]"} width={"w-2/6"}>
              content
            </Container>
            <Container height={"min-h-[60vh]"} width={"w-2/6"}>
              content
            </Container>
          </div>
        </Container>
      </div>
    </div>
    
  )
}
