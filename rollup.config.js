import path from 'path'
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from "rollup-plugin-uglify";
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: {
    file: pkg.main,
    format: 'cjs'
  },
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true
    }),
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      exclude: 'node_modules/**'
    }),
    json(),
    uglify()
  ]
};