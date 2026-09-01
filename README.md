# getting-started

The public front door to `beyond10x`: a bottom-up introduction to the four ideas that take a
system from evidence-backed intent to a governed action in the outside world.

1. [Engineering principles](https://beyond10x.github.io/agentic-principles/) — research which
   rules help agents do consequential work safely, and label each claim by the evidence behind it.
2. [`entity-runtime`](https://beyond10x.github.io/entity-runtime/) — declare state, operations,
   rules and events as data; let an IO-free kernel decide the transition.
3. Executable specifications, owned by two standalone sibling projects:
   - [AEP](https://beyond10x.github.io/aep/) — turn engineering method into typed workflows,
     evidence gates, permissions, approvals, and completion rules.
   - [ESS](https://beyond10x.github.io/ess/) — turn system intent into validated models,
     deterministic artifacts, and conformance suites.
4. **connectors** — catalogue external operations, bind credentials to connections, and admit an
   invocation only through explicit authority and grants.

[`aep-service`](https://beyond10x.github.io/aep-service/) is the public developer-preview deployment
surface for AEP: a multi-tenant HTTP service that applies AEP contracts to centrally stored planning
entities while Entity Runtime supplies the store abstraction. ESS remains standalone and crosses
the AEP boundary only through its closed conformance report and an optional AEP-side evidence
adapter.

This is a reading order, not one dependency stack. The site names the current boundaries and
maturity of each component plainly.

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
