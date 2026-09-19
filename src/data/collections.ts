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
    couverture: '/assets/image00016.png',
    couvertureAlt:
      'Main portant plusieurs bagues en argent aux formes anguleuses, devant un visage.',
    couvertureLargeur: 3456,
    couvertureHauteur: 5184,
  },
  {
    slug: 'new-chivalry',
    nom: 'New Chivalry',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/assets/image00017.png',
    couvertureAlt:
      'Buste en veste noire, mains ornees de bagues, bracelets et chaines en argent.',
    couvertureLargeur: 4908,
    couvertureHauteur: 3272,
  },
  {
    slug: 'memento-mori',
    nom: 'Memento Mori',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/assets/image00015.PNG',
    couvertureAlt:
      'Pendentif cisele en forme de coeur anatomique, suspendu a des chaines en argent, en noir et blanc.',
    couvertureLargeur: 813,
    couvertureHauteur: 1219,
  },
  {
    slug: 'bestiaire',
    nom: 'Bestiaire',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/assets/image00012.PNG',
    couvertureAlt:
      'Croquis au fusain de deux projets de bijoux inspires de formes animales.',
    couvertureLargeur: 3456,
    couvertureHauteur: 4320,
  },
]

export function collectionParSlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug)
}
