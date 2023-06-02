// import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const UpdateModel = ({ updateDataFunction, elem }) => {
  //   console.log(elem);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = useState();
  return (
    <Box>
      <Box
        onClick={onOpen}
        display={"flex"}
        alignItems={"center"}
        gap="5px"
        cursor={"pointer"}
      >
        <Text onClick={onOpen}>
          {" "}
          <BiDotsHorizontalRounded />
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
          <ModalHeader>Update Amount</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button
                w="100%"
                mt="20px"
                onClick={() => {
                  onClose();
                  updateDataFunction(+value, elem);
                }}
              >
                Submit
              </Button>
            </FormControl>
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

export default UpdateModel;
