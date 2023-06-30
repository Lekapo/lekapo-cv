/**
Renders a hero component with a title, subtitle and a call to actions with buttons.
@returns {JSX.Element} The rendered hero component.
*/


export const Hero = () => {
  return (
    <div id="hero" className="
        w-4/5
        mx-auto 
        my-10
        lg:my-20
        min-h-[50vh]
        border-black
        border-2
        rounded-sm
        shadow-brutal-x
    ">
     <div id="hero-topbar" className="
        flex
        items-center 
        w-100
        border-black
        border-b-2
        bg-black
        text-white
    ">
    <h1 className="font-bold pl-3">Web Developer</h1>
    <span className="ml-auto font-bold pr-3 text-[20px]">x</span>
    </div>
    
    <div id="hero-content" className="text-center py-10 lg:px-20 px-2">
        <h2 className="uppercase text-5xl mt-7 ">RONALDO ROSA JUNIOR</h2>
        <h3 className="text-sm italic mt-1">Web Developer Full Stack - HTML/CSS - Javascript - ReactJS - React Native - NodeJS</h3>
        <p className="mt-10 text-2xl">Especializado em desenvolvimento web e móvel com anos de experiência criando websites e aplicações em diversas tecnologias.</p>
        <div id="hero-buttons" className="flex justify-center mt-10">
            <button className="text-black bg-black">
                <div className="button-bg bg-white"></div>
                <span className="text">Currículo</span>
            </button>
            <button className="text-white bg-black ml-5">
                <div className="button-bg bg-brutal-blue"></div>
                <span className="text">Contato</span>
            </button>
        </div>
    </div>
      
    </div>
  )
}