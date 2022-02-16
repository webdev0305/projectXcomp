import Link from "next/link"; // Dynamic routing
import Image from "next/image"; // Images
import { eth } from "state/eth"; // Global state
import { useState } from "react"; // State management
// import { useRouter } from "next/router"; // Routing
import cn from "classnames";
import styles from "styles/components/Header.module.scss"; // Component styles

export default function Header() {
  // Global state
  const { address, unlock, lock }: { address: string | null; unlock: Function; lock: Function } =
    eth.useContainer();

  const [navbar, setNavbar] = useState(false)
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [pathname, setPathname] = useState('')
  
  if (typeof window !== "undefined") {
    if(pathname!=window.location.pathname)
      setPathname(window.location.pathname)
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener('scroll', changeBackground)
  }
  
  return (
    <header className={navbar ? "fixed w-full z-20 opened":"fixed w-full z-10"}>
      <div className="flex flex-wrap items-center justify-between 2xl:container px-4 py-3 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Image src={navbar?"/header-logo.png":"/black-logo.png"} alt="logo" width={155} height={60} />
        </div>
        <button
          className={cn("flex items-center block px-3 py-2 text-white border rounded md:hidden", navbar?"border-white":"border-black")}
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill={navbar?"white":"black"}/>
          </svg>
        </button>

        <ul
          className=
            "md:flex flex-col md:flex-row md:items-center md:justify-center text-md w-full md:w-auto hidden md:block"
        >
          {[
            { title: "Home", route: "/" },
            { title: "COMPETITIONS", route: "/competitions" },
            { title: "HOW TO PLAY", route: "/howtoplay" },
            { title: "ABOUT", route: "/about" },
            { title: "WINNERS", route: "/winners" },
            { title: "JOIN XCLUB", route: "/join" },

          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:mx-6 font-bold" key={title}>
              <Link href={route}>
                <a className={cn("uppercase block hover:text-red-600", pathname==route?"text-red-600":"")}>{title}</a>
              </Link>
            </li>
          ))}
          <div className={styles.header__actions}>
            <Link href="/backend" passHref>
              <button>Create</button>
            </Link>
          </div>
          <div className={styles.header__actions}>
            {!address?
            <button onClick={() => unlock()}>connect</button>
            : <button onClick={() => lock()}>
            {address.substr(0, 6)}...{address.slice(address.length - 4)}
          </button>}
            
          </div>
        </ul>
        
      </div>
      <div className={cn("z-20 bg-black block md:hidden absolute top-0 left-0 w-full h-auto", mobileMenuIsOpen ? `translate-x-0` : `translate-x-full`)} 
      style={{transition: "transform 200ms linear"}}>
        <div className="container p-8">
          <span className="close_menu mt-10" onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}></span>
          <ul
            className="items-center justify-center text-sm w-full h-screen flex flex-col -mt-12"
          >
            {[
              { title: "Home", route: "/" },
              { title: "COMPETITIONS", route: "/competitions" },
              { title: "HOW TO PLAY", route: "/howtoplay" },
              { title: "ABOUT", route: "/about" },
              { title: "WINNERS", route: "/winners" },
              { title: "JOIN XCLUB", route: "/join" },

            ].map(({ route, title }) => (
              <li className="mt-5 font-bold" key={title}>
                <Link href={route}>
                  <a className="block text-white uppercase">{title}</a>
                </Link>
              </li>
            ))}
            <div className={styles.header__actions}>
              <button>connect</button>
            </div>
          </ul>
        </div>
      </div>
    </header>
    
  );
}
