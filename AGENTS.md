# AGENTS.md — Lucas Hage

Site vitrine pour Lucas Hage, créateur et artisan suisse de bijoux sur mesure,
atelier à Genève (quartier des Grottes).

Objectif du site : présenter les pièces et convertir en prise de contact WhatsApp.
Pas de vente en ligne, pas de panier, pas de paiement, pas de compte utilisateur.

---

## Règles non négociables

1. **Astro par défaut.** Un composant `.astro` sauf si l'interactivité client est
   indispensable. Le seul island React prévu est le configurateur.
2. **N'ajoute aucune dépendance** sans demander. Le stack ci-dessous est fermé.
3. **Pas de `localStorage`, pas de cookie, pas d'analytics.** Le site ne collecte
   rien à part l'email de la newsletter.
4. **Pas de formulaire de contact.** La conversion passe par un lien `wa.me`.
   Le seul `<form>` du site est la newsletter.
5. **Français partout** : contenu, commentaires, noms de variables métier
   (`piece`, `collection`, `matiere`, `patrimoine`).
6. **Un composant par tâche.** Ne génère jamais plusieurs pages d'un coup.

## Stack

| Poste | Choix |
|---|---|
| Framework | Astro 5, `output: 'server'` |
| Adaptateur | `@astrojs/node` mode `standalone` |
| Styles | Tailwind CSS v4 (config CSS-first dans `src/styles/global.css`) |
| Interactif | React 19, uniquement en island `client:load` |
| CMS | Sanity (dataset public, `useCdn: true`) |
| Newsletter | Brevo via `/api/newsletter` |
| Hébergement | Site Node.js Infomaniak |

## Architecture

```
src/
  components/     .astro par défaut, React seulement si island
  data/           collections.ts — les 4 collections, en dur
  layouts/        Layout.astro — <head>, SEO, structure
  lib/            sanity.ts, queries.ts, whatsapp.ts, types.ts
  pages/          une route = un fichier
  styles/         global.css — tokens Tailwind v4
sanity/           Studio séparé, déployé sur *.sanity.studio
```

## Modèle de contenu

Un seul type Sanity : `piece`.

| Champ | Type | Note |
|---|---|---|
| `nom` | string | requis |
| `slug` | slug | généré depuis `nom` |
| `images` | image[] | hotspot activé, `alt` requis |
| `collection` | string \| null | liste fermée, **optionnel** = pièce sur-mesure |
| `matieres` | string[] | liste fermée |
| `description` | text | |
| `statut` | string | `visible` \| `patrimoine` \| `masquee` |
| `ordre` | number | tri ascendant |

Les 4 collections sont **en dur** dans `src/data/collections.ts`. Elles ne sont pas
éditables depuis le CMS. Ne crée pas de type `collection` dans Sanity.

`patrimoine` est un statut, pas un type. Une pièce basculée en `patrimoine`
disparaît de sa collection et apparaît sur `/patrimoine`. Jamais de duplication.

## Pages

```
/                        Accueil
/qui-suis-je
/collections
/collections/[slug]      chevalieres | new-chivalry | memento-mori | bestiaire
/patrimoine
/inspiration
/contact
/mentions-legales
/politique-confidentialite
```

Accueil, dans l'ordre : hero → grille des 4 collections → sélection de pièces →
teaser « Qui suis-je » → newsletter → footer.

## Direction artistique

Issue de la maquette Figma. **Suis-la, ne l'interprète pas.**

- Fond blanc, texte noir, contraste franc. Pas de gris tiède, pas de crème.
- La photographie porte la page. Le texte est discret et laisse la place aux images.
- Les libellés d'interface sont **en capitales** avec interlettrage ouvert
  (`FORMULAIRE DE CONTACT`, `MATIÈRE`, `TAILLE`, `BAGUES`). C'est un choix de la
  maquette, applique-le.
- Photo produit sur fond noir, photo campagne en pleine largeur.
- Pas d'arrondis sur les images ni les boutons. Angles vifs.
- Pas d'ombres portées. La hiérarchie vient de l'espace et du contraste.
- Aucune animation d'apparition au scroll. Les transitions ne répondent qu'à une
  action (ouverture d'une modale, changement d'étape du configurateur).

## Qualité

- Responsive mobile d'abord. Le CTA WhatsApp est collant en bas sur mobile.
- Focus clavier visible sur tout élément interactif.
- `prefers-reduced-motion` respecté.
- Toute image passe par `urlFor()` avec largeur explicite et `format('webp')`.
  Jamais d'URL Sanity brute dans un `<img>`.
- `alt` obligatoire sur chaque image.
- Longueur de ligne sous 75 caractères pour le texte courant.

## Interdits

- `localStorage`, `sessionStorage`, cookies
- Analytics, pixels, scripts tiers
- Bibliothèque de composants générique (shadcn) : le site est éditorial, pas applicatif
- Emojis dans l'interface
- Texte de remplissage type lorem ipsum : utilise les vraies pièces
