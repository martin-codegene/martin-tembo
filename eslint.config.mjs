import antfu from "@antfu/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";

export default antfu(
  {
    type: "app",
    nextjs: true,
    typescript: true,
    formatters: true,

    ignores: [
      ".agents/skills/**",
      ".config/opencode/skills/**",
      "LICENSE**",
    ],

    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      // Next.js recommended rules
      ...nextPlugin.configs.recommended.rules,

      // Keep operators at the start of the line. "after" conflicts with
      // antfu/reasonable-newline (which breaks before `?` and `:`) and
      // causes ESLintCircularFixesWarning.
      "style/operator-linebreak": ["error", "before"],

      // Disable problematic stylistic rules for your build
      "style/arrow-parens": "off",
      "style/jsx-one-expression-per-line": "off",

      // Existing custom rules
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": "off",
      "node/prefer-global/process": "off",
      "node/no-process-env": "error",

      "perfectionist/sort-imports": "off",

      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md", "AGENTS.md"],
        },
      ],
    },
  },
);
