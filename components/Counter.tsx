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
      <div>
        {dDisplay} days {hDisplay?.slice(0, 1)}{hDisplay?.slice(-1)} hours {mDisplay?.slice(0, 1)}{mDisplay?.slice(-1)} min {sDisplay?.slice(0, 1)}{sDisplay?.slice(-1)} seconds
      </div>
  )
}
