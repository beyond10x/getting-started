# AGENTS.md — getting-started

This repository is paused compatibility infrastructure for the former public entry site. The
canonical authored Website is `beyond10x/website`; do not add or migrate public content here.
Organization naming, publication, and coordinated-migration rules live in `atlas/AGENTS.md`.

## Serves

- **O5 — the generic agent platform.** Preserve the old project URL as a truthful, permanent route
  into the unified public discovery experience.
- **O2 — decisions as data, with evidence.** Keep the compatibility state explicit and generated
  from Atlas rather than relying on an archived repository or an operator convention.

A change that does not maintain that compatibility boundary is out of scope for this repository.

## Invariants

1. The repository stays public, writable, and unarchived while it owns the compatibility facade.
2. The canonical public entry point is `https://beyond10x.github.io/`.
3. `https://beyond10x.github.io/getting-started/` is a redirect facade, not an independently
   authored or deployed site.
4. `b10x.docs.yaml` remains `local-only` and `unlisted`; Website must not source-lock this repo.
5. Atlas owns the generated facade caller and marked documentation blocks. Do not hand-edit them.
6. No workflow here may upload or deploy a Pages artifact except the generated facade caller's
   immutable reusable Website workflow.
7. `website/` is retained legacy material. It may be validated locally, but it is not a publication
   source and must not be presented as the current front door.
8. Delivery credentials and bot-authenticated remote operations remain in private Atlas.

## Gate

From a complete organization workspace, run:

```console
cargo run --manifest-path atlas/Cargo.toml -- docs reconcile --workspace . --check
```

For a change to retained legacy files, also run their validation without publishing:

```console
cd website
npm ci --ignore-scripts
npm audit --audit-level=critical
npm run typecheck
npm run build
```

`.github/workflows/pages.yml` is validation-only. It must keep the legacy build check while carrying
no Pages write permission, artifact upload, environment, or deploy action.

<!-- b10x-docs-operations:start -->
## Public documentation operations

This repository is paused compatibility infrastructure: its original source authority is superseded, but it must remain unarchived so Atlas can maintain the permanent project-Pages façade. Do not revive a standalone documentation site. The catalog-listed former Pages workflow is repository-owned validation: preserve its checks while keeping exact read-only permissions, an unconditional pull-request trigger, and no deployment primitives. The canonical public entry point is [https://beyond10x.github.io/](https://beyond10x.github.io/), and `/getting-started/` is a stable redirect façade bound only to its Atlas-generated route, runtime, and caller controls. Atlas owns `b10x.docs.yaml`, `.github/workflows/b10x-docs-pages.yml`, and this marked block.
<!-- b10x-docs-operations:end -->
