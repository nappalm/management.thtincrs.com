import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure
} from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { generateInfoCustom } from "../api/jobDataApi";
import RHFInput from "./forms/RHFInput";
import FormProvider from "./forms/formProvider";
import RHFTextarea from "./forms/RHFTextarea";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  title: yup.string().required("Campo requerido"),
  location: yup.string().required("Campo requerido"),
  description: yup.string().required("Campo requerido")
});

export default function JobCustomInfo() {
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate, isLoading } = useMutation({
    mutationFn: generateInfoCustom,
    onSuccess: () => {
      toast.success("Se ha credo tu perfil");
      queryClient.invalidateQueries(["job-data"]);

      onClose?.();
    }
  });

  const methods = useForm({
    resolver: yupResolver(schema)
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <>
      <Button colorScheme="blue" size="sm" onClick={onOpen}>
        Generar información personalizada
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={() => onClose?.()}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Información personalizada</DrawerHeader>

          <DrawerBody>
            <FormProvider
              methods={methods}
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <RHFInput autoFocus name="title" label="Titulo del perfil" />
              <RHFInput name="location" label="Ubicación" />
              <RHFTextarea name="description" label="Descripción" />

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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
