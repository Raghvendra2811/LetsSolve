import {
  Box,
  Select,
  InputGroup,
  InputLeftElement,
  Input,
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
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";

const Filtersnavbar = () => {
  let { data, setdata } = useContext(Context);
  const { isOpen, onOpen, onClose } = useDisclosure();



  const initialRef = React.useRef(null)
//   const finalRef = React.useRef(null)



  const difficultyLevel = (e) => {
    let value = e.target.value;
    const fetchData = async () => {
      let res = await fetch(
        `http://localhost:500/questions?difficult=${value}`
      );
      let data = await res.json();
      console.log(data);
      // console.log(first)
      setdata(data);
    };
    fetchData();
  };
  return (
    <div>
      <Box display="grid" gridTemplateColumns={"60% 35%"} gap="5%">
        <Box display="flex" justifyContent={"space-around"}>
          <Box>
            <Select
              onChange={difficultyLevel}
              bg={"rgb(242,243,244)"}
              placeholder="Select option"
            >
              <option value="0">Easy</option>
              <option value="1">Medium</option>
              <option value="2">Hard</option>
            </Select>
          </Box>

          <Box>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input bg={"rgb(242,243,244)"} placeholder="Search Topic" />
            </InputGroup>
          </Box>

          <Box>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                // children={<AiOutlineSearch/>}
              />
              <Input bg="rgb(242,243,244)" placeholder="Search Question" />
            </InputGroup>
          </Box>
        </Box>

        <Box
          bg={"#acddb6"}
          cursor={"pointer"}
          margin="auto"
          padding={"15px"}
          borderRadius="40%"
          onClick={onOpen}
        >
          <AddIcon/>
          {/* <Text>Add New</Text> */}
        </Box>


      <Modal
    //   width={'900px'}
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Problem</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Problem</FormLabel>
              <Input ref={initialRef} placeholder='Enter Problem name' />
            

            
              <FormLabel>Link</FormLabel>
              <Input placeholder='Enter Question Link' />
            


            
              <FormLabel>Topic</FormLabel>
              <Input placeholder='Enter Topic' />
    
                <FormLabel>Difficulty</FormLabel>
                <Select>
                    <option value="0">Easy</option>
                    <option value="1">Medium</option>
                    <option value="2">Hard</option>
                </Select>
                <Button type={"submit"}>ok</Button>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        
      </Box>
    </div>
  );
};

export default Filtersnavbar;
