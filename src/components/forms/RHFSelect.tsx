/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, SelectProps, Stack, Text } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
  description?: string;
  icon?: any;
} & Omit<SelectProps, "name">;

export default function RHFSelect(props: Props) {
  const { name, label, description, ...inputProps } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack spacing="2px">
          <Text color="gray.500" fontSize="sm">
            {label}
          </Text>
          <Select variant="filled" {...inputProps} {...field} />

          {error && (
            <Text pt="2px" fontSize="10px" color="red.400">
              {error?.message}
            </Text>
          )}

          <Text fontSize="10px" opacity="0.8">
            {description}
          </Text>
        </Stack>
      )}
    />
  );
}
