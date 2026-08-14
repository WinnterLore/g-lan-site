import { motion } from 'motion/react'
import { GameController, Question } from '@phosphor-icons/react'

export function GameChip({ name, delay = 0 }: { name: string; delay?: number }) {
  const isMystery = name.toLowerCase().includes('mystère')

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-body text-sm text-foreground transition-colors hover:border-accent-400/60"
    >
      {isMystery ? (
        <Question size={16} weight="bold" className="text-accent-400" />
      ) : (
        <GameController size={16} weight="bold" className="text-accent-400" />
      )}
      {name}
    </motion.span>
  )
}
