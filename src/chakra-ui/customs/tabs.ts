import { tabsAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
} from '@chakra-ui/styled-system';
import { fontWeight } from '../constants';

const $fg = cssVar('tabs-color');
const $bg = cssVar('tabs-bg');

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const variantRounded = definePartsStyle((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: '0px',
      border: '1px solid',
      borderColor: 'gray.400',
      mr: '-1px',
      [$fg.variable]: 'colors.gray.600',
      _dark: {
        [$fg.variable]: 'inherit',
      },
      _selected: {
        [$fg.variable]: 'colors.white',
        [$bg.variable]: `colors.${c}.500`,
        borderColor: `black.500`,
        _dark: {
          [$fg.variable]: 'colors.gray.800',
          [$bg.variable]: `colors.${c}.300`,
        },
      },
      _last: {
        borderRightRadius: 'lg',
      },
      _first: {
        borderLeftRadius: 'lg',
      },
      color: $fg.reference,
      bg: $bg.reference,
    },
  };
});

const sizes = {
  md: definePartsStyle({
    tab: {
      fontSize: 'md',
      py: '7px',
      px: 4,
    },
  }),
};

const tabs = {
  baseStyle: {
    tab: {
      letterSpacing: '-0.5px',
      fontWeight,
      opacity: 0.5,
      _selected: {
        opacity: 1,
      },
    },
  },
  sizes,
  variants: {
    rounded: variantRounded,
  },
  defaultProps: {
    colorScheme: 'black',
    variant: 'rounded',
  },
};

export default tabs;
