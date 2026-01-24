import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["scripts/**"]
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      react: pluginReact
    },
    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      /* 🔥 FIX for your error */
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      /* ✅ Security & quality rules */
      "no-console": "warn",
      "no-unused-vars": "error",
      "eqeqeq": "error",
      "no-eval": "error",
      "react/jsx-no-target-blank": "error"
    }
  }
]);
