import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  ],
  preserveModules: true,
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
    url(),
    image(),
    terser(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ['src/setupTests.ts', '**/*.stories.tsx'],
      },
    }),
  ],
  external: ['react', 'react-dom'],
};
