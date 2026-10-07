export type Statut = 'visible' | 'patrimoine' | 'masquee'

export type SlugCollection =
  | 'memento-mori'
  | 'terrible-beaute'
  | 'new-chivalry'
  | 'alien'

export type Matiere = 'argent' | 'or-jaune' | 'or-blanc' | 'or-rose' | 'bronze'

export interface ImagePiece {
  asset: { _ref: string }
  alt: string
  hotspot?: { x: number; y: number }
}

export interface Piece {
  _id: string
  nom: string
  slug: string
  images: ImagePiece[]
  collection: SlugCollection | null
  matieres: Matiere[]
  description: string
  statut: Statut
  ordre: number
}
