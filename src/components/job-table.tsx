import {
  IconButton,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CircleCheck,
  CircleDot,
  Download,
  ChevronRight
} from "tabler-icons-react";
import { DataAI } from "../types";
import { generateCSVFile } from "../utils/csv";
import JobDrawer from "./job-drawer";

interface Props {
  dataSource: DataAI[];
}
export default function JobTable({ dataSource = [] }: Props) {
  const [rowSelected, setRowSelected] = useState<DataAI>();
  const drawer = useDisclosure();

  const handleClickRow = (item: DataAI) => {
    setRowSelected(item);
    drawer.onOpen();
  };

  const handleGenerateCSV = (
    job: string,
    data: Pick<DataAI, "csv_competences">
  ) => {
    const required = data.csv_competences?.required_competences || [];
    const optional = data.csv_competences?.optional_competences || [];

    for (let i = 0; i < required?.length; i++) {
      generateCSVFile(`${job}-competences-requerida-${i + 1}`, required[i]);
    }

    for (let i = 0; i < optional?.length; i++) {
      generateCSVFile(`${job}-competencia-opcional-${i + 1}`, optional[i]);
    }
  };

  return (
    <>
      {rowSelected && (
        <JobDrawer
          {...drawer}
          rowSelected={rowSelected}
          onClose={() => {
            drawer.onClose();
            setRowSelected(undefined);
          }}
        />
      )}

      <TableContainer
        border="1px solid"
        borderColor="gray.600"
        borderRadius="20px"
      >
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th
                py={5}
                bg="gray.800"
                borderBottom="1px solid"
                borderColor="gray.800"
                width="5px"
              >
                Estatus
              </Th>
              <Th
                py={5}
                bg="gray.800"
                borderBottom="1px solid"
                borderColor="gray.800"
              >
                Nombre
              </Th>
              <Th
                py={5}
                bg="gray.800"
                borderBottom="1px solid"
                borderColor="gray.800"
                width="5px"
              >
                Descargar competencias
              </Th>
              <Th
                py={5}
                bg="gray.800"
                borderBottom="1px solid"
                borderColor="gray.800"
                width="5px"
              />
            </Tr>
          </Thead>
          <Tbody>
            {dataSource?.map((item) => (
              <Tr
                key={item.id}
                onClick={() => handleClickRow(item)}
                cursor="pointer"
              >
                <Td>
                  <Tag
                    p={1}
                    colorScheme={item.validated ? "green" : "red"}
                    size="sm"
                  >
                    {item.validated ? (
                      <CircleCheck size={15} />
                    ) : (
                      <CircleDot size={15} />
                    )}
                  </Tag>
                </Td>
                <Td>{item.job_data.name}</Td>
                <Td textAlign="center">
                  {item.csv_competences ? (
                    <IconButton
                      aria-label="download-competences"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGenerateCSV(item.job_data.name, item);
                      }}
                      size="sm"
                      borderRadius="full"
                      colorScheme="green"
                      variant="outline"
                      icon={<Download size={17} />}
                    />
                  ) : (
                    ""
                  )}
                </Td>
                <Td>
                  <ChevronRight size={17} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
