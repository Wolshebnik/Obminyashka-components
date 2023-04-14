const svgr = require('@svgr/rollup');
const url = require('@rollup/plugin-url');
const json = require('@rollup/plugin-json');
const image = require('@rollup/plugin-image');
const postcss = require('rollup-plugin-postcss');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      interop: 'auto',
      exports: 'named',
      preserveModules: true,
    },
  ],
  plugins: [
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
    postcss({
      extract: 'index.css',
      modules: true,
      use: ['sass'],
      minimize: true,
    }),

    url(),
    json(),
    image(),
    commonjs(),
    nodeResolve(),
    peerDepsExternal(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ['src/setupTests.ts', '**/*.stories.tsx'],
      },
    }),
  ],
  external: ['react', 'react-dom'],
};
