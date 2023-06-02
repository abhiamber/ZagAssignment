import React from "react";
import { Text, Box } from "@chakra-ui/react";

function ConfirmOrder() {
  return (
    <Box
      mt="17px"
      ml="27px"
      mb="12px"
      fontSize={"17px"}
      fontFamily="'Inter'"
      fontStyle="normal"
      fontWeight="600"
      display={"flex"}
      alignItems={"center"}
      gap="10x"
      lineHight=" 22px"
      justifyContent={"space-between"}
    >
      <Box
        display={"flex"}
        alignContent={"center"}
        alignItems={"center"}
        gap="15px"
      >
        <Text textAlign={"left"}> Confirmed </Text>
        <Text textAlign={"left"} color="rgba(47, 47, 47, 0.4)">
          {" "}
          289{" "}
        </Text>
      </Box>
      <Box
        background="#EFF0F6"
        height={"36px"}
        w="36px"
        borderRadius="50%"
        transform="rotate(90deg)"
        mr="17px"
      >
        <Text textAlign={"center"} mt="2.5px">
          |
        </Text>
      </Box>
    </Box>
  );
}

export default ConfirmOrder;
