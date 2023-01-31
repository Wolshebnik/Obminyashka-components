import svgr from '@svgr/rollup';
import dts from 'rollup-plugin-dts';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
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
    plugins: [dts()],
  },
];
