import React from "react";
import { Text, Box, Button, Image } from "@chakra-ui/react";

function TopPart() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt="35px"
      mb="28px"
    >
      <Box
        width="81px"
        height="29px"
        fontFamily="Inter"
        fontWeight="700"
        fontSize="24px"
        lineHeight="29px"
        color="#000000"
        flex="none"
        order="0"
        flexGrow="0"
      >
        <Text>Orders</Text>
      </Box>
      <Box width="128px" height="40px" flex="none" order="1" flexGrow="0">
        <Button
          bg="#1B59F8"
          gap={"8px"}
          borderRadius={"10px"}
          _hover={{ background: "#1B59F8" }}
          color="white"
        >
          {" "}
          <span style={{ fontSize: "28px", fontWeight: "300" }}> + </span>
          <span> Add Order</span>
        </Button>
      </Box>
    </Box>
  );
}

export default TopPart;
