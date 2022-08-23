import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    build: {
        outDir: "build",
        rollupOptions: {
            external: [/^node:.*/],
        },
    },
    plugins: [
        react(),
        tsconfigPaths(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
});
