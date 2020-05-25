module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/essential"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    parser: "babel-eslint"
  },
  plugins: ["vue"],
  rules: {
    "prettier/prettier": "error",
    "prettier/prettier": [
      "error",
      {},
      {
        "usePrettierrc": false
      }
    ],
    "no-console": "off",
    "indent": ["error", 2, {
      "ignoredNodes": ["TemplateLiteral"]
    }]
  }
};