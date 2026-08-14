import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={reduce ? undefined : { opacity: 0, y: -20, scale: 0.99, filter: 'blur(6px)' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
