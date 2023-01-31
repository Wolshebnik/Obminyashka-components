const svgr = require('@svgr/rollup');
const dts = require('rollup-plugin-dts');
const url = require('@rollup/plugin-url');
const image = require('@rollup/plugin-image');
const terser = require('@rollup/plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      url(),
      image(),
      terser(),
      commonjs(),
      nodeResolve(),
      svgr({ icon: true }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx'],
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
  },
];
