import {useState} from "react"
import styles from "styles/components/Clock.module.scss"

interface Prop {
  type: string;
  endTime: number;
}

export default function Clock({type,endTime}:Prop){
    const [dDisplay, setDDisplay] = useState<string>()
    const [hDisplay, setHDisplay] = useState<string>()
    const [mDisplay, setMDisplay] = useState<string>()
    const [sDisplay, setSDisplay] = useState<string>()
    function secondsToHms(t: number){
      if(t<=0) {
        setDDisplay('0')
        setHDisplay('00')
        setMDisplay('00')
        setSDisplay('00')
      }else{
        const d = Math.floor(t / 86400);
        const h = Math.floor(t % 86400 / 3600);
        const m = Math.floor(t % 3600 / 60);
        const s = Math.floor(t % 3600 % 60);
  
        setDDisplay(d.toString());
        setHDisplay(h<10?h.toString().padStart(2,"0"):h.toString());
        setMDisplay(m<10?m.toString().padStart(2,"0"):m.toString());
        setSDisplay(s<10?s.toString().padStart(2,"0"):s.toString());
      }
    }
    setInterval(() => {
      const now = new Date().getTime()/1000
      secondsToHms(endTime-now)
    }, 1000)
    if(type=="white")
      return (
        <div className={styles.clock1}>
          <span className={styles.line}></span>
          <p style={{color: "#ffffff"}}>NEXT COMPETITION ENDS 9TH FEB</p>
          <div>
              <span>{dDisplay}</span>
              <div className="smalltext">DAYS</div>
          </div>
          <div>
              <span>{hDisplay}</span>
              <div className="smalltext">HOURS</div>
          </div>
          <div>
              <span>{mDisplay}</span>
              <div className="smalltext">MINUTES</div>
          </div>
          <div>
              <span>{sDisplay}</span>
              <div className="smalltext">SECONDS</div>
          </div>
        </div>
      );
    else
    return (
      <div className={styles.clock2}>
        <h4 style={{color: "#000000"}}>COMPETITION ENDS IN:</h4>
        <div>
          <div>
              <span>{dDisplay}</span>
              <div className="smalltext">DAYS</div>
          </div>
          <div>
              <span>{hDisplay}</span>
              <div className="smalltext">HOURS</div>
          </div>
          <div>
              <span>{mDisplay}</span>
              <div className="smalltext">MINUTES</div>
          </div>
          <div>
              <span>{sDisplay}</span>
              <div className="smalltext">SECONDS</div>
          </div>
        </div>
        <span>Draw Date: 09 February 2022</span>
      </div>
    )
}
