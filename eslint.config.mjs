import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Apply these settings to all JavaScript files.
  { files: ["**/*.{js,mjs,cjs,jsx}"] },

  // Global language options for browser and node environments.
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },

  // Automatically detect the React version.
  { settings: { react: { version: "detect" } } },

  // Recommended configuration for JavaScript.
  pluginJs.configs.recommended,

  // Recommended configuration for React using the flat config.
  pluginReact.configs.flat.recommended,

  // Disable the rule requiring React to be in scope with JSX (React 17+).
  { rules: { "react/react-in-jsx-scope": "off" } },

  // For test files, include Jest globals.
  {
    files: ["**/*.{test,spec}.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: { ...globals.jest } },
  },
];
