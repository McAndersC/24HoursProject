const devMode = (process.env.NODE_ENV === 'development');
console.log(`${ devMode ? 'development' : 'production' } mode bundle`);

import minify from 'rollup-plugin-babel-minify';

import livereload from 'rollup-plugin-livereload'

export default {
    input: 'src/js/index.js',
    plugins: [
        minify( {
            // Options for babel-minify.
        } ),
        devMode ? livereload({delay: 100}) : null
    ],
    output: {
      file: 'build/public/index.js',
      format: 'iife'
    }
  };