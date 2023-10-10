import { fontWeight } from '../constants';

const accordion = {
  baseStyle: {
    container: {
      border: 'none',
    },
    button: {
      bg: '#fff',
      border: '1px solid',
      borderColor: 'gray.100',
      p: 3,
      fontSize: '13px',
      fontWeight,
      _expanded: {
        bg: '#000',
        color: '#fff',
        borderTopRadius: 'md',
        mt: 5,
      },
      _hover: null,
    },
    panel: {
      border: '1px solid',
      borderColor: 'gray.100',
      borderBottomRadius: 'md',
      mb: 5,
      boxShadow: 'sm',
      bg: 'white',
    },
  },
};

export default accordion;
