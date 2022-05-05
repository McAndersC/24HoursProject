import minify from 'rollup-plugin-babel-minify';

import livereload from 'rollup-plugin-livereload'

export default {
    input: 'src/js/index.js',
    plugins: [
        minify( {
            // Options for babel-minify.
        } ),
        livereload({delay: 100})
    ],
    output: {
      file: 'build/public/index.js',
      format: 'iife'
    }
  };