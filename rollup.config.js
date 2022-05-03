import minify from 'rollup-plugin-babel-minify';

export default {
    input: 'src/js/index.js',
    plugins: [
        minify( {
            // Options for babel-minify.
        } )
    ],
    output: {
      file: 'build/public/index.js',
      format: 'iife'
    }
  };