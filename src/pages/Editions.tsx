import { motion } from 'motion/react'
import { NavLink } from 'react-router-dom'
import { ArrowRight, UsersThree } from '@phosphor-icons/react'
import { GameChip } from '@/components/GameChip'
import { Button } from '@/components/ui/button'
import { editions } from '@/data/editions'

export function Editions() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-balance font-display text-4xl font-bold leading-tight text-foreground md:text-6xl"
          >
            Deux éditions, une communauté qui grandit.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-lg font-body text-lg text-muted"
          >
            Chaque année, un nouveau line-up de jeux, plus de joueuses et joueurs, et toujours la
            même ambiance entre potes.
          </motion.p>
        </div>
      </section>

      {editions.map((edition) => (
        <section
          key={edition.slug}
          className="border-t border-border py-20 md:py-28"
          id={edition.slug}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-mono text-sm font-semibold tracking-wide text-accent-400">
                  {edition.year}
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
                  {edition.title}
                </h2>
                <p className="mt-4 font-body text-base leading-relaxed text-muted">
                  {edition.summary}
                </p>

                {edition.players && (
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-sm text-foreground">
                    <UsersThree size={16} weight="bold" className="text-accent-400" />
                    {edition.players} joueuses et joueurs
                  </div>
                )}
              </motion.div>

              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-body text-sm font-semibold text-muted-2"
                >
                  Les jeux de l'édition
                </motion.h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {edition.games.map((game, i) => (
                    <GameChip key={game} name={game} delay={i * 0.03} />
                  ))}
                  {edition.mysteryGame && <GameChip name="Jeu mystère" delay={edition.games.length * 0.03} />}
                </div>

                <div className="mt-10 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="aspect-[4/3] overflow-hidden rounded-xl border border-border"
                    >
                      <img
                        src={`https://picsum.photos/seed/glan-${edition.slug}-${i}/500/375`}
                        alt={`Photo ${edition.title}`}
                        className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Envie de rejoindre la prochaine édition ?
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-base text-muted">
            Suis-nous sur les réseaux pour ne rater aucune annonce, ou écris-nous directement.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <NavLink to="/contact">
                Nous contacter <ArrowRight size={18} weight="bold" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
