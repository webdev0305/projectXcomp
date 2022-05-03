import classNames from "classnames";
import Image from "next/image";
import styles from "styles/components/Hero.module.scss"

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_shape}><Image src="/assets/images/elements/hero-shape.jpg.png" width={1920} height={520} alt="image" /></div>
            <div className={styles.hero__element}><Image src="/assets/images/elements/hero-building.png" width={1180} height={980} alt="image"  /></div>
            <div className={styles.hero__car}>
                <Image src="/assets/images/elements/car-ray.png" alt="image" width={844} height={664} className="car-ray" />
                <Image src="/assets/images/projectx/hero.png" alt="image"  width={988} height={720} className={styles.hero_car} />
            </div>
            <div className="container">
                <div className="flex justify-center lg:justify-start w-full">
                <div className="lg:w-1/2 md:w-2/3">
                    <div className={styles.hero__content}>
                        <h2 className={styles.hero__title}>WIN BIG</h2>
                        <p className="wow fadeInUp">
                            Now's your chance to use $PXT2 to win great prizes!</p>
                            <p>Check out what's in our latest prize draws.</p>
                            <p>Will you be our next lucky winner?</p>
                        <div className={styles.hero__btn}>
                            <a href="#draws" className={styles.cmn_btn}>View competitions</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="hero__thumb">
                    <Image src="/assets/images/elements/car-main.png" alt="" width={0} height={0}/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
