import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useAnimation } from 'motion/react'

export function RouteProgressBar() {
  const location = useLocation()
  const controls = useAnimation()

  useEffect(() => {
    controls.set({ scaleX: 0, opacity: 1 })
    controls
      .start({ scaleX: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } })
      .then(() => controls.start({ opacity: 0, transition: { duration: 0.3, delay: 0.05 } }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <motion.div
      animate={controls}
      style={{ transformOrigin: 'left' }}
      className="fixed inset-x-0 top-0 z-[100] h-[2px] bg-gradient-to-r from-accent-400 via-accent-500 to-accent-300"
    />
  )
}
