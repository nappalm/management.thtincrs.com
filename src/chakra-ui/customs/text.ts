import { fontWeight } from '../constants';

const text = {
  defaultProps: {
    fontWeight,
  },
  variants: {
    title: {
      fontWeight,
      fontSize: '16px',
    },
    subtitle: {
      fontWeight,
      color: 'gray.400',
    },
    label: {
      fontSize: '12px',
      color: 'rgba(219, 235, 255, 0.7)',
    },
  },
};

export default text;
