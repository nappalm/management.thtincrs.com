import { defineStyle } from '@chakra-ui/styled-system';

const baseStyleList = defineStyle(() => {
  return {
    bg: '#123',
    borderRadius: 'lg',
    borderWidth: '1px',
  };
});

const menu = {
  baseStyle: {
    menu: baseStyleList,
  },
};

export default menu;
