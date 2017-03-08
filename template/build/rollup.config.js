const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const version = process.env.VERSION || require('../package.json').version

module.exports = {
  entry: process.env.ESM ? 'src/index.esm.js' : 'src/index.js',
  dest: process.env.ESM ? 'dist/{{ name }}.esm.js' : 'dist/{{ name }}.js',
  format: process.env.ESM ? 'es' : 'umd',
  moduleName: '{{ name }}',
  plugins: [
    replace({ __VERSION__: version }),
    buble()
  ],
  banner:
`/**
 * {{ name }} v${version}
 * (c) ${new Date().getFullYear()} Limichange
 * @license MIT
 */`
}
