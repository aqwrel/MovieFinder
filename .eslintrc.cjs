module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-strongly-recommended',
        'airbnb-base',
        '@nuxt/eslint-config',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        'linebreak-style': 'off',
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'max-len': ['error', 150],
        'import/no-extraneous-dependencies': 'off',
    },
};
