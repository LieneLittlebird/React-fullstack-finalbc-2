module.exports = {
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["babel-polyfill", "babel-polyfill/dist/polyfill.min.js"],
          ["helper", "./utils/helper"],
          ["material-ui/DatePicker", "../custom/DatePicker"],
          ["material-ui", "material-ui-ie10"],
        ],
        extensions: [".ts", ".js", ".jsx", ".json"],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["warn", "windows"],
    "import/extensions": 0,
  },
};
