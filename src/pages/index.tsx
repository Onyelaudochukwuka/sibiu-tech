import React from 'react';

import {
  CTA, Features, Hero, Layout,
} from '@src/components';
import { type NextPage } from 'next';

const Home: NextPage = () => (
  <Layout>
    <Hero />
    <Features />
    <CTA />
  </Layout>
);

export default Home;
