import React from "react";
import { Box } from "@chakra-ui/react";
import TopPart from "../Components/WorkSpace/TopPart";
import WorkSpace from "./WorkSpace";
import Issuses from "./WorkSpace/Issuses";

function HomePage() {
  return (
    <Box ml="34px" mr="51px">
      <TopPart />
      <hr />

      <WorkSpace />
      <Issuses />
    </Box>
  );
}

export default HomePage;
