import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';
import { fontWeight } from '../constants';

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const modal = {
  baseStyle: definePartsStyle((props) => ({
    dialogContainer: {
      alignItems: 'center',
    },
    header: {
      fontSize: 18,
      fontWeight,
      bg: '#202329',
      px: 7,
      pt: 4,
      pb: 5,
      borderTopRadius: 'lg',
    },
    overlay: {
      bg: 'rgba(5, 6, 8, 0.5)',
    },
    body: {
      pb: 10,
      bg: '#202329',
      borderBottomRadius: '7px',
    },
    dialog: {
      borderRadius: '13px',
      bg: mode('#ffffff', 'gray.800')(props),
      boxShadow: 'sm',
      border: '2px solid #202329',
    },
    footer: {
      bg: '#202329',
      borderBottomRadius: '20px',
    },
  })),
};

export default modal;
