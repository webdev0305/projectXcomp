import Link from "next/link" // Dynamic routing
import Image from "next/image" // Images
import { eth } from "state/eth" // Global state
import { useEffect, useState } from "react" // State management
// import { useRouter } from "next/router" // Routing
import cn from "classnames"
import styles from "styles/components/Header.module.scss" // Component styles
import { token } from "state/competition"
import { OuterClick } from "react-outer-click"
import { formatEther } from "ethers/lib/utils"
import { formatFixed } from "@ethersproject/bignumber"
import Router from "next/router"

export default function Header() {
  // Global state
  const { address, unlock, lock } = eth.useContainer()
  const { user } = token.useContainer()
  const [navbar, setNavbar] = useState(false)
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const [pathname, setPathname] = useState('')
  const [showInfo, setShowInfo] = useState(false)
  if (typeof window !== "undefined") {
    // if (pathname != window.location.pathname)
    //   setPathname(window.location.pathname)
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener('scroll', changeBackground)
  }
  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }
  useEffect(() => {
    setPathname(Router.asPath)
  })
  return (
    <header className={navbar ? "fixed w-full z-20 opened" : "fixed w-full z-10"}>
      <div className="flex flex-wrap items-center justify-between 2xl:container px-4 py-3 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Image src={navbar ? "/header-logo.png" : "/black-logo.png"} alt="logo" width={155} height={60} />
        </div>
        <button
          className={cn("flex items-center block px-3 py-2 text-white border rounded md:hidden", navbar ? "border-white" : "border-black")}
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill={navbar ? "white" : "black"} />
          </svg>
        </button>

        <ul
          className=
          "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto hidden md:block"
        >
          {[
            { title: "Home", route: "/" },
            { title: "COMPETITIONS", route: "/competitions" },
            { title: "HOW TO PLAY", route: "/howtoplay" },
            { title: "ABOUT", route: "/about" },
            { title: "WINNERS", route: "/winners" },
            { title: "JOIN XCLUB", route: "/join" },

          ].filter(({ route }) => {
            if (route === '/join')
              return address ? true : false
            return true
          }).map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:mr-6 font-bold" key={title}>
              <Link href={route} passHref>
                <a className={cn("uppercase hover:text-red-600", pathname == route && styles.active)}>{title}</a>
              </Link>
            </li>
          ))}
          {user.isOwner &&
            <div className={styles.header__actions}>
              <Link href="/list" passHref>
                <button>Management</button>
              </Link>
            </div>}
          <div className={styles.header__actions}>
            {!address ?
              <button onClick={unlock}>Connect</button>
              :
              <button onClick={toggleInfo}>
                {user.nickName}
              </button>}
            {address && showInfo &&
              <OuterClick onOuterClick={() => setShowInfo(false)}>
                <div className={cn(styles.info, "flex flex-col gap-2")}>
                  <div className={styles.avatar}>
                    <div><img src={user.avatar} alt="Avatar" /></div>
                    <Link href="/account" passHref><button title="Edit Account" onClick={toggleInfo} /></Link>
                  </div>
                  <button type="button" className={styles.address} title="Copy Wallet Address">
                    0x{address.substring(2, 12)}...{address.slice(-10)}
                    <svg width="24" height="24" stroke="#8b001a" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.788 16.757H8.394C8.02429 16.757 7.66972 16.6101 7.40829 16.3487C7.14687 16.0873 7 15.7327 7 15.363V8.394C7 8.02429 7.14687 7.66972 7.40829 7.40829C7.66972 7.14687 8.02429 7 8.394 7H15.363C15.7327 7 16.0873 7.14687 16.3487 7.40829C16.6101 7.66972 16.757 8.02429 16.757 8.394V9.788" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.558 9.78799H18.775C18.9792 9.78799 19.175 9.86912 19.3194 10.0135C19.4638 10.1579 19.545 10.3538 19.545 10.558V18.775C19.545 18.9792 19.4638 19.1751 19.3194 19.3195C19.175 19.4639 18.9792 19.545 18.775 19.545H10.558C10.3537 19.545 10.1579 19.4639 10.0135 19.3195C9.86909 19.1751 9.78796 18.9792 9.78796 18.775V10.558C9.78796 10.3538 9.86909 10.1579 10.0135 10.0135C10.1579 9.86912 10.3537 9.78799 10.558 9.78799V9.78799Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className={cn(styles.balance, "flex flex-col gap-1")}>
                    <div className="flex justify-between">
                      <strong>Balance</strong>
                      <span>{user.balanceETH ? parseFloat(formatFixed(user.balanceETH, 18)).toFixed(8) : 0} <strong>AVAX</strong></span>
                    </div>
                    <div className="flex justify-between">
                      <span />
                      <span>{user.balanceToken ? formatFixed(user.balanceToken, 18) : 0} <strong>$PXT</strong></span>
                    </div>
                  </div>
                  {user.isMember && <div className={cn(styles.balance, "flex flex-col gap-1")}>
                    <div className="flex justify-between">
                      <strong>Member Credits</strong>
                      <span>{user.creditBalance ? formatFixed(user.creditBalance ?? 0, 18) : 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span />
                      <i>Until <strong>{user.untilTime?.toDateString()}</strong></i>
                    </div>
                  </div>}
                  <button type="button" className={styles.lock} onClick={lock}>Disconnect</button>
                </div>
              </OuterClick>}
          </div>
        </ul>

      </div>
      <div className={cn("z-20 bg-black block md:hidden absolute top-0 left-0 w-full h-auto", mobileMenuIsOpen ? `translate-x-0` : `translate-x-full`)}
        style={{ transition: "transform 200ms linear" }}>
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
                <Link href={route} passHref>
                  <a className="block text-white uppercase">{title}</a>
                </Link>
              </li>
            ))}
            <div className={styles.header__actions}>
              <button>Connect</button>
            </div>
          </ul>
        </div>
      </div>
    </header>

  )
}
