import { Box, Stack, Image, Avatar, Flex, Text } from "@chakra-ui/react";
import logo from "../assets/thincrs.ia.png";

export default function TopNavbar() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="full"
      borderBottom="1px solid"
      borderColor="gray.700"
    >
      <Stack p={2} px={5} justify="space-between" direction="row">
        <Flex gap={2}>
          <Image h="30px" src={logo} />
          <Flex align="center" ml={10}>
            <Text>Generar trayectorias</Text>
          </Flex>
        </Flex>
        <Flex gap={2} align="center">
          <Avatar bg="gray.600" size="sm" name="Thincrs IA" />
          <Text>Thincrs</Text>
        </Flex>
      </Stack>
    </Box>
  );
}
