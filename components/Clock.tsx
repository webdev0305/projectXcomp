import classNames from "classnames"
import { useState } from "react"
import styles from "styles/components/Clock.module.scss"

interface Prop extends React.HTMLAttributes<HTMLDivElement> {
  type: string
  endTime?: Date
  drawDate?: string
  onDone?: Function
}

export default function Clock({ className, type, endTime, drawDate, onDone }: Prop) {
  const [dDisplay, setDDisplay] = useState<string>()
  const [hDisplay, setHDisplay] = useState<string>()
  const [mDisplay, setMDisplay] = useState<string>()
  const [sDisplay, setSDisplay] = useState<string>()
  function secondsToHms(t: number) {
    const ac = new AbortController()
    if (t <= 0) {
      setDDisplay('0')
      setHDisplay('00')
      setMDisplay('00')
      setSDisplay('00')
    } else {
      const d = Math.floor(t / 86400);
      const h = Math.floor(t % 86400 / 3600);
      const m = Math.floor(t % 3600 / 60);
      const s = Math.floor(t % 3600 % 60);

      setDDisplay(d.toString());
      setHDisplay(h < 10 ? h.toString().padStart(2, "0") : h.toString());
      setMDisplay(m < 10 ? m.toString().padStart(2, "0") : m.toString());
      setSDisplay(s < 10 ? s.toString().padStart(2, "0") : s.toString());
    }
    ac.abort()
  }
  const timer = setInterval(() => {
    if (endTime !== undefined) {
      const secs = new Date(endTime).getTime() / 1000 - new Date().getTime() / 1000
      secondsToHms(secs)
      if (secs === 0) {
        clearInterval(timer)
        if (onDone) onDone()
      }
    }
  }, 1000)
  if (type == "white")
    return (
      <div className={classNames(styles.clock1, className)}>
        <span className={styles.line}></span>
        <p style={{ color: "#ffffff" }}>NEXT COMPETITION ENDS 9TH FEB</p>
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
      <div className={classNames(styles.clock2, className)}>
        <h4 style={{ color: "#000000" }}>COMPETITION ENDS IN:</h4>
        <div className="flex justify-between gap-1">
          <div className="flex-shrink w-1/4">
            <span>{dDisplay}</span>
            <div className="smalltext">DAYS</div>
          </div>
          <div className="flex-shrink w-1/4">
            <span>{hDisplay}</span>
            <div className="smalltext">HOURS</div>
          </div>
          <div className="flex-shrink w-1/4">
            <span>{mDisplay}</span>
            <div className="smalltext">MINUTES</div>
          </div>
          <div className="flex-shrink w-1/4">
            <span>{sDisplay}</span>
            <div className="smalltext">SECONDS</div>
          </div>
        </div>
        <span>Draw Date: {drawDate}</span>
      </div>
    )
}
