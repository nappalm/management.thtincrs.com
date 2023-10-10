import { fontWeight } from '../constants';

const menuVariant = {
  bg: 'transparent',
  color: 'rgba(219, 235, 255, 0.65)',
  fontSize: '12px',
  height: '30px',
  justifyContent: 'flex-start',
  cursor: 'default',
  p: 2,
  _hover: {
    bg: 'rgba(219, 235, 255, 0.05)',
    color: '#fff',
  },
};

const successButtonVariant = {
  bg: '#6f43fb',
  color: '#fff',
  fontSize: '12px',
  height: '35px',
  p: 2,
  _hover: {
    bg: 'rgba(111, 67, 251, 0.9)',
    color: '#fff',
  },
  _active: {
    bg: 'rgba(111, 67, 251, 0.8)',
  },
};

const whiteButtonVariant = {
  bg: '#fff',
  color: '#000',
  height: '35px',
  p: 2,
  _hover: {
    bg: '#fff',
    color: '#000',
  },
  _active: {
    bg: '#fff',
  },
};

const button = {
  baseStyle: {
    fontWeight,
    letterSpacing: '-0.01em',
    borderRadius: 'md',
  },
  variants: {
    solid: {
      _hover: null,
      _active: null,
    },
    outline: {
      _hover: null,
      _active: null,
    },
    menu: menuVariant,
    menuActive: {
      ...menuVariant,
      bg: 'rgba(219, 235, 255, 0.2)',
      color: '#fff',
      fontWeight: 600,
      opacity: 1,
      _hover: null,
    },
    menuHovered: {
      ...menuVariant,
      bg: menuVariant._hover.bg,
      color: menuVariant._hover.color,
    },
    successButton: successButtonVariant,
    whiteButton: whiteButtonVariant
  },
  sizes: {
    md: {
      height: '35px',
      px: 4,
      fontSize: 'sm',
    },
  },
};

export default button;
