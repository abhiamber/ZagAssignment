import React from "react";
import {
  Text,
  Button,
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

function AmountTag({ setAmount }) {
  return (
    <Th textAlign={"center"}>
      <Menu>
        <MenuButton
          _active={{ bg: "#f7f7fa" }}
          _hover={{ bg: "#f7f7fa" }}
          bg={"#f7f7fa"}
          p={"0 6px"}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          <Text fontSize={"14px"} color={"#4F5E74"} fontWeight={600}>
            Amount
          </Text>
        </MenuButton>
        <MenuList>
          <MenuItem bg={"#fff"}>
            <RadioGroup onChange={setAmount}>
              <Stack spacing={5} direction="column">
                <Radio colorScheme="gray" value="asc">
                  Low to high
                </Radio>
                <Radio colorScheme="gray" value="desc">
                  High to Low
                </Radio>
              </Stack>
            </RadioGroup>
          </MenuItem>
        </MenuList>
      </Menu>
    </Th>
  );
}

export default AmountTag;
