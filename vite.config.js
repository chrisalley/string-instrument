import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'string-instrument',
      formats: ['es'],
      fileName: 'string-instrument'
    }
  },
  plugins: [dts({ tsconfigPath: './tsconfig.build.json', bundleTypes: true })]
})
