import { Button } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { generateJobDataAICSVS } from "../api/jobDataApi";
import toast from "react-hot-toast";

interface Props {
  jobId: number;
}
export default function JobCSV({ jobId }: Props) {
  const { mutate, isLoading } = useMutation({
    mutationFn: () => generateJobDataAICSVS(jobId),
    onSuccess: () => {
      toast.success(
        "Se esta generando tu archivo csv, te avisaremos cuando este listo"
      );
    }
  });

  return (
    <Button
      size="sm"
      variant="outline"
      colorScheme="green"
      isLoading={isLoading}
      onClick={() => mutate()}
    >
      Generar .csv
    </Button>
  );
}
