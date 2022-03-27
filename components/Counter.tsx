import classNames from "classnames"
import { useEffect, useState } from "react"
import styles from "styles/components/Counter.module.scss"

interface Prop extends React.HTMLAttributes<HTMLDivElement> {
  theme?: string | 'default'
  endTime: Date
  drawDate?: string
  onDone?: Function
}

export default function Clock({ className, theme, endTime, drawDate, onDone }: Prop) {
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
  useEffect(() => {
    const timer = setInterval(() => {
      const secs = new Date(endTime).getTime() / 1000 - new Date().getTime() / 1000
      secondsToHms(secs)
      if (secs === 0) {
        clearInterval(timer)
        if (onDone) onDone()
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [endTime])
  return (
    <div className={classNames(styles.counter, theme && styles[theme], className)}>
      <div>
        <time>
          <svg fill="white" width="100%" height="100%" viewBox="0 0 70 100" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="73" fontFamily="Impact" fontSize="60" textAnchor="middle">{dDisplay}</text>
          </svg>
          <span />
        </time>
        <i />
        <time>
          <svg fill="white" width="100%" height="100%" viewBox="0 0 70 100" xmlns="http://www.w3.org/2000/svg">
            <text x="20%" y="73" fontFamily="Impact" fontSize="60" textAnchor="middle">{hDisplay?.slice(0, 1)}</text>
            <text x="80%" y="73" fontFamily="Impact" fontSize="60" textAnchor="middle">{hDisplay?.slice(-1)}</text>
          </svg>
          <span />
        </time>
        <i>:</i>
        <time>
          <svg fill="white" width="100%" height="100%" viewBox="0 0 70 100" xmlns="http://www.w3.org/2000/svg">
            <text x="20%" y="73" fontFamily="Impact" fontSize="60" textAnchor="middle">{mDisplay?.slice(0, 1)}</text>
            <text x="80%" y="73" fontFamily="Impact" fontSize="60" textAnchor="middle">{mDisplay?.slice(-1)}</text>
          </svg>
          <span />
        </time>
        <i>:</i>
        <time>
          <svg fill="white" width="100%" height="100%" viewBox="0 0 70 100" xmlns="http://www.w3.org/2000/svg">
            <text x="20%" y="73" fontFamily="Impact" fontSize="60" textAnchor="middle">{sDisplay?.slice(0, 1)}</text>
            <text x="80%" y="73" fontFamily="Impact" fontSize="60" textAnchor="middle">{sDisplay?.slice(-1)}</text>
          </svg>
          <span />
        </time>
      </div>
      <div>
        <em>DAYs</em>
        <em>HOURs</em>
        <em>MINUTEs</em>
        <em>SECONDs</em>
      </div>
    </div>
  )
}
