# G-LAN

Site du G-LAN, une compétition gaming et e-sport de Suisse romande créée par 4 amis.

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- Motion (Framer Motion) pour les transitions
- React Three Fiber / Three.js pour les effets 3D
- React Router

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## À faire avant mise en ligne

- Remplacer les photos placeholder (picsum) par les vraies photos des éditions, dans `src/assets/gallery`.
- Ajouter le logo réel d'Emmaüs Fribourg dans `src/assets/sponsors` et le référencer dans `src/data/sponsors.ts`.
- Confirmer l'adresse email et le lien Discord réels dans `src/pages/Contact.tsx` et `src/components/layout/Footer.tsx`.
- Brancher le formulaire de contact à un vrai service d'envoi (actuellement simulé côté client).
