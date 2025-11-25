import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageHeader/HomepageHeader';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
    <h1 className="hero__title">OpenWallet</h1>
    <p className="hero__subtitle">Digital Banking Made Simple</p>
    <p className="hero__">A Wallet Management System handles the creation, control, 
      and monitoring of customer wallets. It manages wallet activation, balance updates, transaction processing, and applies product rules like limits, fees, and KYC requirements. All transactions are tracked in real time and posted to the correct GL accounts, 
      ensuring smooth and compliant digital payment operations.</p>

    <img
      src="/img/openwallet-banner.png"
      alt="OpenWallet Banner"
      style={{ width: '60%', marginTop: '20px' }}
    />
  </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
