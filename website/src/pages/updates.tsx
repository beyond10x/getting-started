import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type {EcosystemRegistry} from '@beyond10x/docs-system/types';
import registryDocument from '../../static/ecosystem.json';
import styles from './ecosystem.module.css';

const registry = registryDocument as EcosystemRegistry;

export default function Updates(): ReactNode {
  const feeds = registry.surfaces.flatMap((surface) => (surface.feeds ?? []).map((feed) => ({surface, feed})));
  return <Layout title="Updates" description="Project-owned writing and release feeds from the public beyond10x ecosystem."><main className="container"><header className={styles.hero}><p className="b10x-eyebrow">PROJECT-OWNED WRITING</p><Heading as="h1">Updates without a second editorial authority.</Heading><p>Research notes and release writing remain with the project that can verify them. This generated index gives them one discovery point without copying their content.</p></header><section className={styles.updates}>{feeds.map(({surface, feed}) => <article key={`${surface.key}-${feed.url}`}><span className="b10x-status b10x-status--development">{surface.name}</span><Heading as="h2">{feed.label}</Heading><p>{surface.summary}</p><a href={feed.url}>Open the project feed →</a></article>)}</section></main></Layout>;
}
