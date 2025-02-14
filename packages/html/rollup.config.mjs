import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
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

const inputFile = 'src/index.ts'; // Entry file
const outputDir = 'dist'; // Output directory

export default [
  // First config - generates JavaScript and initial declarations
  {
    input: 'src/index.ts',
    output: [
      {
        file: `${outputDir}/material-tailwind.umd.js`,
        format: 'umd',
        name: 'MaterialTailwind',
        exports: 'named',
        sourcemap: true,
        banner: copyrightBanner,
      }
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,  // Generate declarations
        declarationDir: './dist'  // Put them in dist
      }),
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
      }),
    ]
  },
  // UMD Build (Minified)
  {
    input: inputFile,
    output: {
      file: `${outputDir}/material-tailwind.umd.min.js`,
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
        declarationDir: './dist/dts'
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
      exports: 'named',
      sourcemap: true,
      banner: copyrightBanner,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        useTsconfigDeclarationDir: true,
      }),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
      }),
    ],
  },
  // CommonJS Build
  {
    input: inputFile,
    output: {
      file: `${outputDir}/material-tailwind.cjs.js`,
      format: 'cjs', // CommonJS format
      exports: 'named',
      sourcemap: true,
      banner: copyrightBanner,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
      }),
    ],
  },
];
