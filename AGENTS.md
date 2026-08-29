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

`website/` is the public front door. It explains four components from the bottom up: Engineering
Principles (the public name used here for the `agentic-principles` research repository),
`entity-runtime`, `engineering-protocols`, then `connectors`. It is an orientation layer, not a new
authority for their research, APIs or designs.

## Source of truth

- `agentic-principles/README.md`, its evidence registry and its research method own the principle
  lifecycle, evidence labels and current research posture.
- `entity-runtime/README.md`, its normative kernel design and its published guide own runtime
  semantics.
- `engineering-protocols/README.md`, its normative consolidated design and its generated status
  page own protocol semantics and delivery state.
- `connectors/README.md`, `docs/design/01-domain-model.md` and `docs/design/02-architecture.md` own
  the connector model and current maturity.
- `atlas/README.md` owns the cross-repository map.

When this site and an owning repository disagree, fix the introduction to match the owner. Do not
invent a compatibility promise here.

## Truthful boundaries

1. The order is conceptual: evidence-backed principle → deterministic mechanism → executable
   engineering method → governed external reach. Never draw it as a shipped dependency chain.
2. Adoption of `entity-runtime` by the `engineering-protocols` artifact model is **proposed** until
   the owning repositories and an atlas decision say otherwise.
3. `connectors` is a separate pre-v1 system today. Do not claim it consumes either of the first two.
4. Status labels stay visible. A public introduction must distinguish implemented, proposed and
   private surfaces.
5. Detailed reference material stays with its owning component. Link to it instead of copying a
   second version here.
6. Never publish credentials, deployment-local values, adopter-internal material or private
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
