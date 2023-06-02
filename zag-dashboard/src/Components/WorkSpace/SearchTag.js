import React from "react";
import { Input, Box } from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";
function SearchTag() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      mt="5px"
      gap="17px"
      ml="10px"
    >
      {" "}
      <FiSearch fontSize={"20px"} />
      <Input
        fontFamily="Inter"
        fontWeight="500"
        fontSize="14px"
        linHeight="17px"
        letterSpacing="-0.154px"
        /* Base Shade / 50 */

        color="rgba(0, 0, 0, 0.5)"
        placeholder="Search"
      />
    </Box>
  );
}

export default SearchTag;
