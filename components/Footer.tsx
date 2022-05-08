import Image from "next/image"; // Images
import Link from "next/link" // Dynamic routing
export default function Footer() {
  return (
    <footer className="footer-section">
        <div className="container pt-120">
          <div className="row pb-5 align-items-center">
            <div className="col-lg-4">
              <ul className="app-btn">
                <li>
                  <a
                    href="https://www.avax.network/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Powered by Avalanche"
                      src="/assets/images/projectx/footer/poweredbyavalanche.svg"
                      height="38"
                      width="113"
                      className="poweredbyavalanche"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.assuredefi.io/projects/projectx/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/assets/images/projectx/footer/Assure_TransBG_White_crop.png"
                      height="38"
                      width="113"
                      alt="KYC by Assure DeFi"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <ul className="short-links justify-content-lg-end justify-content-center">
                <li>
                  <Link href="/faq">FAQs</Link>
                </li>
                {/*<li>
                  <Link href="/">Terms &amp; conditions</Link>
                </li>*/}
              </ul>
            </div>
          </div>
          <hr />
          <div className="row py-5 align-items-center">
            <div className="col-lg-6">
              <p className="copy-right-text text-lg-left text-center mb-lg-0 mb-3">
                Copyright © 2022. ProjectX
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="social-links justify-content-lg-end justify-content-center">
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
            </div>
          </div>
        </div>
      </footer>
  );
}
