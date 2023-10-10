import { Box, Button, Spinner, Stack, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { getJobDataAIDetail, updateJobData } from "../api/jobDataApi";
import { DataAI, DataAIForm } from "../types";
import RHFInput from "./forms/RHFInput";
import RHFTextarea from "./forms/RHFTextarea";
import FormProvider from "./forms/formProvider";
import MultiTagInsert from "./multi-tag-insert";

const dataAISchema = yup.object().shape({
  job_data_ai_id: yup.number().required("El campo job_data_ai_id es requerido"),
  job_data: yup.object().shape({
    name: yup.string().required("El campo name es requerido"),
    description: yup.string().required("El campo description es requerido"),
    profile_name: yup.string().required("El campo profile_name es requerido"),
    technology_name: yup
      .string()
      .required("El campo technology_name es requerido"),
    job_type: yup.string().required("El campo job_type es requerido"),
    english_level: yup.string().required("El campo english_level es requerido"),
    softskills_needed: yup
      .array()
      .of(yup.string())
      .required("El campo softskills_needed es requerido"),
    personality: yup.string().required("El campo personality es requerido"),
    location: yup.string().required("El campo location es requerido"),
    experience_years: yup
      .string()
      .required("El campo experience_years es requerido"),
    required_competences: yup
      .array()
      .of(yup.string()) // Validar que sea un array de strings
      .required("El campo required_competences es requerido"),
    optional_competences: yup
      .array()
      .of(yup.string()) // Validar que sea un array de strings
      .nullable()
  }),
  validated: yup.boolean().required("El campo validated es requerido")
});

interface Props {
  rowSelected: DataAI;
}

export default function JobForm({ rowSelected }: Props) {
  const methods = useForm({
    resolver: yupResolver(dataAISchema)
  });

  const { handleSubmit, setValue } = methods;

  const queryClient = useQueryClient();
  const { mutate, isLoading: isLoadingUpdate } = useMutation({
    mutationFn: updateJobData,
    onSuccess: () => {
      queryClient.invalidateQueries(["job-data"]);
      toast("Se ha actualizado correctamente");
    }
  });

  const { isLoading } = useQuery(
    ["job-id", rowSelected.id],
    () => getJobDataAIDetail(rowSelected.id),
    {
      enabled: !!rowSelected.id,
      onSuccess: (r) => {
        const { data } = r.message;
        setValue("job_data_ai_id", data.id);
        setValue("validated", data.validated);
        setValue("job_data.name", data.job_data.name);
        setValue("job_data.description", data.job_data.description);
        setValue("job_data.profile_name", data.job_data.profile_name);
        setValue("job_data.technology_name", data.job_data.technology_name);
        setValue("job_data.job_type", data.job_data.job_type);
        setValue("job_data.english_level", data.job_data.english_level);
        setValue("job_data.softskills_needed", data.job_data.softskills_needed);
        setValue("job_data.personality", data.job_data.personality);
        setValue("job_data.location", data.job_data.location);
        setValue("job_data.experience_years", data.job_data.experience_years);
        setValue(
          "job_data.required_competences",
          data.job_data.required_competences
        );
        setValue(
          "job_data.optional_competences",
          data.job_data.optional_competences
        );
      }
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (v: any) => {
    const values = v as DataAIForm;
    mutate(values);
  };

  if (isLoading)
    return (
      <Stack py={10} align="center" color="gray.500">
        <Spinner />
        <Text>Obteniendo información...</Text>
      </Stack>
    );
  return (
    <Box p={4}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Box display="none">
            <RHFInput isDisabled name="job_data_ai_id" label="ID" />
            <RHFInput isDisabled name="validated" label="Validado" />
          </Box>
          <RHFInput name="job_data.name" label="Nombre del trabajo" />
          <RHFTextarea
            name="job_data.description"
            label="Descripción del perfil"
          />
          <RHFInput name="job_data.profile_name" label="Nombre del perfil" />
          <RHFInput
            name="job_data.technology_name"
            label="Nombre de tecnología"
          />
          <RHFInput name="job_data.job_type" label="Tipo de trabajo" />
          <RHFInput name="job_data.english_level" label="Nivel de ingles" />
          <MultiTagInsert
            label="Softskills necesarias"
            name="job_data.softskills_needed"
          />
          <RHFInput name="job_data.personality" label="Personalidad" />
          <RHFInput name="job_data.location" label="Ubicación" />
          <RHFInput
            name="job_data.experience_years"
            label="Años de experiencia"
          />
          <MultiTagInsert
            label="Competencias requeridas"
            name="job_data.required_competences"
          />
          <MultiTagInsert
            label="Competencias opcionales"
            name="job_data.optional_competences"
          />
        </Stack>

        <Button
          isLoading={isLoadingUpdate}
          mt={4}
          colorScheme="blue"
          type="submit"
          w="full"
        >
          Enviar
        </Button>
      </FormProvider>
    </Box>
  );
}
