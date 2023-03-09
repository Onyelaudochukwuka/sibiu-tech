import React, { type ReactNode, type FC } from 'react';

import { Overlock } from '@next/font/google';
import Head from 'next/head';

export interface ILayoutProps {
  children: ReactNode
}
const overlock = Overlock({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});
const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <Head>
      <meta name="description" content="Get your project up to the cloud !" />
      <meta name="author" content="Onyela Udochukwuka" />
      <meta
        name="description"
        content="Sibiu Tech was founded to share our experience from exploring the cloud with our customers."
      />
      <meta
        name="keywords"
        content="Cloud, DevOps, Automation, Monitoring & Security, Training"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:description"
        content="Sibiu Tech was founded to share our experience from exploring the cloud with our customers."
      />
      <meta
        property="og:image"
        content="https://sibiu-tech.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
        itemProp="image"
      />

      <meta
        property="og:image:secure_url"
        content="https://sibiu-tech.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
        itemProp="image"
      />
      <meta
        property="og:image:url"
        content="https://sibiu-tech.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta
        property="og:image:alt"
        content="Sibiu Tech was founded to share our experience from exploring the cloud with our customers."
      />
      <meta property="og:title" content="Sibiu Tech" />
      <meta property="og:type" content="website" />
      <meta name="theme-color" content="#001A78" />
      <meta name="dark:theme-color" content="#001A78" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/logo.png" />
      <title>Sibiu Technologies</title>
    </Head>
    <main className={`${overlock.className}`}>{children}</main>
  </>
);
export default Layout;
