/* import { defineConfig, globalIgnores } from "eslint/config";
//import nextVitals from "eslint-config-next/core-web-vitals";
import nextVitals from "eslint-config-next/core-web-vitals.js";
export default defineConfig([...nextVitals, globalIgnores([".next/**","node_modules/**"])]);
*/

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  nextVitals,
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "out/**",
    "dist/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
