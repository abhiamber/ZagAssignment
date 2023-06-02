import React from "react";
import {
  Text,
  Box,
  Button,
  Image,
  Th,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
function ActiveOrderTag({ setStatus }) {
  return (
    <Th
      textAlign={"center"}
      display={"flex"}
      gap={"4px"}
      justifyContent={"center"}
    >
      <Menu>
        <MenuButton
          _hover={{ bg: "#f7f7fa" }}
          _active={{ bg: "#f7f7fa" }}
          bg={"#f7f7fa"}
          p={"0 6px"}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          <Text fontSize={"14px"} color={"#4F5E74"} fontWeight={600}>
            Active Orders
          </Text>
        </MenuButton>
        <Box display={"flex"} alignItems={"center"}>
          <Image src="up_down_arrow.png" />
        </Box>
        <MenuList>
          <MenuItem bg={"#fff"}>
            <RadioGroup onChange={setStatus}>
              <Stack spacing={5} direction="column">
                <Radio variant={"filled"} colorScheme="gray" value="confirmed">
                  Confirmed
                </Radio>
                <Radio colorScheme="gray" value="delivered">
                  Deliverd
                </Radio>
                <Radio colorScheme="gray" value="refund">
                  Refund Completed (30d)
                </Radio>
                <Radio colorScheme="gray" value="pending">
                  Pending
                </Radio>
              </Stack>
            </RadioGroup>
          </MenuItem>
        </MenuList>
      </Menu>
    </Th>
  );
}

export default ActiveOrderTag;
