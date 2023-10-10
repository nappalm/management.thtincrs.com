import { Container, Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getJobDataIA } from "./api/jobDataApi";
import JobCustomInfo from "./components/job-custominfo";
import JobMoreInfo from "./components/job-moreinfo";
import JobTable from "./components/job-table";

function App() {
  const { data, isLoading } = useQuery(["job-data"], () => getJobDataIA());

  if (isLoading)
    return (
      <Container maxW="container.xl">
        <Stack justify="center" align="center">
          <Spinner />
          <Text>Espere un momento...</Text>
        </Stack>
      </Container>
    );

  const fullData = data?.message?.data;
  const arr = fullData.data.data;
  return (
    <Container maxW="container.xl">
      <Flex gap={2} pt={5}>
        <JobMoreInfo />
        <JobCustomInfo />
      </Flex>
      <br />
      <JobTable dataSource={arr || []} />
    </Container>
  );
}

export default App;
