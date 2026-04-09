import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    react: "src/react/index.ts",
  },
  format: ["esm"],       // Output dalam format ES Module
  dts: true,             // Menghasilkan file .d.ts untuk TypeScript
  minify: true,          // Mengecilkan ukuran file
  clean: true,           // Bersihkan folder dist setiap kali build
  external: ["react", "react-dom"], // Jangan masukkan react ke dalam bundle
  noExternal: [
    "class-variance-authority",
    "clsx",
    "tailwind-merge"
  ],
  sourcemap: true,
  treeshake: true,
});