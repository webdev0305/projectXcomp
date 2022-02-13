import Image from "next/image"; // Images
import styles from "styles/components/Footer.module.scss"; // Component styles

/**
 * Links to render in footer
 * @dev Does not render any links where url is undefined, allowing conditional rendering
 */
const footerLinks: { icon: string; url: string | undefined }[] = [
  // Discord
  { icon: "/icons/discord.svg", url: process.env.NEXT_PUBLIC_DISCORD },
  // Twitter
  { icon: "/icons/twitter.svg", url: process.env.NEXT_PUBLIC_TWITTER },
  // Github
  { icon: "/icons/github.svg", url: process.env.NEXT_PUBLIC_GITHUB },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <div className="container">
          <div>
            <div>
              <a target="_blank" href="https://coinmarketcap.com/currencies/project-x-nodes/" rel="noreferrer">CoinMarketCap</a>&nbsp; | &nbsp;
              <a target="_blank" href="https://twitter.com/ProjectXNodes" rel="noreferrer">Twitter</a>&nbsp; | &nbsp;
              <a target="_blank" href="https://discord.com/invite/projectx" rel="noreferrer">Discord</a>&nbsp; | &nbsp;
              <a target="_blank" href="https://discord.com/invite/projectx" rel="noreferrer">Support</a>&nbsp; | &nbsp;
              <a target="_blank" href="https://forms.gle/hf7QfxytJYRzYrn58" rel="noreferrer">OTC Trade</a>
              <br/>
              <a target="_blank" href="https://dexscreener.com/avalanche/0x9e20Af05AB5FED467dFDd5bb5752F7d5410C832e" rel="noreferrer">DEX SCREENER 0x9e20Af05AB5FED467dFDd5bb5752F7d5410C832e</a>
              <br/>
              <div className="align-super">
                <a href="https://www.avax.network/" target="_blank" rel="noreferrer" className="inline-block align-super">
                  <Image alt="Powered by Avalanche" src="/poweredbyavalanche.svg" height="38" width="113" className={styles.footerImage} /></a>
                <a href="https://www.assuredefi.io/projects/projectx/" target="_blank" rel="noreferrer" className="inline-block" style={{maxWidth: "200px"}}>
                  <Image src="/Assure_TransBG_White_crop.png" alt="KYC by Assure DeFi" /></a>
              </div>
            </div>
            <br/>
            <p>© 2022 All rights reserved. (V1.0)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
