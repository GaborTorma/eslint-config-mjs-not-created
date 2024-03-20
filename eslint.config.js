import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu({
    typescript: {
        parserOptions: {
            project: './tsconfig.json',
            extraFileExtensions: ['.vue'],
        },
    }
}, nuxt)
