import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  UseDisclosureProps
} from "@chakra-ui/react";
import JobForm from "./job-form";
import { DataAI } from "../types";
import JobCSV from "./job-csv";

interface Props extends UseDisclosureProps {
  rowSelected: DataAI;
}

export default function JobDrawer(props: Props) {
  const { isOpen = false, onClose, rowSelected } = props;

  return (
    <>
      <Drawer
        size="lg"
        isOpen={isOpen}
        placement="right"
        onClose={() => onClose?.()}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex justify="space-between" align="center">
              Información de perfil
              <JobCSV jobId={rowSelected.id} />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <JobForm rowSelected={rowSelected} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
