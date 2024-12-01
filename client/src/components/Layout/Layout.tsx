import { Box } from '@styles/theme';
import React from 'react';

const Layout = ({ children }: React.PropsWithChildren) => {
  return <Box flex={1}>{children}</Box>;
};

export default Layout;
