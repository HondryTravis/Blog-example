import path from 'path'
import typescript from 'rollup-plugin-typescript2'
const { terser } = require('rollup-plugin-terser')
import nodeResolve from '@rollup/plugin-node-resolve'

const OUTPUT_IIFE = 'iife';

const entryFile = './src/index.ts'

const name = 'learning'

const outputConfigs ={
  [OUTPUT_IIFE]: {
    file: path.resolve(`dist/${name}.global.js`),
    format: OUTPUT_IIFE
  },
}

const defaultFormats = [OUTPUT_IIFE]

const packageConfigs = defaultFormats.map( format => createConfig(format, outputConfigs[format]))



function createConfig(format, output, plugins = []) {

  if (!output) {
    console.log(chalk.yellow(`invalid format: "${format}"`))
    process.exit(1)
  }

  if(format === 'iife') {
    output.name = 'learning'
  }

  const extensions = ['.ts']
  const noDeclaration = false

  const tsProject = typescript({
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    tsconfigOverride: {
      compilerOptions: {
        declaration: noDeclaration
      }
    }
  })

  return {
    input: entryFile,
    plugins: [
      nodeResolve({
        extensions
      }),
      tsProject,
      terser({
        compress: {
          ecma: 2015,
          pure_getters: true,
        }
      }),
      ...plugins,
    ],
    output
  }
}



export default packageConfigs;