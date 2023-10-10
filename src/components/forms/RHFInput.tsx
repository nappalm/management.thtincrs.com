/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  Stack,
  Text
} from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
  description?: string;
  icon?: any;
} & Omit<InputProps, "name">;

export default function RHFInput(props: Props) {
  const { name, label, description, icon, ...inputProps } = props;
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
          <InputGroup>
            {icon && (
              <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
            )}
            <Input fontSize="sm" variant="filled" {...inputProps} {...field} />
          </InputGroup>

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
