import React, { useEffect, useState } from "react";
import { Text, Box, Heading } from "@chakra-ui/react";

function ConfirmOrder() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {}, []);

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
      <Box>
        <Text textAlign={"left"}> Confirmed </Text>
        <Text textAlign={"left"}> </Text>
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
