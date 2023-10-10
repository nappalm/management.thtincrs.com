/* eslint-disable no-underscore-dangle */
import { defineStyle } from '@chakra-ui/styled-system';
import { fontWeight } from '../constants';

const badge = defineStyle({
  variants: {},
  baseStyle: {
    container: {
      borderRadius: 'full',
      fontWeight,
    },
  },
});

export default badge;
