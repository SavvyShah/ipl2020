module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    extends: `react-app`,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        semi: ["error", "never"],
        "import/no-anonymous-default-export": ["error", "never"],
    },
}
