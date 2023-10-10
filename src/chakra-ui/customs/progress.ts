import { ComponentStyleConfig } from '@chakra-ui/react';

const progress: ComponentStyleConfig = {
  baseStyle: {
    filledTrack: {
      borderRadius: 'md',
    },
    track: {
      borderRadius: 'md',
    },
  },
  defaultProps: {
    colorScheme: 'purple',
  },
};

export default progress;
