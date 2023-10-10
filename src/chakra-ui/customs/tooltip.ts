import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { fontWeight } from '../constants';

const baseStyle = defineStyle(() => {
  return {
    bg: 'black.500',
    color: '#ffffff',
    fontSize: 'sm',
    borderRadius: 'md',
    fontWeight,
  };
});

export default defineStyleConfig({ baseStyle });
