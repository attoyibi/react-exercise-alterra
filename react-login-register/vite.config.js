import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import reactRefresh from "@vitejs/plugin-react-refresh";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// export default defineConfig({
//   plugins: [reactRefresh()],
//   esbuild: {
//     jsxFactory: "React.createElement",
//     jsxFragment: "React.Fragment",
//     jsxInject: `import React from 'react'`,
//   },
// });
