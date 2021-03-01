module.exports = {

    parser: '@typescript-eslint/parser', // add the TypeScript parser
    plugins: [
        'svelte3',
        '@typescript-eslint', // add the TypeScript plugin
    ],
    overrides: [
        // this stays the same
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
    rules: {
        // ...
    },
    settings: {
        'svelte3/typescript': require('typescript'), // pass the TypeScript package to the Sve lte plugin
        // ...
    },
    parserOptions: {
        // add these parser options
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        sourceType: 'module',
        extraFileExtensions: ['.svelte'],
        createDefaultProgram: true,
    },
    extends: [
        // then, enable whichever type-aware rules you want to use
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
};
