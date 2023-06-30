// Client Side Component
'use client'
/**
Renders a container component with a title, subtitle and a call to actions with buttons.
@returns {JSX.Element} The rendered container component.
*/

export function Container({children,
    display,
    width,
    height,
    title,}) {
        return (
            <div id="container" className={`
                ${display}
                bg-white
                m-auto
                ${width}
                ${height}
                border-black
                border-2
                rounded-sm
                shadow-brutal-x
            `}>
             <div id="container-topbar" className="
                flex
                items-center 
                w-100
                border-black
                border-b-2
                bg-brutal-blue
                text-white
            ">
            <h1 className="font-bold pl-3">{title}</h1>
            <span className="ml-auto font-bold pr-3 text-[22px] leading-none pb-1">x</span>
            </div>
            
            <div id="container-content" className="text-center py-10 lg:px-20 px-2 m-auto">
                {children}
            </div>
              
            </div>
          )
}
  