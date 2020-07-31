import { nodeResolve } from "@rollup/plugin-node-resolve"

export default {
    input: "src/pca.js",
    output: {
        dir: "dist",
        format: "es",
    },
    plugins: [nodeResolve()]
}