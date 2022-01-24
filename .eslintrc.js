module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-hooks", "prettier", "import"],
  rules: {
<<<<<<< HEAD
    quotes: "off",
    "linebreak-style": "off",
    "react/jsx-filename-extension": "off",
    "import/order": "off",
    "import/no-useless-path-segments": "off",
    "react/function-component-definition": "off",
    "react/jsx-one-expression-per-line": "off",
    "comma-dangle": "off",
    "implicit-arrow-linebreak": "off",
    "react/jsx-curly-newline": "off",
    "no-param-reassign": "off",
    "arrow-body-style": "off",
    "jsx-quotes": "off",
    camelcase: "off",
    "no-shadow": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/require-default-props": "off",
    "object-curly-newline": "off",
=======
    "no-console": "warn",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        traillingComma: "all",
        semi: true,
        tabWidth: 2,
        printWidth: 100,
        bracketSpacing: true,
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],
    "no-unused-vars": [
      "warn",
      {
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_.*?$",
      },
    ],
    "import/order": ["warn", { "newlines-between": "always" }],
    "react/self-closing-comp": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
>>>>>>> 2ef509bde12f3834ad27713c285679a1ef8b6c7e
  },
};
