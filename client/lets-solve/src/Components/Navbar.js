import {
  Box,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box bg={'#acddb6'} borderBottom="1px solid black">
        <Box display={"flex"} justifyContent="space-between">
          <Box margin={"15px 40px"}>
            <Text fontSize="3xl">Let's Solve</Text>
          </Box>
          <Box margin={"15px 40px"}>
            <Button onClick={onOpen}>Sign in</Button>
          </Box>
          {/* <Button >Open Modal</Button> */}

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent width='300px'>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>heelo ok</ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
