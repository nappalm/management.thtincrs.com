import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text
} from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { generateInfo } from "../api/jobDataApi";
import RHFInput from "./forms/RHFInput";
import RHFSelect from "./forms/RHFSelect";
import FormProvider from "./forms/formProvider";

const schema = yup.object().shape({
  search: yup.string().required("Campo requerido"),
  actor: yup.string().required("Campo requerido")
});

export default function JobMoreInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate, isLoading } = useMutation({
    mutationFn: generateInfo,
    onSuccess: () => {
      onClose?.();
    }
  });

  const methods = useForm({
    resolver: yupResolver(schema)
  });

  const { handleSubmit } = methods;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <>
      <Button colorScheme="blue" size="sm" onClick={onOpen}>
        Generar mas información
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={() => onClose?.()}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Generar más información</DrawerHeader>

          <DrawerBody>
            <Text bg="gray.600" p={2} borderRadius="lg" fontSize="xs">
              La información se generara en segundo plano por razones de
              rendimiento.
            </Text>
            <Box mt={10}>
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <RHFInput autoFocus name="search" label="Búsqueda de perfil" />
                <RHFSelect
                  name="actor"
                  label="Actor"
                  placeholder="Selecciona una opcion"
                >
                  <option value="glassdoor">Glassdoor</option>
                </RHFSelect>
                <Button
                  isLoading={isLoading}
                  mt={4}
                  colorScheme="blue"
                  type="submit"
                  w="full"
                >
                  Enviar
                </Button>
              </FormProvider>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
