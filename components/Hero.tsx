import styles from "styles/components/Hero.module.scss"

interface Prop {
    children: JSX.Element|JSX.Element[];
    heroImage: string;
    isOverlay?: boolean;
}

export default function Hero({ children, heroImage, isOverlay=false}:Prop){
    
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
        <div className="bg-cover bg-center relative w-full h-400 md:h-600" style={{backgroundImage: heroImage}}>
            <div className="container mx-auto min-h-400 md:min-h-600 flex items-center flex-col justify-around">
                <div className="pt-8 -mx-4 md:mx-0 z-10">
                    <div className="text-center md:px-4 relative w-full">
                        {children}
                    </div>
                </div>
            </div>
            {isOverlay?<div className={styles.overlay} style={{backgroundColor:"rgba(19,18,18,0.619)"}}></div>:""
        }
        </div>
        
        
    </div>
  );
}
