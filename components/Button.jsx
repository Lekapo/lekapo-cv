import Link from 'next/link'
import { usePathname } from 'next/navigation';

export function Button({route, text, className}) {

    {/* Get the current route */}
    const currentRoute = usePathname();
    
    return (
        <Link href={route}>
              <button className={`${currentRoute === route
                ? "active" : ""} 
                text-black bg-black ${className}`}>
                <div className={`button-bg`}></div>
                <span>{text}</span>
              </button>
          </Link>
    )
}