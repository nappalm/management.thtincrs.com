import { tableAnatomy as parts } from '@chakra-ui/anatomy';
import { mode } from '@chakra-ui/theme-tools';

import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { fontWeight } from '../constants';

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const variantBase = definePartsStyle((props) => {
  const { colorScheme: c } = props;

  return {
    th: {
      //   color: mode('gray.600', 'gray.400')(props),
      // borderBottom: '1px',
      // borderColor: mode(`${c}.100`, `${c}.700`)(props),
    },
    tr: {
      _hover: {
        bg: 'gray.50',
      },
    },
    td: {
      borderBottom: '1px',
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      cursor: 'default',
    },
  };
});

const table = {
  baseStyle: {
    th: {
      textTransform: 'normal',
      height: 50,
      fontWeight,
      color: 'gray.500',
      letterSpacing: -0.5,
      bg: 'gray.50',
    },
  },
  variants: {
    base: variantBase,
  },
  defaultProps: {
    // variant: 'base',
  },
};

export default table;
