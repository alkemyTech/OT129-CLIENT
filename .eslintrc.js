module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
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
  },
};
