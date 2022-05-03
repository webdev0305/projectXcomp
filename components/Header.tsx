import Link from "next/link" // Dynamic routing
import Image from "next/image" // Images
import { eth } from "state/eth" // Global state
import { useEffect, useState } from "react" // State management
// import { useRouter } from "next/router" // Routing
import cn from "classnames"
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
    <header className="header">
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
              <a className="site-logo site-title" href="/">
                <img
                  src="assets/images/logos/competitionx-logo-3-letters-onblack.png"
                  alt="site-logo"
                />
                <span className="logo-icon">
                  <i className="flaticon-fire"></i>
                </span>
              </a>
              <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu-toggle"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav main-menu ml-auto">
                  <li>
                    <a
                      href="https://app.bogged.finance/avax/swap?tokenIn=AVAX&tokenOut=0x9e20Af05AB5FED467dFDd5bb5752F7d5410C832e"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy $PXT
                    </a>
                  </li>
                  <li>
                    <a href="#draws">Competitions</a>
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
                  <li>
                    <a href="">Winners</a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/ProjectXNodes"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/invite/projectx"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-discord"></i>
                    </a>
                  </li>
                </ul>
                <div className="nav-right">
                  <a href="" className="cmn-btn style--three btn--sm">
                    Connect Wallet
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
  )
}
