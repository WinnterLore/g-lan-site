import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { EnvelopeSimple, InstagramLogo, DiscordLogo, CheckCircle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full rounded-xl border border-border bg-surface px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent-400 focus:ring-2 focus:ring-accent-500/30'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

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
            Une question ? Écris-nous.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-lg font-body text-lg text-muted"
          >
            Sponsoring, inscriptions, presse ou juste envie de dire bonjour, on répond
            personnellement à chaque message.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_minmax(0,340px)] md:gap-16 md:px-10">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-body text-sm font-medium text-foreground">
                  Nom
                </label>
                <input id="name" name="name" type="text" required className={fieldClass} placeholder="Ton nom" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-body text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="ton@email.ch"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-body text-sm font-medium text-foreground">
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className={fieldClass}
                placeholder="Sponsoring, inscription, presse..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-body text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={cn(fieldClass, 'resize-none')}
                placeholder="Dis-nous en plus..."
              />
            </div>

            <div className="mt-2 flex items-center gap-4">
              <Button type="submit" size="lg" disabled={sent}>
                {sent ? 'Message envoyé' : 'Envoyer le message'}
              </Button>
              {sent && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 font-body text-sm text-accent-300"
                >
                  <CheckCircle size={18} weight="fill" /> On te répond très vite.
                </motion.span>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <a
              href="mailto:contact@g-lan.ch"
              className="glow-border flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-accent-400/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                <EnvelopeSimple size={20} weight="bold" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-foreground">Email</div>
                <div className="font-body text-sm text-muted">contact@g-lan.ch</div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/glan_officiel/"
              target="_blank"
              rel="noreferrer"
              className="glow-border flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-accent-400/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                <InstagramLogo size={20} weight="bold" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-foreground">Instagram</div>
                <div className="font-body text-sm text-muted">@glan_officiel</div>
              </div>
            </a>

            <a
              href="#"
              className="glow-border flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-accent-400/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                <DiscordLogo size={20} weight="bold" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-foreground">Discord</div>
                <div className="font-body text-sm text-muted">Rejoindre le serveur</div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
