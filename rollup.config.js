const svgr = require('@svgr/rollup');
const dts = require('rollup-plugin-dts');
const url = require('@rollup/plugin-url');
const image = require('@rollup/plugin-image');
const terser = require('@rollup/plugin-terser');
const { babel } = require('@rollup/plugin-babel');
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
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      url(),
      image(),
      // terser(),
      commonjs(),
      nodeResolve(),
      svgr({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  mergePaths: false,
                },
              },
            },
            'prefixIds',
          ],
        },
      }),
      babel({ babelHelpers: 'bundled' }),
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
