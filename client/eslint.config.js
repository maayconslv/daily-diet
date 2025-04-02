import eslintPluginReact from "eslint-plugin-react";
import eslintPluginTS from "@typescript-eslint/eslint-plugin";
import eslintParserTS from "@typescript-eslint/parser";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: eslintParserTS,
    },
    plugins: {
      react: eslintPluginReact,
      "@typescript-eslint": eslintPluginTS,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginTS.configs.recommended.rules,
      ...eslintConfigPrettier.rules, // Desativa regras conflitantes do ESLint com Prettier
      "prettier/prettier": "error", // Mostra erro quando Prettier não está seguido
      "react/react-in-jsx-scope": "off", // Não necessário no Next.js
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
