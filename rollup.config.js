import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import uglify from 'rollup-plugin-uglify';
import minify from 'rollup-plugin-babel-minify';

export default {
  entry: 'src/app.mjs',
  dest: 'build/src/app.mjs',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    uglify(),
    minify(),
    babel({
      exclude: 'node_modules/**'
    }),
    copy({
      'index.html': 'build/index.html',
      'images/': 'build/images/',
      'browserconfig.xml': 'build/browserconfig.xml',
      'favicon.ico': 'build/favicon.ico',
      'favicon-16x16.png': 'build/favicon-16x16.png',
      'favicon-32x32.png': 'build/favicon-32x32.png',
      'manifest.json': 'build/manifest.json',
      'service-worker.js': 'build/service-worker.js',
      verbose: true
    })
  ]
};
