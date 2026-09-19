# Lucas Hage — site vitrine

Astro 5 en SSR Node, contenu dans Sanity, hébergé sur un site Node.js Infomaniak.
Les conventions du projet sont dans `AGENTS.md`. Lis-le avant de coder.

## Démarrage

```bash
npm install
cp .env.example .env    # puis remplis les valeurs
npm run dev
```

## Studio Sanity

```bash
cd sanity
npm install
npx sanity login
npx sanity init --project-plan free    # récupère le projectId
npm run dev                            # http://localhost:3333
```

Une fois le schéma validé et les pièces saisies :

```bash
npm run deploy                         # https://lucashage.sanity.studio
```

Reporte le `projectId` dans le `.env` racine (`PUBLIC_SANITY_PROJECT_ID`) et dans
un `.env` du dossier `sanity/` (`SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`).

## Contenu à saisir

Les 12 pièces existantes, reprises du site actuel :

| Collection | Pièces |
|---|---|
| Chevalières | Épuré · Gravure & émail · Corrosion & pierres |
| New Chivalry | Petit shield · Pointe M · Shield 01 |
| Memento Mori | Halmet · Hamlet oxydé · Tempus fugit |
| Bestiaire | Chat · Lion · Poulpe |

Le patrimoine s'ajoute ensuite avec le statut `patrimoine`.

## Production — site Node.js Infomaniak

Manager Infomaniak → hébergement → Ajouter → Node.js → import depuis le dépôt Git.

| Réglage | Valeur |
|---|---|
| Dossier d'exécution | `./` |
| Commande de build | `npm install && npm run build` |
| Commande de démarrage | `node ./dist/server/entry.mjs` |
| Version Node | LTS récente |
| Port | celui attribué par le Manager |

L'adaptateur standalone lit `process.env.PORT` tout seul. Après chaque changement
de configuration, il faut redémarrer l'application depuis le tableau de bord.

Variables d'environnement à déclarer dans le Manager : celles du `.env.example`.

Les publications de Lucas dans Sanity apparaissent sans redémarrage : le contenu
est lu à chaque rendu.

## Reste à faire

- [ ] Remplacer les tokens de `src/styles/global.css` par ceux de la Figma
- [ ] Rédiger accroches et introductions dans `src/data/collections.ts`
- [ ] Déposer les 4 images de couverture dans `public/collections/`
- [ ] Layout, header, footer, CTA collant mobile
- [ ] Accueil, collections, détail, patrimoine
- [ ] Configurateur React + lien WhatsApp
- [ ] Pages statiques et mentions légales
- [ ] Brancher la newsletter au formulaire
- [ ] SEO : titres, meta, Open Graph
- [ ] Bascule du domaine, Loom de formation
# lucas-hage
