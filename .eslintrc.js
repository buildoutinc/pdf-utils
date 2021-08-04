module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  "rules": {
    "array-bracket-newline": [
      "error",
      "consistent"
    ],
    "array-bracket-spacing": [
      "error"
    ],
    "arrow-parens": [
      "error",
      "as-needed", {
        "requireForBlockBody": true
      }
    ],
    "brace-style": [
      "error"
    ],
    "camelcase": [
      "error", {
        "properties": "never"
      }
    ],
    "comma-spacing": [
      "error"
    ],
    "func-call-spacing": [
      "error"
    ],
    "implicit-arrow-linebreak": [
      "error"
    ],
    "indent": [
      "error",
      2
    ],
    "key-spacing": [
      "error"
    ],
    "keyword-spacing": [
      "error"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-len": [
      "error", {
        "code": 120
      }
    ],
    "no-unused-vars": [
      "error", {
        "ignoreRestSiblings": true
      }
    ],
    "semi": [
      "error",
      "always"
    ],
    "space-before-blocks": [
      "error"
    ],
    "space-before-function-paren": [
      "error", {
        "anonymous": "ignore",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      "error"
    ],
    "space-infix-ops": [
      "error"
    ],
    "object-curly-newline": [
      "error", {
        "consistent": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-property-newline": [
      "error", {
        "allowAllPropertiesOnSameLine": true
      }
    ],
    "prefer-const": [
      "error"
    ],
    "quotes": ["error", "single"]
  },
};
