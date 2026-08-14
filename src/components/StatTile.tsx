import { motion } from 'motion/react'

export function StatTile({
  value,
  label,
  delay = 0,
}: {
  value: string
  label: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glow-border rounded-2xl border border-border bg-surface/60 p-6"
    >
      <div className="font-display text-4xl font-bold text-foreground md:text-5xl">{value}</div>
      <div className="mt-2 font-body text-sm text-muted">{label}</div>
    </motion.div>
  )
}
