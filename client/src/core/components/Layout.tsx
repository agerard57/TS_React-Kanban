/** @jsxImportSource @emotion/react */
import { FC } from 'react';

import { ColoredBackground } from './ColoredBackground';
import { Navbar } from './Navbar';

export const Layout: FC = ({ children }) => (
  <>
    <Navbar />
    <div className="App">{children}</div>
    <ColoredBackground />
  </>
);
