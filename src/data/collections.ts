import type { SlugCollection } from '@/lib/types'

export interface Collection {
  slug: SlugCollection
  nom: string
  /** Une phrase, affichee sous le titre sur /collections */
  accroche: string
  /** Texte d introduction de la page detail. A REDIGER AVEC LUCAS. */
  introduction: string
  /** Chemin d une image locale dans /public/assets/ */
  couverture: string
  /** Texte alternatif de la couverture, en francais. */
  couvertureAlt: string
  /** Dimensions reelles du fichier, pour reserver la place au chargement. */
  couvertureLargeur: number
  couvertureHauteur: number
}

/**
 * Les 4 collections sont figees, volontairement hors CMS.
 * Ajouter une cinquieme collection demande une intervention de dev.
 */
export const COLLECTIONS: Collection[] = [
  {
    slug: 'chevalieres',
    nom: 'Chevalieres',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/assets/cover-chevalieres.png',
    couvertureAlt:
      'Main portant des chevalieres en argent aux formes anguleuses, reliees par une chaine a un pendentif, devant un visage.',
    couvertureLargeur: 1728,
    couvertureHauteur: 1125,
  },
  {
    slug: 'new-chivalry',
    nom: 'New Chivalry',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/assets/inspiration-01.jpg',
    couvertureAlt:
      'Buste en veste noire, mains couvertes de bagues, bracelets et chaines en argent.',
    couvertureLargeur: 2400,
    couvertureHauteur: 1600,
  },
  {
    slug: 'memento-mori',
    nom: 'Memento Mori',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/assets/campagne-chaines.jpg',
    couvertureAlt:
      'Pendentif cisele en forme de coeur, suspendu a plusieurs chaines en argent portees a meme la peau, en noir et blanc.',
    couvertureLargeur: 1600,
    couvertureHauteur: 2400,
  },
  {
    slug: 'bestiaire',
    nom: 'Bestiaire',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/assets/atelier-croquis.jpg',
    couvertureAlt:
      'Lucas Hage dessine au fusain deux projets de bijoux animaliers sur un carnet pose sur ses genoux.',
    couvertureLargeur: 1920,
    couvertureHauteur: 2400,
  },
]

export function collectionParSlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug)
}
