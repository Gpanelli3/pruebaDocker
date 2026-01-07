# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Docker / Development notes 🔧

- Si desarrollas con Docker en Windows, monta `./client/zeroma` dentro del contenedor (ej. `./client/zeroma:/app`) para que Vite y tu código fuente estén disponibles dentro del contenedor.
- Para instalaciones reproducibles en el contenedor usamos `npm ci`, pero **asegúrate** de que `package-lock.json` esté sincronizado con `package.json`. Si el lockfile está desincronizado, primero ejecuta `npm install` localmente en `client/zeroma` y commitea el `package-lock.json` actualizado.
