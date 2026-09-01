# getting-started compatibility facade

This repository is the paused compatibility home of the former beyond10x introductory site. The
canonical public entry point, ecosystem discovery experience, and technical documentation now live
at [beyond10x.github.io](https://beyond10x.github.io/).

The repository intentionally remains public, writable, and unarchived so Atlas can maintain the
permanent [getting-started project Pages URL](https://beyond10x.github.io/getting-started/) as a
redirect facade. It is not an authored documentation source and must not regain a standalone Pages
deployer.

## Where to go now

- [Start](https://beyond10x.github.io/) — choose the Foundation, Build, Services, or Products path.
- [Journeys](https://beyond10x.github.io/journeys/) — begin from the outcome you need.
- [Ecosystem](https://beyond10x.github.io/ecosystem/) — discover every public surface.
- [Technical documentation](https://beyond10x.github.io/docs/) — browse source-locked repository documentation.
- [Changes](https://beyond10x.github.io/changes/) — follow cross-repository impact.

## Compatibility contract

- `b10x.docs.yaml` is `local-only` and `unlisted`; Website does not collect this repository as a
  public source.
- `.github/workflows/b10x-docs-pages.yml` is the Atlas-generated, bot-only facade caller.
- `.github/workflows/pages.yml` validates the legacy source only. It cannot deploy Pages.
- `website/` is retained as historical, locally buildable material until a separate cleanup removes
  it. Changes there do not become public documentation.

Validate the compatibility contract from a complete organization workspace:

```console
cargo run --manifest-path atlas/Cargo.toml -- docs reconcile --workspace . --check
```

## Licence

Apache-2.0. See [LICENSE](LICENSE).

<!-- b10x-docs:start -->
## Documentation compatibility

Getting Started has been superseded by the [unified beyond10x Website](https://beyond10x.github.io/). This paused repository remains writable only for its Atlas-generated compatibility contract; its [getting-started Pages URL](https://beyond10x.github.io/getting-started/) is a permanent redirect façade.
<!-- b10x-docs:end -->
