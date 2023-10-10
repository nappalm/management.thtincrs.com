import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

import theme from './config';
import GlobalStyle from './global-style';

interface Props {
  children?: ReactNode;
}

export default function Chakra(props: Props) {
  const { children } = props;

  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  );
}
