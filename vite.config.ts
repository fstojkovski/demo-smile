import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isVercel = !!process.env.VERCEL

const config = defineConfig({
  plugins: [
    !isVercel && devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      server: {
        preset: isVercel ? 'vercel' : undefined,
      },
    }),
    viteReact(),
  ],
})

export default config
