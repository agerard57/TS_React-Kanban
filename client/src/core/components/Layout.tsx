/** @jsxImportSource @emotion/react */
import { FC } from 'react';

import { Modal } from '../../modal';
import { ColoredBackground } from './ColoredBackground';
import { Navbar } from './Navbar';

export const Layout: FC = ({ children }) => (
  <>
    <Modal />
    <Navbar />
    <div className="App">{children}</div>
    <ColoredBackground />
  </>
);
