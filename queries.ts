import { sanity } from './sanity'
import type { Piece, SlugCollection } from './types'

const CHAMPS = `
  _id,
  nom,
  "slug": slug.current,
  images[]{ asset, alt, hotspot },
  collection,
  matieres,
  description,
  statut,
  ordre
`

/** Pieces visibles d'une collection donnee. */
export function piecesDeCollection(collection: SlugCollection): Promise<Piece[]> {
  return sanity.fetch(
    `*[_type == "piece" && statut == "visible" && collection == $collection]
      | order(ordre asc) { ${CHAMPS} }`,
    { collection },
  )
}

/** Pieces archivees, affichees sur /patrimoine. */
export function piecesPatrimoine(): Promise<Piece[]> {
  return sanity.fetch(
    `*[_type == "piece" && statut == "patrimoine"] | order(ordre asc) { ${CHAMPS} }`,
  )
}

/** Selection mise en avant sur l'accueil. */
export function piecesMisesEnAvant(limite = 6): Promise<Piece[]> {
  return sanity.fetch(
    `*[_type == "piece" && statut == "visible"] | order(ordre asc)[0...$limite] { ${CHAMPS} }`,
    { limite },
  )
}

/** Pieces sur-mesure : visibles et rattachees a aucune collection. */
export function piecesSurMesure(): Promise<Piece[]> {
  return sanity.fetch(
    `*[_type == "piece" && statut == "visible" && !defined(collection)]
      | order(ordre asc) { ${CHAMPS} }`,
  )
}

/** Une piece par son slug. */
export function pieceParSlug(slug: string): Promise<Piece | null> {
  return sanity.fetch(
    `*[_type == "piece" && slug.current == $slug][0] { ${CHAMPS} }`,
    { slug },
  )
}
