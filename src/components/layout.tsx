import { Box, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import TopNavbar from "./top-navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box>
      <TopNavbar />
      <Flex pt={20} gap={2}>
        {children}
      </Flex>
    </Box>
  );
}
