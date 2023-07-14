// Client Side Component
'use client'
/**
Renders a container component with a title, subtitle and a call to actions with buttons.
@returns {JSX.Element} The rendered container component.
*/

import { VT323 } from 'next/font/google'

const vt323 = VT323({ 
  subsets: ['latin'],
  weight: ['400']
})

export function Container({children,
    display,
    width,
    height,
    topBar,
    title,}) {
        return (
            <div id="container" className={`
                ${display}
                bg-light-gray
                m-auto
                ${width}
                ${height}
                border-black
                border-2
                rounded-sm
                shadow-brutal-x
            `}>
                {topBar === true
                    ? 
                        <div id="container-topbar" className="
                        flex
                        items-center 
                        w-100
                        border-black
                        border-b-2
                        bg-royalblue
                        text-black
                        ">
                        <h1 className={`text-base pl-3 ${vt323.className}`}>{title}</h1>
                        <span className="ml-auto font-bold pr-3 text-[22px] leading-none pb-1">x</span>
                        </div>
                    : null
                }
                
            
                <div id="container-content" className="m-auto text-center py-10 lg:px-20 md:px-4 px-1">
                    {children}
                </div>
              
            </div>
          )
}
  