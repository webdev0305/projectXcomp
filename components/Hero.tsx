import classNames from "classnames";
import Image from "next/image";
import styles from "styles/components/Hero.module.scss"

interface Prop {
    children: JSX.Element | JSX.Element[]
}

export default function Hero({ children }: Prop) {
    return (
        <div className={styles.hero}>
            <div className={classNames(styles.background, "flex flex-col items-center justify-center")}>
                {children}
            </div>
            <div className={styles.logo}>
                <Image src="/logo.png" className="hero-logo" layout="fill" />
            </div>
        </div>
    );
}
