import React, { type ReactNode, type FC } from 'react';

import { Overlock } from '@next/font/google';

export interface ILayoutProps {
  children: ReactNode
}
const overlock = Overlock({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});
const Layout: FC<ILayoutProps> = ({ children }) => (
  <main className={`${overlock.className}`}>
    {children}
  </main>
);
export default Layout;
