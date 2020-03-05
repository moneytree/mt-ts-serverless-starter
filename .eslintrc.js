module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["node_modules/", "jest.config.js"],
  overrides: [
    {
      files: ["*.spec.ts"],
      rules: {
        // This is a very helpful escape hatch when mocking
        "@typescript-eslint/no-explicit-any": "off"
      }
    }
  ]
};
