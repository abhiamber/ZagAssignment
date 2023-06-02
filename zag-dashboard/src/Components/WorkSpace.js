import React from "react";
import ConfirmOrder from "./WorkSpace/ConfirmOrder";
import { Box } from "@chakra-ui/react";
import MainTable from "./WorkSpace/MainTable";

const WorkSpace = () => {
  return (
    <Box
      mt="30px"
      background="#FFFFFF"
      w="1106px"
      border="1px solid #EFF0F6"
      borderRadius="20px"
    >
      <ConfirmOrder />
      <Box ml="27px" height="2px" background="#F4F5F7" borderRadius="20px">
        <hr />
      </Box>
      <MainTable />
    </Box>
  );
};

export default WorkSpace;
