import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const plugins = [typescript(), terser()];

export default [
	// ES module
	{
		input: "src/index.ts",
		output: {
			file: "dist/index.js",
			format: "esm",
		},
		plugins,
	},
	// ES module again but with an .esm.js extension
	{
		input: "src/index.ts",
		output: {
			file: "dist/index.esm.js",
			format: "esm",
		},
		plugins,
	},
	// CommonJS module (Node.js)
	{
		input: "src/index.ts",
		output: {
			// name: 'dist/index.cjs',
			file: "dist/index.cjs",
			format: "cjs",
			exports: "default",
		},
		plugins,
	},
	// UMD (browser script tag)
	{
		input: "src/index.ts",
		output: {
			name: "index",
			file: "dist/index.min.js",
			format: "umd",
			extend: true,
			globals: {
				WaveSurfer: "WaveSurfer",
			},
			exports: "default",
		},
		external: ["WaveSurfer"],
		plugins,
	},

	// Compiled type definitions
	{
		input: "./dist/index.d.ts",
		output: [{ file: "dist/types.d.ts", format: "es" }],
		plugins: [dts()],
	},
];
