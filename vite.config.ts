import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config.js'

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
  },
})
