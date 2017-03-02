import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

let targets = [
  { dest: 'dist/{{ name }}.common.js', format: 'cjs' }
]

if (process.env.BUILD) {
  targets = targets.concat([
    { dest: 'dist/{{ name }}.js', format: 'umd' },
    { dest: 'dist/{{ name }}.es5.js', format: 'es' }
  ])
}

export default {
  entry: 'src/index.js',
  plugins: [buble(), nodeResolve(), commonjs()],
  moduleName: '{{ name }}',
  targets: targets
}
