import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2 font-display font-bold tracking-tight', className)}>
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="absolute inset-0 rotate-45 rounded-md bg-gradient-to-br from-accent-400 to-accent-700" />
        <span className="relative h-2.5 w-2.5 rotate-45 rounded-sm bg-background" />
      </span>
      G-LAN
    </span>
  )
}
