import {
  Flex,
  Stack,
  Tag,
  Text,
  TagCloseButton,
  TagLabel,
  Input
} from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";
import { KeyboardEvent } from "react";

interface Props {
  //   options?: string[]; Por el momento las opciones se toman desde el value
  label: string;
  name: string;
}

export default function MultiTagInsert({ label, name }: Props) {
  const { control } = useFormContext();

  return (
    <Stack>
      <Text>{label}</Text>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          return (
            <Stack>
              <Input
                size="sm"
                placeholder="Insertar un nuevo elemento"
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const othersValues = field.value;
                    othersValues.push(e.currentTarget.value);
                    field.onChange(othersValues);
                    e.currentTarget.value = "";
                  }
                }}
              />
              <Flex gap={1} flexWrap="wrap">
                {field.value?.map((item: string) => (
                  <Tag
                    key={item}
                    size="sm"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="green"
                  >
                    <TagLabel>{item}</TagLabel>
                    <TagCloseButton
                      onClick={() => {
                        const filterEl = field.value.filter(
                          (el: string) => el !== item
                        );
                        field.onChange(filterEl);
                      }}
                    />
                  </Tag>
                ))}
              </Flex>
              {error && (
                <Text pt="2px" fontSize="10px" color="red.400">
                  {error?.message}
                </Text>
              )}
            </Stack>
          );
        }}
      />
    </Stack>
  );
}
