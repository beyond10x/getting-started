# AGENTS.md — getting-started

The contract for changing the public entry point to `beyond10x`.

Org-wide naming, former-brand and coordinated-migration rules live in `atlas/AGENTS.md`. This file
adds the rules specific to the introductory site.

## Serves

The objectives of the collection this repository moves, by id from `atlas/ROADMAP.md` — the only
cross-repository roadmap, and the page that says what each id means and which evidence closes it:

- **O5 — the generic agent platform.** The public door: the four ideas bottom-up, with current boundaries stated truthfully, for the person who will one day sign up.
- **O2 — decisions as data, with evidence.** The reading path *is* the evidence discipline, explained.

A change here that moves none of these is a question for the operator, not a task.
`atlas/scripts/check-map.sh` fails a repository whose `AGENTS.md` names no objective.

## What this repository is

`website/` is the public front door. It explains four ideas from the bottom up: Engineering
Principles (the public name used here for the `agentic-principles` research repository),
`entity-runtime`, the sibling AEP and ESS specifications, then `connectors`. It is an orientation
layer, not a new authority for their research, APIs or designs.

## Source of truth

- `agentic-principles/README.md`, its evidence registry and its research method own the principle
  lifecycle, evidence labels and current research posture.
- `entity-runtime/README.md`, its normative kernel design and its published guide own runtime
  semantics.
- `aep/README.md`, its normative designs and its generated status page own Agentic Engineering
  Protocol semantics and delivery state.
- `ess/README.md` and its public concepts and status pages own executable-system semantics,
  adapter coverage, and delivery state.
- `aep-service/README.md`, its OpenAPI document and its public operations guide own the hosted
  developer-preview surface and current service maturity.
- `connectors/README.md`, `docs/design/01-domain-model.md` and `docs/design/02-architecture.md` own
  the connector model and current maturity.
- `atlas/README.md` owns the cross-repository map.

When this site and an owning repository disagree, fix the introduction to match the owner. Do not
invent a compatibility promise here.

## Truthful boundaries

1. The order is conceptual: evidence-backed principle → deterministic mechanism → executable
   specifications → governed external reach. Do not turn that reading order into one dependency
   chain.
2. AEP depends on one pinned Entity Runtime release for its IO-free entity kernel and providers.
   ESS is standalone and has no AEP dependency.
3. AEP and ESS meet only at a closed standalone conformance report: the optional AEP-side adapter
   may translate that report into evidence without coupling their core models.
4. `aep-service` hosts AEP contracts over Entity Runtime. It does not host ESS and does not make ESS
   part of AEP's dependency graph.
5. `connectors` is a separate pre-v1 system today. Do not claim it consumes AEP, ESS, or Entity
   Runtime.
6. Status labels stay visible. A public introduction must distinguish implemented, proposed and
   private surfaces.
7. Detailed reference material stays with its owning component. Link to it instead of copying a
   second version here.
8. Never publish credentials, deployment-local values, adopter-internal material or private
   operational detail.

## Website gate

```console
cd website
npm ci --ignore-scripts
npm audit --audit-level=critical
npm run typecheck
npm run build
```

`onBrokenLinks: 'throw'` is part of the contract. The Pages workflow builds pull requests and
deploys only trusted pushes to `main` or a manual dispatch.

## Automation identity

Anything not typed by Timo commits and pushes as the org-owned `b10x-bot` GitHub App. Use
`scripts/as-bot.sh commit …` and `scripts/as-bot.sh push …`; never commit credentials or tokens.
