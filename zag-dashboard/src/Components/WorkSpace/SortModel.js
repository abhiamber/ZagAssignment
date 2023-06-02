import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { RiArrowUpSLine } from "react-icons/ri";
import { HiSelector } from "react-icons/hi";

const SortModel = ({ SortingFunction }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = useState();

  useEffect(() => {
    SortingFunction(value)
  }, [value]);

  return (
    <Box>
      <Box onClick={onOpen} display={"flex"} alignItems={"center"} gap="5px">
        <Text
          textAlign={"center"}
          bg="#EFF0F6"
          display={"flex"}
          height="27px"
          alignItems={"center"}
          opacity={"0.5"}
          w="125px"
          justifyContent={"space-around"}
        >
          Amount
          <RiArrowUpSLine />
        </Text>

        <Text>
          {" "}
          <HiSelector />
        </Text>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        background="#FFFFFF"
        top="50px"
        isCentered={true}
        /* Dialog Shadow */

        boxShadow="0px 2px 24px rgba(0, 0, 0, 0.1)"
        borderRadius="10px"
      >
        <ModalContent>
          <ModalHeader>Sort product according to amount</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup onChange={setValue} value={value}>
              <Stack
                direction="column"
                fontFamily="Inter"
                fontWeight="400"
                fontSize="14px"
                lineHeight="17px"
              >
                <Radio value="1">asc</Radio>
                <Radio value="2">dsc</Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Text colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SortModel;
