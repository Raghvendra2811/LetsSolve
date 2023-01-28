import { Box, Td, Tr ,Text, Button ,Checkbox} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Singlequestion = ({data}) => {
    console.log(data ,"hello")
    useEffect(()=>{
      
    },[data])
  return (
    <Tr >
        <Td><Text>{data.name}</Text></Td>
        <Td>{data.topic}</Td>
        <Td>{data.difficult===0?<Text color={'green'}>Easy</Text>:data.difficult===1?<Text color={"orange"}>Medium</Text>:<Text color={'red'}>Hard</Text>}</Td>
        <Td><Link target={'_blank'} to={data.link}><Button>Solve</Button></Link></Td>
        <Td><Checkbox defaultChecked={data.status}></Checkbox></Td>
    </Tr>
  )
}

export default Singlequestion