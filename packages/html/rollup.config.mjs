import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { resolve as resolveTslib } from 'path'; // Used to resolve tslib paths
import { readFileSync } from 'fs';
const pkg = JSON.parse(readFileSync('./package.json'));

const copyrightBanner = `
/*!
 * Material Tailwind JavaScript/TypeScript Library v${pkg.version}
 * (c) ${new Date().getFullYear()} Material Tailwind - Creative Tim
 * Released under the MIT License.
 * Written in TypeScript, usable in both JavaScript and TypeScript projects.
 */
`;

const tslibPath = resolveTslib('node_modules/tslib/tslib.es6.js');

const inputFile = 'src/index.ts'; // Entry file
const outputDir = 'dist'; // Output directory

export default [
  // UMD Build (Non-minified)
  {
    input: inputFile,
    output: {
      file: `${outputDir}/material-tailwind.js`,
      format: 'umd', // Universal Module Definition
      name: 'MaterialTailwind', // Global variable for browsers
      exports: 'named', // Ensure named exports
      sourcemap: true,
      banner: copyrightBanner,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        tslib: tslibPath,
      }),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
      }),
    ],
  },
  // UMD Build (Minified)
  {
    input: inputFile,
    output: {
      file: `${outputDir}/material-tailwind.min.js`,
      format: 'umd',
      name: 'MaterialTailwind',
      exports: 'named',
      sourcemap: true,
      banner: copyrightBanner,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        tslib: tslibPath,
      }),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
      }),
      terser(), // Minify the output
    ],
  },
  // ES Module Build
  {
    input: inputFile,
    output: {
      file: `${outputDir}/material-tailwind.esm.js`,
      format: 'esm', // ES module format
      sourcemap: true,
      banner: copyrightBanner,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        tslib: tslibPath,
        useTsconfigDeclarationDir: true,
      }),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
      }),
    ],
  },
];
