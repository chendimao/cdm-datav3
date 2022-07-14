import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { resolve } from "path";

console.log(__dirname);
export default defineConfig({
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "../src")
        }
    },
})