import { Stack, Text, Textarea, TextareaProps } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
  description?: string;
} & Omit<TextareaProps, "name">;

export default function RHFTextarea(props: Props) {
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
          <Textarea
            rows={8}
            fontSize="sm"
            {...inputProps}
            {...field}
            variant="filled"
          />
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
