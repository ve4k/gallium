import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";

const production = false;

export default {
	input: "svelte/main.js",
	output: {
		sourcemap: true,
		format: "iife",
		name: "app",
		file: "public/build/bundle.js"
	},
	plugins: [
		svelte({
			compilerOptions: {
				dev: !production
			}
		}),
		css({ output: "bundle.css" }),

		resolve({
			browser: true,
			dedupe: ["svelte"]
		}),
		commonjs(),

		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
