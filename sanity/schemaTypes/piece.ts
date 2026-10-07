import { defineField, defineType } from 'sanity'

/**
 * Seul type de contenu du site.
 * Les libellés sont rédigés pour Lucas, pas pour un développeur.
 */
export const piece = defineType({
  name: 'piece',
  title: 'Pièce',
  type: 'document',
  fields: [
    defineField({
      name: 'nom',
      title: 'Nom de la pièce',
      type: 'string',
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Adresse de la page',
      type: 'slug',
      description: 'Généré automatiquement. Ne le modifiez pas après publication.',
      options: { source: 'nom', maxLength: 96 },
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'images',
      title: 'Photos',
      type: 'array',
      description:
        'La première photo sert de vignette. Utilisez toujours le même cadrage ' +
        'pour toutes les pièces d’une même collection.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Description de la photo',
              type: 'string',
              description:
                'Décrit la photo pour les personnes malvoyantes et pour Google. ' +
                'Exemple : chevalière en argent gravée, portée à l’auriculaire.',
              validation: (r) => r.required(),
            },
          ],
        },
      ],
      validation: (r) => r.required().min(1),
    }),

    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'string',
      description: 'Laissez vide s’il s’agit d’une pièce unique ou sur mesure.',
      options: {
        list: [
          { title: 'Memento mori', value: 'memento-mori' },
          { title: 'Terrible beauté', value: 'terrible-beaute' },
          { title: 'New chivalry', value: 'new-chivalry' },
          { title: 'Alien', value: 'alien' },
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'matieres',
      title: 'Matières disponibles',
      type: 'array',
      description: 'Ce que le visiteur pourra choisir avant de vous écrire.',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Argent', value: 'argent' },
          { title: 'Or jaune', value: 'or-jaune' },
          { title: 'Or blanc', value: 'or-blanc' },
          { title: 'Or rose', value: 'or-rose' },
          { title: 'Bronze', value: 'bronze' },
        ],
      },
      validation: (r) => r.required().min(1),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'statut',
      title: 'Statut',
      type: 'string',
      description:
        'Visible : la pièce apparaît dans sa collection. ' +
        'Patrimoine : elle bascule sur la page Patrimoine. ' +
        'Masquée : elle disparaît du site sans être supprimée.',
      options: {
        list: [
          { title: 'Visible', value: 'visible' },
          { title: 'Patrimoine', value: 'patrimoine' },
          { title: 'Masquée', value: 'masquee' },
        ],
        layout: 'radio',
      },
      initialValue: 'visible',
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'ordre',
      title: 'Ordre d’affichage',
      type: 'number',
      description: 'Plus le nombre est petit, plus la pièce apparaît en premier.',
      initialValue: 100,
    }),
  ],

  orderings: [
    {
      title: 'Ordre d’affichage',
      name: 'ordreAsc',
      by: [{ field: 'ordre', direction: 'asc' }],
    },
  ],

  preview: {
    select: {
      title: 'nom',
      subtitle: 'collection',
      statut: 'statut',
      media: 'images.0',
    },
    prepare({ title, subtitle, statut, media }) {
      const etiquette =
        statut === 'patrimoine'
          ? 'Patrimoine'
          : statut === 'masquee'
            ? 'Masquée'
            : (subtitle ?? 'Sur mesure')
      return { title, subtitle: etiquette, media }
    },
  },
})
