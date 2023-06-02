import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Issuses = () => {
  return (
    <Box
      background="#FFFFFF"
      /* Stroke Color */
      mt="17px"
      height="77px"
      // mb="191px"
      border="1px solid #EFF0F6"
      borderRadius="20px"
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
        justifyContent={"space-between"}
        gap="25px"
        ml="27px"
      >
        <Text textAlign={"left"} color="#2F2F2F">
          {" "}
          Issue{" "}
        </Text>
        <Text textAlign={"left"} color="rgba(47, 47, 47, 0.4)">
          {" "}
          21
        </Text>
      </Box>
      <Box
        background="#EFF0F6"
        height={"36px"}
        w="36px"
        borderRadius="50%"
        mr="17px"
      >
        <Text textAlign={"center"} mt="2.5px" fontSize={"20px"}>
          +
        </Text>
      </Box>
    </Box>
  );
};

export default Issuses;
