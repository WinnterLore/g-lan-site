import { motion } from 'motion/react'
import { NavLink } from 'react-router-dom'
import { ArrowRight, Megaphone, UsersFour, Heart } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { sponsors } from '@/data/sponsors'

const BENEFITS = [
  {
    icon: Megaphone,
    title: 'Visibilité auprès des joueurs',
    text: "Logo sur le site, les réseaux et sur place pendant tout l'événement.",
  },
  {
    icon: UsersFour,
    title: 'Une communauté engagée',
    text: 'Un public jeune, connecté et passionné de jeu vidéo en Suisse romande.',
  },
  {
    icon: Heart,
    title: 'Un impact local direct',
    text: "Ton soutien finance directement le matériel, la salle et les prochaines éditions.",
  },
]

export function Sponsors() {
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
            Merci à celles et ceux qui rendent le G-LAN possible.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-lg font-body text-lg text-muted"
          >
            Le G-LAN est organisé par des passionnés, pas par une entreprise. Chaque soutien compte.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((sponsor, i) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glow-border flex flex-col justify-between rounded-2xl border border-border bg-surface/60 p-8 transition-colors hover:border-accent-400/50"
              >
                <div>
                  {sponsor.logo ? (
                    <img src={sponsor.logo} alt={sponsor.name} className="h-10 w-auto" />
                  ) : (
                    <span className="font-display text-xl font-bold text-foreground">
                      {sponsor.name}
                    </span>
                  )}
                  <p className="mt-3 font-body text-sm text-muted">{sponsor.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-balance font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Devenir partenaire du G-LAN
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-muted">
                Que tu représentes une entreprise locale ou une association, on adapte chaque
                partenariat à ce que tu peux apporter.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <NavLink to="/contact">
                    Nous contacter <ArrowRight size={18} weight="bold" />
                  </NavLink>
                </Button>
              </div>
            </motion.div>

            <div className="flex flex-col divide-y divide-border border-t border-border">
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 py-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                    <benefit.icon size={20} weight="bold" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 font-body text-sm text-muted">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
