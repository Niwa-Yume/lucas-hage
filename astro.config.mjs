import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
    site: 'https://lucas-hage.com',
    output: 'server',
    // Vercel définit VERCEL=1 pendant son build ; ailleurs (local, Infomaniak) on garde Node.
    adapter: process.env.VERCEL ? vercel() : node({ mode: 'standalone' }),
    integrations: [react(), sitemap()],
    // Patrimoine vit désormais sous /collections : on garde l'ancienne adresse.
    redirects: {
        '/patrimoine': '/collections/patrimoine',
    },
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    },
})