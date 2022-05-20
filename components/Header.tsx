import Link from "next/link" // Dynamic routing
import Image from "next/image" // Images
import { eth } from "state/eth" // Global state
import { useEffect, useState } from "react" // State management
// import { useRouter } from "next/router" // Routing
import cn from "classnames"
import { OuterClick } from "react-outer-click"
// import { formatEther } from "ethers/lib/utils"
import { formatFixed } from "@ethersproject/bignumber"
import Router from "next/router"
import { token } from "../state/competition"

export default function Header() {
  // Global state
  const { address, unlock, lock } = eth.useContainer()
  const { user } = token.useContainer()
  const [navbar, setNavbar] = useState(false)
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  // const [pathname, setPathname] = useState('')
  const [showInfo, setShowInfo] = useState(false)
  if (typeof window !== "undefined") {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener('scroll', changeBackground)
  }
  const toggleMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen)
    console.log(mobileMenuIsOpen)
  }
  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }
  // useEffect(() => {
  //   setPathname(Router.asPath)
  // })
  return (
    <header className={cn(navbar?"animated fadeInDown menu-fixed":"","header")}>
        <div className="header__top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="left d-flex align-items-center"></div>
              </div>
              <div className="col-sm-6">
                <div className="right"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="header__bottom">
          <div className="container">
            <nav className="navbar navbar-expand-xl p-0 align-items-center">
              <Link href="/" passHref>
                <div className="site-logo site-title" >
                  <img
                    src="/assets/images/logos/competitionx-logo-3-letters-onblack.png"
                    alt="site-logo"
                  />
                </div>
              </Link>
              <button
                className="navbar-toggler ml-auto"
                type="button"
                // data-toggle="collapse"
                // data-target="#navbarSupportedContent"
                // aria-controls="navbarSupportedContent"
                // aria-expanded="false"
                // aria-label="Toggle navigation"
                onClick={toggleMenu}
              >
                <span className="menu-toggle"  onClick={toggleMenu}></span>
              </button>
              <div
                className={cn(mobileMenuIsOpen?"show":"","collapse navbar-collapse")}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav main-menu ml-auto">
                  
                  <li>
                    <Link href="/#draws">COMPS</Link>
                  </li>
                  {address?
                  <li>
                    <Link href="/draws">MY DRAWS</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  :''}
                  <li>
                    <a
                      href="https://app.bogged.finance/avax/swap?tokenIn=AVAX&tokenOut=0x9ADCbba4b79eE5285E891512b44706F41F14CAFd"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy $PXT
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://projectx.financial"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ProjectX
                    </a>
                  </li>
                  {user.isOwner?
                  <li>
                    <Link href="/list">ADMIN</Link>
                  </li>
                  :''
                  }
                  
                  <li>
                    <a
                      href="https://twitter.com/projectxfinance"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/invite/projectxfinance"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-discord"></i>
                    </a>
                  </li>
                </ul>
                <div className="nav-right">
                  {!address ?
                    <button className="cmn-btn style--three btn--sm" onClick={unlock}>Connect wallet</button>
                    :
                    <button className="cmn-btn style--three btn--sm" onClick={lock}>
                      {user.nickName?.substring(0, 13)}
                    </button> }
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
  )
}
