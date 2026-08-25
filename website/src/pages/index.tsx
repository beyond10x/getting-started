import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const readingPath = [
  {
    number: '01',
    name: 'Engineering Principles',
    question: 'What has the evidence earned the right to claim?',
    answer: 'Evidence-backed direction',
    target: '#engineering-principles',
    stackClass: 'stackPrinciples',
  },
  {
    number: '02',
    name: 'Entity Runtime',
    question: 'May this entity change state?',
    answer: 'Deterministic mechanism',
    target: '#entity-runtime',
    stackClass: 'stackRuntime',
  },
  {
    number: '03',
    name: 'Engineering Protocols',
    question: 'Does the evidence permit the work?',
    answer: 'Executable method',
    target: '#engineering-protocols',
    stackClass: 'stackProtocols',
  },
  {
    number: '04',
    name: 'Connectors',
    question: 'May this exact external action run?',
    answer: 'Governed reach',
    target: '#connectors',
    stackClass: 'stackConnectors',
  },
];

const connectorFlow = [
  ['catalog', 'What operations exist?'],
  ['connection', 'Which account or system?'],
  ['grant', 'Who may do exactly what?'],
  ['invoke', 'Execute the bounded operation'],
  ['event', 'Deliver what happened'],
];

function Status({children, tone = 'live'}: {children: ReactNode; tone?: 'live' | 'proposal' | 'private'}) {
  const toneClass = tone === 'proposal' ? styles.proposal : tone === 'private' ? styles.private : '';
  return <span className={`${styles.status} ${toneClass}`}>{children}</span>;
}

function ReadingStack(): ReactNode {
  return (
    <div className={styles.stack} aria-label="The bottom-up reading path">
      <div className={styles.stackLabel}>READ BOTTOM-UP</div>
      {[...readingPath].reverse().map((layer) => (
        <a
          href={layer.target}
          className={`${styles.stackLayer} ${styles[layer.stackClass]}`}
          key={layer.number}>
          <span className={styles.layerNumber}>{layer.number}</span>
          <span className={styles.layerBody}>
            <strong>{layer.name}</strong>
            <small>{layer.answer}</small>
          </span>
          <span aria-hidden="true" className={styles.layerArrow}>↘</span>
        </a>
      ))}
      <div className={styles.stackGround}>
        <span />
        <p>Every layer makes a different decision explicit.</p>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="From evidence-backed principles to governed action"
      description="Start here with beyond10x: Engineering Principles, entity-runtime, engineering-protocols and connectors explained from the bottom up, with their current boundaries made explicit.">
      <main>
        <header className={styles.hero}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span>START HERE</span>
                <span aria-hidden="true">/</span>
                <span>BEYOND10X</span>
              </p>
              <Heading as="h1">
                From a principle<br />
                <em>to an action in the world.</em>
              </Heading>
              <p className={styles.lede}>
                Autonomous systems become dependable when their important decisions stop hiding
                in prompts and glue code. Read four projects from the bottom up: evidence-backed
                principles, deterministic state, executable engineering method, then governed reach.
              </p>
              <div className={styles.actions}>
                <a className={styles.primaryAction} href="#engineering-principles">
                  Begin at the bottom <span aria-hidden="true">↓</span>
                </a>
                <a className={styles.secondaryAction} href="#boundaries">
                  See what is wired today
                </a>
              </div>
            </div>
            <ReadingStack />
          </div>
        </header>

        <section className={styles.premise} aria-labelledby="premise-title">
          <div className="container">
            <p className={styles.sectionLabel}>THE READING PATH</p>
            <div className={styles.premiseHead}>
              <Heading as="h2" id="premise-title">Start with what the evidence supports.</Heading>
              <p>
                The layers grow in scope, not in ambiguity. Each owns a different question and
                leaves the answer inspectable for the next system—or the next human—to use.
              </p>
            </div>
            <ol className={styles.pathGrid}>
              {readingPath.map((layer) => (
                <li key={layer.number}>
                  <a href={layer.target}>
                    <span>{layer.number}</span>
                    <Heading as="h3">{layer.name}</Heading>
                    <p>{layer.question}</p>
                    <strong>{layer.answer} →</strong>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${styles.layerSection} ${styles.principles}`}>
          <div className={`container ${styles.layerGrid}`}>
            <div className={styles.layerCopy}>
              <div className={styles.layerMeta}>
                <span>01 / EVIDENCE</span>
                <Status tone="proposal">PUBLIC · RESEARCH</Status>
              </div>
              <p className={styles.sectionLabel}>ENGINEERING PRINCIPLES</p>
              <Heading as="h2" id="engineering-principles">
                Before a rule is executable, it has to earn belief.
              </Heading>
              <p className={styles.layerLede}>
                Engineering Principles studies how agents can plan, use tools and change external
                state without outrunning their authority, evidence or ability to recover. The result
                is a reviewable research catalogue—not a list of commandments.
              </p>
              <ul className={styles.claims}>
                <li>Observations, reports, inferences and hypotheses remain distinct.</li>
                <li>Every mature claim names its mechanism, scope, counterevidence and falsifier.</li>
                <li>No principle is promoted from one source, transcript, benchmark or successful run.</li>
                <li>Product impact arrives as a testable handoff, not a silent implementation change.</li>
              </ul>
              <p className={styles.keyPoint}>
                Confidence is a property of the evidence trail, never the fluency of the claim.
              </p>
              <div className={styles.inlineActions}>
                <Link className={styles.textAction} href="https://beyond10x.github.io/agentic-principles/">
                  Explore the research <span aria-hidden="true">↗</span>
                </Link>
                <Link className={styles.mutedAction} href="https://github.com/beyond10x/agentic-principles">
                  Source on GitHub
                </Link>
              </div>
            </div>
            <aside className={styles.evidencePanel} aria-label="How an engineering principle earns confidence">
              <div className={styles.evidenceHeading}>
                <span>PRINCIPLE LIFECYCLE</span>
                <strong>confidence only moves with evidence</strong>
              </div>
              <ol>
                <li><span>01</span><div><strong>seed</strong><p>Worth investigating</p></div></li>
                <li><span>02</span><div><strong>hypothesis</strong><p>Falsifiable claim + mechanism</p></div></li>
                <li><span>03</span><div><strong>candidate</strong><p>Scoped evidence + counter-pressure</p></div></li>
                <li><span>04</span><div><strong>supported</strong><p>Independent empirical support</p></div></li>
              </ol>
              <div className={styles.challengeBranch}>
                <span>↘ CHALLENGED</span>
                <p>Material counterevidence leads to revision or retirement—not erasure.</p>
              </div>
              <div className={styles.researchExample}>
                <span>EXAMPLE / CANDIDATE PRINCIPLE</span>
                <p>Contain a partial failure and continue only along the independently verifiable safe frontier.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className={`${styles.layerSection} ${styles.runtime}`}>
          <div className={`container ${styles.layerGrid}`}>
            <div className={styles.layerCopy}>
              <div className={styles.layerMeta}>
                <span>02 / MECHANISM</span>
                <Status>PUBLIC · AVAILABLE</Status>
              </div>
              <p className={styles.sectionLabel}>ENTITY RUNTIME</p>
              <Heading as="h2" id="entity-runtime">State changes are decisions, not assignments.</Heading>
              <p className={styles.layerLede}>
                Declare an entity as data: its fields, lifecycle, named operations, rules and
                events. An IO-free Rust kernel takes the current instance and an operation, then
                returns either a complete decision or a typed refusal.
              </p>
              <div className={styles.formula}>
                <span>definition</span><b>+</b><span>instance</span><b>+</b><span>operation</span>
                <b>+</b><span>arguments</span><b>→</b><strong>Decision</strong>
              </div>
              <ul className={styles.claims}>
                <li>Same inputs, same decision, same bytes.</li>
                <li>The kernel reads no clock, filesystem, network or random source.</li>
                <li>A refusal leaves the caller-owned instance untouched.</li>
                <li>The shell—not the kernel—persists state and publishes events.</li>
              </ul>
              <div className={styles.inlineActions}>
                <Link className={styles.textAction} href="https://beyond10x.github.io/entity-runtime/">
                  Read the guide <span aria-hidden="true">↗</span>
                </Link>
                <Link className={styles.mutedAction} href="https://github.com/beyond10x/entity-runtime">
                  Source on GitHub
                </Link>
              </div>
            </div>
            <aside className={styles.codePanel} aria-label="An entity operation and its decision">
              <div className={styles.panelBar}>
                <span>order.yaml</span>
                <span className={styles.dotSet} aria-hidden="true"><i /><i /><i /></span>
              </div>
              <pre><code>{`submit:
  transitions:
    - { from: draft, to: submitted }
  preconditions:
    - name: positive_total
      assert: { gt: [$fields.total_cents, 0] }
  emits:
    - type: OrderSubmitted`}</code></pre>
              <div className={styles.decisionOut}>
                <span>DECISION / ACCEPTED</span>
                <div><b>draft</b><i>→</i><strong>submitted</strong></div>
                <p>revision 2 · OrderSubmitted</p>
              </div>
            </aside>
          </div>
        </section>

        <section className={`${styles.layerSection} ${styles.protocols}`}>
          <div className={`container ${styles.layerGrid}`}>
            <div className={styles.layerCopy}>
              <div className={styles.layerMeta}>
                <span>03 / METHOD</span>
                <Status>PUBLIC · AVAILABLE</Status>
              </div>
              <p className={styles.sectionLabel}>ENGINEERING PROTOCOLS</p>
              <Heading as="h2" id="engineering-protocols">“Built properly” becomes a testable claim.</Heading>
              <p className={styles.layerLede}>
                Prompts can ask an agent to test first, protect an API or wait for approval. They
                cannot prove any of it happened. Engineering Protocols expresses the method as
                typed documents and evaluates the evidence independently of the model’s story.
              </p>
              <div className={styles.protocolPair}>
                <article>
                  <span>AEP</span>
                  <Heading as="h3">Was this built properly?</Heading>
                  <p>Principles, workflows, capabilities, approvals and completion predicates.</p>
                </article>
                <div className={styles.seam} aria-label="The two specifications meet at evidence">
                  <span>EVIDENCE</span>
                  <i aria-hidden="true">↔</i>
                </div>
                <article>
                  <span>ESS</span>
                  <Heading as="h3">Is this what we meant to build?</Heading>
                  <p>Executable system specifications, generated contracts and conformance.</p>
                </article>
              </div>
              <p className={styles.keyPoint}>
                The model still reasons. The protocol decides what the resulting facts permit.
              </p>
              <div className={styles.inlineActions}>
                <Link className={styles.textAction} href="https://beyond10x.github.io/engineering-protocols/">
                  Explore the protocols <span aria-hidden="true">↗</span>
                </Link>
                <Link className={styles.mutedAction} href="https://github.com/beyond10x/engineering-protocols">
                  Source on GitHub
                </Link>
              </div>
            </div>
            <aside className={`${styles.codePanel} ${styles.explainPanel}`} aria-label="A protocol refusal">
              <div className={styles.panelBar}>
                <span>protocol explain</span>
                <Status tone="proposal">EVIDENCE GATE</Status>
              </div>
              <pre><code>{`$ protocol explain \\
  --task task.yaml \\
  --action production.write

production.write denied
  operation: change production state
  reason:    production-write-requires-approval
  missing:   approval for production.write
  state:     receive`}</code></pre>
              <div className={styles.panelFoot}>
                <span>THE REFUSAL HAS AN ADDRESS</span>
                <p>A principle, a missing fact, and the state in which the rule was evaluated.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className={`${styles.layerSection} ${styles.connectors}`}>
          <div className={`container ${styles.layerGrid}`}>
            <div className={styles.layerCopy}>
              <div className={styles.layerMeta}>
                <span>04 / REACH</span>
                <Status tone="private">PRIVATE · PRE-V1</Status>
              </div>
              <p className={styles.sectionLabel}>CONNECTORS</p>
              <Heading as="h2" id="connectors">An integration is more than an HTTP request.</Heading>
              <p className={styles.layerLede}>
                Connectors turns reviewed provider specifications into a deterministic catalogue,
                then owns the boundary an agent needs to cross: connections, credential custody,
                grants, bounded invocation and event delivery.
              </p>
              <ul className={styles.claims}>
                <li>Every operation has stable identity, declared effects and an explicit risk.</li>
                <li>Catalogued does not mean exposed to a model; exposure is curated.</li>
                <li>Credentials are requirements in contracts, never values returned to callers.</li>
                <li>Effect-bearing hosted calls require both identity authority and a grant.</li>
              </ul>
              <p className={styles.statusNote}>
                The catalogue family, personal-local runtime and bounded hosted APIs are implemented.
                The full SaaS and satellite surface is not claimed. The implementation repository is
                currently private; this page is its public orientation.
              </p>
            </div>
            <aside className={styles.flowPanel} aria-label="The connector invocation flow">
              <div className={styles.flowHeading}>
                <span>ONE BOUNDED ACTION</span>
                <strong>declared → admitted → observed</strong>
              </div>
              <ol>
                {connectorFlow.map(([name, description], index) => (
                  <li key={name}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div><strong>{name}</strong><p>{description}</p></div>
                    {index < connectorFlow.length - 1 && <i aria-hidden="true">↓</i>}
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        <section className={styles.boundaries} aria-labelledby="boundaries">
          <div className="container">
            <div className={styles.boundaryHead}>
              <div>
                <p className={styles.sectionLabel}>CURRENT BOUNDARIES</p>
                <Heading as="h2" id="boundaries">A reading stack. Not yet a dependency stack.</Heading>
              </div>
              <p>
                The progression is useful because it separates concerns. Its value does not depend
                on pretending integrations have shipped before they have.
              </p>
            </div>
            <div className={styles.boundaryGrid}>
              <article>
                <span>INFORMS</span>
                <Heading as="h3">Principles → protocols</Heading>
                <p>
                  The research repository supplies evidence-backed principles and explicit product
                  handoffs. Engineering Protocols is one place those ideas can become executable;
                  research maturity and implementation status remain separate claims.
                </p>
                <Link href="https://beyond10x.github.io/agentic-principles/">
                  Follow the evidence ↗
                </Link>
              </article>
              <article>
                <span>PROPOSED</span>
                <Heading as="h3">Runtime → protocols</Heading>
                <p>
                  <code>entity-runtime</code> is the intended engine for the Engineering Protocols artifact
                  model. The adoption design is phased and still proposed; neither repository has
                  taken a Cargo dependency on the other.
                </p>
                <Link href="https://beyond10x.github.io/entity-runtime/docs/design/engineering-protocols-adoption-v0.1">
                  Read the adoption design ↗
                </Link>
              </article>
              <article>
                <span>SEPARATE TODAY</span>
                <Heading as="h3">Protocols ↛ connectors</Heading>
                <p>
                  Connectors has its own domain and authority model. It does not currently consume
                  Engineering Protocols or Entity Runtime. Here it is the next idea in the reading
                  path: governed work eventually needs governed reach.
                </p>
              </article>
              <article>
                <span>STABLE IDEA</span>
                <Heading as="h3">The shared shape</Heading>
                <p>
                  Declare the rules, evaluate them at a narrow seam, return an inspectable decision,
                  and keep ambient authority outside the deciding core. Each project applies that
                  shape at a different scale.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.nextStep} aria-labelledby="next-title">
          <div className={`container ${styles.nextInner}`}>
            <div>
              <p className={styles.sectionLabel}>CHOOSE YOUR ENTRY</p>
              <Heading as="h2" id="next-title">Begin where your ambiguity lives.</Heading>
            </div>
            <div className={styles.nextLinks}>
              <Link href="https://beyond10x.github.io/agentic-principles/">
                <span>I need to know which rule the evidence supports</span><strong>Start with Principles ↗</strong>
              </Link>
              <Link href="https://beyond10x.github.io/entity-runtime/">
                <span>My lifecycle is hidden in code</span><strong>Start with Entity Runtime ↗</strong>
              </Link>
              <Link href="https://beyond10x.github.io/engineering-protocols/">
                <span>My engineering rules live in prompts</span><strong>Start with Protocols ↗</strong>
              </Link>
              <a href="#connectors">
                <span>My agents need bounded external tools</span><strong>Understand Connectors ↑</strong>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
