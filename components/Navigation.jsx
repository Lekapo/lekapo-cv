"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to other pages.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import React, { useState } from "react";
import Link from 'next/link'
import { Button } from '@/components'
import { usePathname } from 'next/navigation';
import { VT323 } from 'next/font/google'

const vt323 = VT323({ 
  subsets: ['latin'],
  weight: ['400']
})


export function Navigation() {
  
  {/* Get the current route */}
  const currentRoute = usePathname();

  const [navActive, setNavActive] = useState(false);
  // const [activeIdx, setActiveIdx] = useState(-1);

  const MENU_LIST = [
    { text: "Home", route: "/" },
    { text: "About", route: "/about" },
    { text: "Contact", route: "/contact" },
  ];

  return (
    <div  className="sticky top-0 border-black z-50 border-b-4 bg-blackcoffe">
      <nav  className="flex container mx-auto">
        <div id='navbrand' className="navbrand p-5">
          <Link href="/">
            <h1 className={`uppercase text-5xl text-spanishyellow ${vt323.className}`}>Lekapo</h1>
          </Link>
        </div>
        <div
          onClick={() => setNavActive(!navActive)}
          id="nav-menu"
          className="md:hidden ml-auto flex"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id='navbar' className={`ml-auto ${navActive ? 'active' : ''} `}>
          <div className="text-xl p-10 nav-menu flex flex-col items-center gap-y-4 md:p-0 md:gap-0 md:flex-row md:gap-x-5">
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setNavActive(false);
              }}
              key={menu.text}
              className="w-full"
            >
              <Button {...menu} 
                className={"bg-khaki py-2 p-5 w-full"} 
                onClick={() => setNavActive(!navActive)}
              />
            </div>
          ))}
          </div>
          
        </div>
      </nav>
      
    </div>
  )
}