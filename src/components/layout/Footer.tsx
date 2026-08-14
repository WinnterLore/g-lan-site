import { NavLink } from 'react-router-dom'
import { InstagramLogo, DiscordLogo } from '@phosphor-icons/react'
import { Logo } from './Logo'

const LINKS = [
  { to: '/editions', label: 'Éditions' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 font-body text-sm leading-relaxed text-muted">
              Un événement créé par 4 amis passionnés de jeux vidéo, pour rassembler et promouvoir le
              gaming en Suisse romande.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                Navigation
              </span>
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
                Suivre
              </span>
              <a
                href="https://www.instagram.com/glan_officiel/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-body text-sm text-muted transition-colors hover:text-foreground"
              >
                <InstagramLogo size={16} /> Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 font-body text-sm text-muted transition-colors hover:text-foreground"
              >
                <DiscordLogo size={16} /> Discord
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 font-mono text-xs text-muted-2 md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} G-LAN. Suisse romande.</span>
        </div>
      </div>
    </footer>
  )
}
