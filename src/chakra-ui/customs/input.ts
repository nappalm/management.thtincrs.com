import { fontWeight } from "../constants";

const input = {
  baseStyle: {
    fontWeight,
    spellCheck: false
  },
  variants: {
    outline: {
      field: {
        bg: "rgba(219, 235, 255, 0.05)",
        border: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.01)",
        // border: 'none',
        h: "35px",
        fontSize: "12px",
        fontWeight: 500,
        _hover: {
          border: "1px solid ",
          borderColor: "rgba(255, 255, 255, 0.01) !important"
        },
        _focus: {
          border: "1px solid ",
          bg: "rgba(219, 235, 255, 0.05) !important"
        }
      }
    }
  }
};

export default input;
