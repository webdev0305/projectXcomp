import styles from "styles/components/TwoImage.module.scss"

interface Prop {
  src: string;
  color?: string;
  title?: string;
  description?: string;
  url?: string;
}

export default function TwoImage({src, color, title, description, url}:Prop){
   
  return (
  <div style={{backgroundImage: src, color: color}} className={styles.twoImg}>
    <div className="flex flex-auto flex-wrap justify-center items-center h-full">
      <div className="z-10 text-center">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={url} className={styles.play_button}>Play Now</a>
      </div>
    </div>
  </div>
    
  );
}
