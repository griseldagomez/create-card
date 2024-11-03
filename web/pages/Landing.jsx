import Header from "../components/Header";
import Images from '../components/landing/Images';
import Actions from '../components/landing/Actions';
import { Box } from "@chakra-ui/react";

function Landing() {
  return (
    <>
        <Header />
        <Box flexGrow={1}>
          <Images />
          <Actions />
        </Box>
    </>
  );
}

export default Landing;
