import type { SlugCollection } from '@/lib/types'

/** Photo locale montree sur la page d'une collection. */
export interface PhotoCollection {
  src: string
  alt: string
  largeur: number
  hauteur: number
}

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
  /** Cadrage CSS (object-position) quand la couverture est recadree. Centre par defaut. */
  couverturePosition?: string
  /**
   * TEMPORAIRE : photos en dur, affichees tant que Sanity ne renvoie
   * aucune piece pour la collection. A migrer en pieces Sanity.
   */
  photos?: PhotoCollection[]
}

/**
 * Les 4 collections sont figees, volontairement hors CMS.
 * Ajouter une cinquieme collection demande une intervention de dev.
 * Patrimoine n'en fait pas partie : c'est un statut de piece, presente
 * a part sur /collections et sur /collections/patrimoine.
 *
 * New chivalry reprend l'ancienne image du bandeau, A CONFIRMER.
 */
export const COLLECTIONS: Collection[] = [
  {
    slug: 'new-chivalry',
    nom: 'New chivalry',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    // Les deux premieres collections sont les bandeaux pleine largeur de
    // l'accueil, d'ou des images en paysage.
    // A CONFIRMER : image reprise de l'ancien bandeau, en attendant
    // l'image d'accueil de l'ancien site.
    couverture: '/assets/cover-chevalieres.png',
    couvertureAlt:
      'Main portant des chevalieres en argent aux formes anguleuses, reliees par une chaine a un pendentif, devant un visage.',
    couvertureLargeur: 1728,
    couvertureHauteur: 1125,
    photos: [
      {
        src: '/assets/new-chivalry/new-chivalry-01.jpg',
        alt: "Chevaliere en metal clair gravee d'un trois-mats sur une mer emaillee bleu et vert, posee sur un bloc de beton brut.",
        largeur: 2560,
        hauteur: 1706,
      },
      {
        src: '/assets/new-chivalry/new-chivalry-02.jpg',
        alt: "Bague en metal sombre, bouillonnante d'alveoles serties de pierres ambrees, posee sur un bloc de beton brut.",
        largeur: 2560,
        hauteur: 1707,
      },
      {
        src: '/assets/new-chivalry/new-chivalry-03.jpg',
        alt: "Chevaliere en metal clair au plateau en ecusson grave d'armoiries, posee sur un bloc de beton brut.",
        largeur: 2560,
        hauteur: 1706,
      },
    ],
  },
  {
    slug: 'terrible-beaute',
    nom: 'Terrible beauté',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/assets/cover-terrible-beaute.webp',
    couvertureAlt:
      "Profil d'une femme aux cheveux boucles releves, traverses de longues epingles fines qui rayonnent autour de sa tete, sur fond bleu canard.",
    couvertureLargeur: 1728,
    couvertureHauteur: 857,
    // Image en paysage recadree en portrait : on garde le visage, a droite.
    couverturePosition: '75% center',
    photos: [
      {
        src: '/assets/terrible-beaute/terrible-beaute-01.jpg',
        alt: "Bague en metal clair vue de profil, saphir bleu et pierre blanche sertis sur un dome alveole termine en pointe, posee sur un bloc de pierre.",
        largeur: 2000,
        hauteur: 1333,
      },
      {
        src: '/assets/terrible-beaute/terrible-beaute-02.jpg',
        alt: "La meme bague de trois quarts sur une pierre claire : saphir bleu ovale, pierre blanche en poire, maillage alveole et pointe effilee.",
        largeur: 2000,
        hauteur: 1600,
      },
      {
        src: '/assets/terrible-beaute/terrible-beaute-03.jpg',
        alt: "La meme bague vue de face sur un bloc de pierre, deux pointes se rejoignant sous le saphir bleu.",
        largeur: 2000,
        hauteur: 1333,
      },
      {
        src: '/assets/terrible-beaute/terrible-beaute-04.jpg',
        alt: "Bague a saphir rose tenu par des griffes dorees, au coeur de petales ondules et d'un fond alveole, vue de face sur une pierre claire.",
        largeur: 2000,
        hauteur: 1333,
      },
      {
        src: '/assets/terrible-beaute/terrible-beaute-05.jpg',
        alt: "La meme bague a saphir rose de trois quarts, ses flancs paves de pierres sombres.",
        largeur: 2000,
        hauteur: 1333,
      },
      {
        src: '/assets/terrible-beaute/terrible-beaute-06.jpg',
        alt: "Bague doree vue par-dessous, l'interieur alveole serti de pierres jaunes, posee sur un bloc de pierre.",
        largeur: 2000,
        hauteur: 1333,
      },
      {
        src: '/assets/terrible-beaute/terrible-beaute-07.jpg',
        alt: "Bague en metal clair en forme d'armure a ecailles, une opale verte sertie dans un maillage ajoure, posee sur une pierre brulee.",
        largeur: 2000,
        hauteur: 1333,
      },
      {
        src: '/assets/terrible-beaute/terrible-beaute-08.jpg',
        alt: "La bague a saphir rose et petales ondules vue de face, en gros plan, sur une pierre sombre.",
        largeur: 1333,
        hauteur: 2000,
      },
    ],
  },
  {
    slug: 'memento-mori',
    nom: 'Memento mori',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    // Fichier en basse definition (360 x 467) : a remplacer par l'original.
    couverture: '/assets/cover-memento-mori.png',
    couvertureAlt:
      "Chevaliere en argent ornee d'un crane, sur un large chaton noir borde de griffes, posee sur une surface noire qui la reflete.",
    couvertureLargeur: 360,
    couvertureHauteur: 467,
    photos: [
      {
        src: '/assets/memento-mori/memento-mori-01.jpg',
        alt: "Bague en forme de crane en metal clair poli, posee sur un bloc de beton brut.",
        largeur: 2560,
        hauteur: 1707,
      },
      {
        src: '/assets/memento-mori/memento-mori-02.jpg',
        alt: "Chevaliere en metal clair ornee d'un squelette aux ailes repliees, posee sur un bloc de beton brut.",
        largeur: 2560,
        hauteur: 1707,
      },
    ],
  },
  {
    slug: 'alien',
    nom: 'Alien',
    accroche: 'A REDIGER',
    introduction: 'A REDIGER',
    couverture: '/assets/cover-alien.jpg',
    couvertureAlt:
      "Bague en argent sertie d'une opale translucide aux reflets bleus, l'anneau strie de cotes alveolees, posee au bord d'un bloc de beton sur fond noir.",
    couvertureLargeur: 2000,
    couvertureHauteur: 1333,
    // Image en paysage recadree en portrait : la bague est a gauche.
    couverturePosition: '30% center',
    photos: [
      {
        src: '/assets/alien/alien-01.jpg',
        alt: "Bague en metal clair, saphir rose serti au coeur de petales et de cotes pavees de pierres sombres, posee sur un bloc de pierre.",
        largeur: 1600,
        hauteur: 1066,
      },
      {
        src: '/assets/alien/alien-02.jpg',
        alt: "Bague doree sertie d'une opale de feu brute aux reflets orange, vue de trois quarts sur un bloc de pierre.",
        largeur: 1600,
        hauteur: 1066,
      },
      {
        src: '/assets/alien/alien-03.jpg',
        alt: "La meme bague a l'opale de feu, vue de face, tenue par des griffes dorees en forme de petales.",
        largeur: 1600,
        hauteur: 1066,
      },
      {
        src: '/assets/alien/alien-04.jpg',
        alt: "Chevaliere doree a facettes, son plateau en metal martele, dressee de profil sur un bloc de pierre.",
        largeur: 1600,
        hauteur: 1066,
      },
      {
        src: '/assets/alien/alien-05.jpg',
        alt: "La meme chevaliere a facettes, couchee, plateau martele vu du dessus.",
        largeur: 1600,
        hauteur: 1066,
      },
      {
        src: '/assets/alien/alien-06.jpg',
        alt: "Pendentif ajoure en forme de cage thoracique, seme de pierres violettes, suspendu a une chaine fine.",
        largeur: 1600,
        hauteur: 1066,
      },
      {
        src: '/assets/alien/alien-07.jpg',
        alt: "Pendentif ajoure en dentelle de metal, serti d'un cabochon violet, suspendu a une chaine fine.",
        largeur: 1600,
        hauteur: 1066,
      },
      {
        src: '/assets/alien/alien-08.jpg',
        alt: "Piece ajouree en forme d'aile, maillage de metal sombre et dore, sertie d'une pierre rouge, sur fond noir.",
        largeur: 1600,
        hauteur: 1066,
      },
      {
        src: '/assets/alien/alien-09.jpg',
        alt: "Bague sertie d'une opale translucide aux reflets bleus, l'anneau strie de cotes alveolees, posee au bord d'un bloc de beton.",
        largeur: 1600,
        hauteur: 1066,
      },
    ],
  },
]

/**
 * TEMPORAIRE : photos en dur de /collections/patrimoine, affichees tant
 * que Sanity ne renvoie aucune piece au statut patrimoine.
 */
export const PHOTOS_PATRIMOINE: PhotoCollection[] = [
  {
    src: '/assets/patrimoine/patrimoine-01.jpg',
    alt: "Bague tete de chat en metal sombre, un oeil serti d'une pierre rouge, posee sur un bloc de beton brut.",
    largeur: 2560,
    hauteur: 1706,
  },
  {
    src: '/assets/patrimoine/patrimoine-02.jpg',
    alt: "Bague tete de lion en metal patine, criniere ciselee, posee sur un bloc de beton brut.",
    largeur: 2560,
    hauteur: 1707,
  },
  {
    src: '/assets/patrimoine/patrimoine-03.png',
    alt: "Bague en metal clair ciselee de rinceaux, sertie d'une pierre orange taillee en rectangle, sur un fond noir qui la reflete.",
    largeur: 360,
    hauteur: 467,
  },
  {
    src: '/assets/patrimoine/patrimoine-04.png',
    alt: "Bague doree ciselee de volutes, sertie d'une pierre grenat entouree de petits diamants, sur un fond noir qui la reflete.",
    largeur: 360,
    hauteur: 467,
  },
]

export function collectionParSlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug)
}
