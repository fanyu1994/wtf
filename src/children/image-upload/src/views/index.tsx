import UploadImage from "./components/upload-image";
import { SimpleGrid } from "@chakra-ui/react";
function Index() {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <UploadImage />
    </SimpleGrid>
  );
}

export default Index;
