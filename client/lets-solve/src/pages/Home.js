import { Box, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Filtersnavbar from '../Components/Filtersnavbar'
import Navbar from '../Components/Navbar'
import Singlequestion from '../Components/Singlequestion'

const Home = () => {

    const [data,setdata] =useState([]);

    const fetchData=async ()=>{
        let res= await fetch('http://localhost:3005/questions')
        let data= await res.json();
        console.log(data)
        setdata(data)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
        <Box><Navbar/></Box>
        <Box>
            <Box width={'80%'}  margin='20px auto'>

                <Box>
                    <Filtersnavbar/>
                </Box>
                <Box>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Problem</Th>
                                <Th>Topic</Th>
                                <Th>Difficulty</Th>
                                <Th>Link</Th>
                                <Th>Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.map((ele)=>{return <Singlequestion data={ele}/>})
                            }
                        </Tbody>
                    </Table>

                </Box>

            </Box>
        </Box>
    </div>
  )
}

export default Home