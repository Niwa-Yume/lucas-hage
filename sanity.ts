import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { ImagePiece } from './types'

export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: '2026-01-01',
  // CDN : indispensable, le site interroge Sanity à chaque rendu.
  useCdn: true,
})

const builder = imageUrlBuilder(sanity)

/**
 * Construit une URL d'image optimisee.
 * Toujours passer une largeur explicite : jamais d'original servi au visiteur.
 */
export function urlFor(image: ImagePiece, largeur: number) {
  return builder.image(image).width(largeur).fit('max').auto('format').url()
}

/** Jeu de sources responsive pour un <img srcset>. */
export function srcSetFor(image: ImagePiece, largeurs = [480, 768, 1200, 1800]) {
  return largeurs.map((l) => `${urlFor(image, l)} ${l}w`).join(', ')
}
