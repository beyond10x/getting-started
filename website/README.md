# Public website

This Docusaurus site is the public entry point to `beyond10x`. The landing page introduces
Engineering Principles (`agentic-principles`), `entity-runtime`, the sibling AEP and ESS
specifications, and `connectors` in bottom-up reading order while keeping their current integration
boundaries explicit.

```console
npm ci
npm start
```

Before landing a change:

```console
npm run typecheck
npm run build
```

The Pages workflow publishes the build at <https://beyond10x.github.io/getting-started/>.
