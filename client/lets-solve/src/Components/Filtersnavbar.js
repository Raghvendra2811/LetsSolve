import { Box ,Select,InputGroup, InputLeftElement , Input, Button, Text} from '@chakra-ui/react'
import {SearchIcon,AddIcon} from  '@chakra-ui/icons'
import React from 'react'

const Filtersnavbar = () => {
  return (
    <div>
        <Box display='grid' gridTemplateColumns={'60% 35%'} gap='5%'>
           
           <Box  display='flex' justifyContent={'space-around'}>
           <Box>
                <Select  bg={'rgb(242,243,244)'} placeholder='Select option'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
            </Box>

            <Box>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon/>}
                />
                <Input  bg={'rgb(242,243,244)'}  placeholder='Search Topic' />
            </InputGroup>
            </Box>

            <Box>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                // children={<AiOutlineSearch/>}
                />
                <Input bg='rgb(242,243,244)' placeholder='Search Question' />
            </InputGroup>
            </Box>
           </Box>

           <Box bg={'#acddb6'}  margin='auto'  padding={'15px'} borderRadius='40%' >
               <AddIcon/>
                {/* <Text>Add New</Text> */}
           </Box>

        </Box>
    </div>
  )
}

export default Filtersnavbar