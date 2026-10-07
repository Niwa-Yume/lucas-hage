import type { Matiere, Piece } from './types'

/** Numero de Lucas, public : affiche sur le site et utilise pour WhatsApp. */
export const TELEPHONE = {
  affiche: '078 242 32 92',
  lien: 'tel:+41782423292',
}

// Format wa.me : international, sans + ni espaces. La variable
// d environnement reste prioritaire si elle est definie.
const NUMERO = import.meta.env.PUBLIC_WHATSAPP_NUMBER || '41782423292'

const LIBELLES_MATIERE: Record<Matiere, string> = {
  argent: 'Argent',
  'or-jaune': 'Or jaune',
  'or-blanc': 'Or blanc',
  'or-rose': 'Or rose',
  bronze: 'Bronze',
}

/** Construit un lien wa.me avec un message pre-rempli. */
export function lienWhatsApp(message: string): string {
  return `https://wa.me/${NUMERO}?text=${encodeURIComponent(message)}`
}

/** CTA persistant du header et du sticky mobile. */
export function lienRendezVous(): string {
  return lienWhatsApp(
    'Bonjour, je souhaiterais prendre rendez-vous a l atelier.',
  )
}

/**
 * Sortie du configurateur.
 * `taille` vaut null si le visiteur ne la connait pas : on l ecrit
 * explicitement pour que Lucas sache qu il doit la faire mesurer.
 */
export function lienConfigurateur(
  piece: Pick<Piece, 'nom' | 'collection'>,
  matiere: Matiere,
  taille: number | null,
): string {
  const lignes = [
    'Bonjour, je vous contacte depuis votre site.',
    '',
    `Piece : ${piece.nom}`,
    `Matiere : ${LIBELLES_MATIERE[matiere]}`,
    taille === null
      ? 'Taille : je ne connais pas ma taille'
      : `Taille : ${taille}`,
  ]
  return lienWhatsApp(lignes.join('\n'))
}

/** Demande libre depuis la page contact, sans piece identifiee. */
export function lienSurMesure(): string {
  return lienWhatsApp(
    'Bonjour, je souhaiterais discuter d une piece sur mesure.',
  )
}

export interface DemandeRendezVous {
  prenom: string
  nom: string
  email: string
  telephone: string
  message: string
}

/**
 * Formulaire de la page contact : rien n est envoye ni stocke par le site,
 * le visiteur envoie lui-meme le message pre-rempli depuis WhatsApp.
 */
export function lienDemandeRendezVous(demande: DemandeRendezVous): string {
  const lignes = [
    'Bonjour, je souhaiterais prendre rendez-vous a l atelier.',
    '',
    `Nom : ${demande.prenom} ${demande.nom}`,
  ]
  if (demande.email) lignes.push(`Email : ${demande.email}`)
  if (demande.telephone) lignes.push(`Telephone : ${demande.telephone}`)
  lignes.push('', demande.message)
  return lienWhatsApp(lignes.join('\n'))
}
