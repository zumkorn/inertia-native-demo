import react from '@vitejs/plugin-react'
import inertia from '@inertiajs/vite'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    inertia(),
    react(),
  ],
  // inertia-hotwire-native is linked via a file: dependency. Dedupe the shared
  // singletons so the package and the app use one Inertia router and one React.
  resolve: {
    dedupe: ['@inertiajs/core', '@inertiajs/react', 'react', 'react-dom'],
  },
})
