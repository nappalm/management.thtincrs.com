import { fontWeight } from '../constants';

const heading = {
  baseStyle: {
    letterSpacing: '-0.6px',
    fontWeight,
    mb: 0,
  },
  variants: {
    'onboarding-title': {
      as: 'h1',
      fontSize: '50px',
    },
    title: {
      fontSize: 'xl',
      fontWeight: 500,
    },
    subtitle: {
      fontSize: 'lg',
    },
  },
};

export default heading;
