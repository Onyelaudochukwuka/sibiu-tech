import React from 'react';

import { type AppType } from 'next/dist/shared/lib/utils';

import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }: any) => <Component {...pageProps} />;

export default MyApp;
