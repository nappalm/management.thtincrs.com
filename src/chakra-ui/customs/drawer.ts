import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle
} from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleOverlay = defineStyle({
  bg: "rgba(88, 95, 101, .3)",
  zIndex: "modal"
});

const baseStyleCloseButton = defineStyle({
  position: "absolute",
  left: -10,
  top: "2",
  bg: "red.400",
  borderRadius: "full",
  insetEnd: "3"
});

const baseStyle = definePartsStyle(() => ({
  closeButton: baseStyleCloseButton,
  overlay: baseStyleOverlay
}));

const drawer = defineMultiStyleConfig({
  baseStyle
});

export default drawer;
