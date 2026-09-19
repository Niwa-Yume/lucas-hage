import type { SlugCollection } from '@/lib/types'

export interface Collection {
  slug: SlugCollection
  nom: string
  /** Une phrase, affichee sous le titre sur /collections */
  accroche: string
  /** Texte d introduction de la page detail. A REDIGER AVEC LUCAS. */
  introduction: string
  /** Chemin d une image locale dans /public/collections/ */
  couverture: string
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
    couverture: '/collections/chevalieres.jpg',
  },
  {
    slug: 'new-chivalry',
    nom: 'New Chivalry',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/collections/new-chivalry.jpg',
  },
  {
    slug: 'memento-mori',
    nom: 'Memento Mori',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/collections/memento-mori.jpg',
  },
  {
    slug: 'bestiaire',
    nom: 'Bestiaire',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/collections/bestiaire.jpg',
  },
]

export function collectionParSlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug)
}
