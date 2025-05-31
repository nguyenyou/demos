import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig(() => {
  const isWatchMode = process.argv.includes('--watch');
  
  return {
    build: {
      lib: {
        entry: resolve(__dirname, './src/index.ts'),
        name: 'demoBox',
        fileName: 'index',
      },
      rollupOptions: {
        external: ['vue', 'markdown-it', 'fs', 'path', 'react', 'react-dom', 'sass', 'shiki'],
        output: {
          globals: {
            vue: 'Vue',
            fs: 'fs',
          },
        },
      },
      emptyOutDir: !isWatchMode,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      dts({
        entryRoot: 'src/markdown',
        rollupTypes: true,
        strictOutput: true,
      }),
    ],
  };
});
