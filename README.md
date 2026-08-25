# getting-started

The public front door to `beyond10x`: a bottom-up introduction to the four ideas that take a
system from a deterministic state change to a governed action in the outside world.

1. [Engineering principles](https://beyond10x.github.io/agentic-principles/) — research which
   rules help agents do consequential work safely, and label each claim by the evidence behind it.
2. [`entity-runtime`](https://beyond10x.github.io/entity-runtime/) — declare state, operations,
   rules and events as data; let an IO-free kernel decide the transition.
3. [`engineering-protocols`](https://beyond10x.github.io/engineering-protocols/) — turn engineering
   method and system intent into typed, executable rules over evidence.
4. **connectors** — catalogue external operations, bind credentials to connections, and admit an
   invocation only through explicit authority and grants.

This is a reading order, not a claim that the three repositories are already a dependency stack.
The site names the current boundaries and maturity of each component plainly.

Published site: <https://beyond10x.github.io/getting-started/>

## Develop

```console
cd website
npm ci
npm start
```

## Gate

```console
cd website
npm run typecheck
npm run build
```

The build refuses broken internal links. `.github/workflows/pages.yml` runs the same checks and
publishes `website/build` to GitHub Pages from `main`.

## Licence

Apache-2.0. See [LICENSE](LICENSE).
