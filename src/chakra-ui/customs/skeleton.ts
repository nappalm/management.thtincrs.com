import {
  cssVar,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/styled-system';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

const baseStyle = defineStyle({
  [$startColor.variable]: 'rgba(219, 235, 255, 0.05)',
  [$endColor.variable]: 'rgba(219, 235, 255, 0.2)',
  _dark: {
    [$startColor.variable]: 'colors.gray.800',
    [$endColor.variable]: 'colors.gray.600',
  },
  background: $startColor.reference,
  borderColor: $endColor.reference,
  opacity: 0.5,
  borderRadius: 'lg',
});

export default defineStyleConfig({
  baseStyle,
  variants: {
    button: {
      h: '30px',
      w: 'full',
    },
    iconButton: {
      w: '30px',
      h: '30px',
    },
  },
});
