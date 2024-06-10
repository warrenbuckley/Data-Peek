import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // Entrypoint file (registers other manifests)
      formats: ["es"],
      fileName: 'data.peek',
    },
    outDir: '../Data.Peek/wwwroot', // your web component will be saved to the RCL project location and the RCL sets the path as App_Plugins/Data.Peek
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [/^@umbraco/],
    },
  },
});
