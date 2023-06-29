/**
Renders a navigation component with a sticky header, containing a logo and a link to other pages.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import Link from 'next/link'

export const Navigation = () => {
  return (
    <div  className="m-auto w-full sticky top-0 border-black border-b-2 z-50 bg-white">
      <nav  className="container mx-auto flex">
        <div id='navbrand' className="navbrand p-5 m-auto">
          <Link href="/">
            <h1 className='text-lg font-extrabold uppercase'>Lekapo</h1>
          </Link>
        </div>
        
        <div id='navbar' className="m-auto p-5 flex">
        <Link href="/">
              <h1 className='font-bold pr-5'>Portfolio</h1>
          </Link>
          <Link href="/">
              <h1 className='font-bold pr-5'>About</h1>
          </Link>
          <Link href="/">
              <h1 className='font-bold'>Contact</h1>
          </Link>
          
        </div>
      </nav>
      
    </div>
  )
}