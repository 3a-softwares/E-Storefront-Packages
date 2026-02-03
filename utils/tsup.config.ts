import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    client: 'src/client.ts',
    server: 'src/validation/server.ts',
    backend: 'src/backend.ts'
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  splitting: false,

  external: ['axios', 'express', 'express-validator', '@3asoftwares/types']
});
