"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to other pages.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import Link from 'next/link'
import { usePathname } from 'next/navigation';


export function Navigation() {
  
{/* Get the current route */}
const currentRoute = usePathname();

  return (
    <div  className="sticky top-0 border-black border-b-4 z-50 bg-white">
      <nav  className="container mx-auto flex">
        <div id='navbrand' className="navbrand p-5 m-auto">
          <Link href="/">
            <h1 className='text-2xl font-extrabold uppercase '>Lekapo</h1>
          </Link>
        </div>
        
        <div id='navbar' className="m-auto p-5 flex">
          <Link href="/">
            <button className={`${currentRoute === "/" 
            ? "active" 
            : "non-active-class-name"} 
            text-black bg-black mr-5`}>
              <div className="button-bg bg-white"></div>
              <span className="text">Portfolio</span>
            </button>
          </Link>
          <Link href="/about">
              <button className={`${currentRoute === "/about" 
            ? "active" 
            : "non-active-class-name"} 
            text-black bg-black mr-5`}>
                <div className="button-bg bg-white"></div>
                <span className="text">About</span>
              </button>
          </Link>
          <Link href="/contact">
            <button className={`${currentRoute === "/contact" 
            ? "active" 
            : "non-active-class-name"} 
            text-black bg-black mr-5`}>
                <div className="button-bg bg-white"></div>
                <span className="text">Contact</span>
              </button>
          </Link> 
        </div>
      </nav>
      
    </div>
  )
}