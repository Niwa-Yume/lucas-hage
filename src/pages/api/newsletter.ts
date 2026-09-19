import type { APIRoute } from 'astro'

export const prerender = false

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const POST: APIRoute = async ({ request }) => {
  let email: unknown

  try {
    const corps = await request.json()
    email = corps?.email
  } catch {
    return json({ erreur: 'Requête invalide.' }, 400)
  }

  if (typeof email !== 'string' || !EMAIL.test(email)) {
    return json({ erreur: 'Adresse email invalide.' }, 400)
  }

  const cle = import.meta.env.BREVO_API_KEY
  const liste = Number(import.meta.env.BREVO_LIST_ID)
  const modele = Number(import.meta.env.BREVO_DOI_TEMPLATE_ID)

  if (!cle || !liste || !modele) {
    console.error('Newsletter : variables Brevo manquantes.')
    return json({ erreur: 'Inscription indisponible pour le moment.' }, 500)
  }

  // Double opt-in : Brevo envoie l'email de confirmation, le contact n'est
  // ajouté à la liste qu'après le clic. Requis pour la conformité.
  const reponse = await fetch(
    'https://api.brevo.com/v3/contacts/doubleOptinConfirmation',
    {
      method: 'POST',
      headers: {
        'api-key': cle,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        includeListIds: [liste],
        templateId: modele,
        redirectionUrl: 'https://lucas-hage.com/?inscription=confirmee',
      }),
    },
  )

  // 201 = demande envoyée. 204 = contact déjà connu.
  if (reponse.ok) {
    return json({ ok: true })
  }

  const detail = await reponse.text()
  console.error('Newsletter : Brevo a refusé la demande.', reponse.status, detail)
  return json({ erreur: "L'inscription n'a pas abouti. Réessayez plus tard." }, 502)
}

function json(corps: unknown, statut: number) {
  return new Response(JSON.stringify(corps), {
    status: statut,
    headers: { 'content-type': 'application/json' },
  })
}
