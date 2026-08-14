import { lazy, Suspense, type MouseEvent } from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'motion/react'
import { NavLink } from 'react-router-dom'
import { ArrowRight, GameController } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { StatTile } from '@/components/StatTile'
import { Magnetic } from '@/components/Magnetic'

const HeroScene = lazy(() => import('@/components/three/HeroScene').then((m) => ({ default: m.HeroScene })))
const FloatingShard = lazy(() =>
  import('@/components/three/FloatingShard').then((m) => ({ default: m.FloatingShard })),
)

const STATS = [
  { value: 4, label: 'Amis fondateurs' },
  { value: 32, label: 'Joueuses et joueurs en 2026' },
  { value: 10, label: 'Jeux à la dernière édition' },
  { value: 2, label: 'Éditions organisées' },
]

const GALLERY = [
  'glan-setup-1',
  'glan-setup-2',
  'glan-crowd',
  'glan-race',
]

export function Home() {
  const spotlightX = useMotionValue(-9999)
  const spotlightY = useMotionValue(-9999)
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${spotlightX}px ${spotlightY}px, rgba(172,131,248,0.16), transparent 70%)`

  function handlePointerMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    spotlightX.set(e.clientX - rect.left)
    spotlightY.set(e.clientY - rect.top)
  }

  function handlePointerLeave() {
    spotlightX.set(-9999)
    spotlightY.set(-9999)
  }

  return (
    <>
      <section
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16"
      >
        <Suspense fallback={null}>
          <HeroScene className="absolute inset-0 h-full w-full opacity-90" />
        </Suspense>
        <motion.div
          aria-hidden="true"
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-8 md:px-10">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl"
            >
              Le tournoi né entre potes, devenu communauté.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg font-body text-lg text-muted"
            >
              G-LAN rassemble joueuses et joueurs de Suisse romande autour du jeu vidéo et de
              l'esport, dans une ambiance conviviale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <Button asChild size="lg">
                  <NavLink to="/editions">
                    Voir les éditions <ArrowRight size={18} weight="bold" />
                  </NavLink>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.instagram.com/glan_officiel/" target="_blank" rel="noreferrer">
                    Suivre le G-LAN
                  </a>
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-border py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-balance font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Créé pour s'amuser, rassembler et promouvoir le gaming en Suisse romande.
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-muted">
              G-LAN est né de l'envie de quatre amis de partager leur passion du jeu vidéo. Pas de
              grande organisation derrière, juste une salle, des écrans, et une communauté qui
              grandit édition après édition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square w-full max-w-md justify-self-center md:justify-self-end"
          >
            <Suspense fallback={null}>
              <FloatingShard className="h-full w-full animate-float" />
            </Suspense>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {STATS.map((stat, i) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-lg text-balance font-display text-3xl font-bold text-foreground md:text-4xl">
              L'ambiance G-LAN, capturée entre deux parties.
            </h2>
            <NavLink
              to="/editions"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent-300 transition-colors hover:text-accent-400"
            >
              Toutes les éditions <ArrowRight size={16} weight="bold" />
            </NavLink>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY.map((seed, i) => (
              <motion.div
                key={seed}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={
                  'aspect-square overflow-hidden rounded-2xl border border-border' +
                  (i === 0 ? ' col-span-2 row-span-2' : '')
                }
              >
                <img
                  src={`https://picsum.photos/seed/${seed}/${i === 0 ? 800 : 400}/${i === 0 ? 800 : 400}`}
                  alt="Ambiance G-LAN"
                  width={i === 0 ? 800 : 400}
                  height={i === 0 ? 800 : 400}
                  className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glow-border flex flex-col items-start gap-8 rounded-3xl border border-border bg-surface/60 p-10 md:flex-row md:items-center md:justify-between md:p-14"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-400">
                <GameController size={24} weight="bold" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Rejoins la communauté G-LAN
                </h3>
                <p className="mt-1 font-body text-sm text-muted">
                  Annonces, teasers et coulisses des prochaines éditions, directement sur Instagram.
                </p>
              </div>
            </div>
            <Magnetic>
              <Button asChild size="lg">
                <a href="https://www.instagram.com/glan_officiel/" target="_blank" rel="noreferrer">
                  Suivre sur Instagram <ArrowRight size={18} weight="bold" />
                </a>
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </>
  )
}
