import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Button,
  } from '@chakra-ui/react'
  import axios from "axios";
  import { AiOutlineDelete } from "react-icons/ai";
  import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router';
const Watchlist = (data) => {
    const router=useRouter();
    const toast = useToast()
   const Reload=()=>{
    router.replace(router.asPath)
   }
    const Delete=(id)=>{
axios.delete(`https://mockserver-rny6.onrender.com/cart/${id}`).then((res)=>{
    
    Reload()
    toast({
        position:"top",
        
        description: "Movie has been removed from your watchlist",
        status: 'info',
        duration: 3000,
        isClosable: true,
      })
    
}).catch((er)=>{console.log(er)})
    }
  return (
    <Box width="100%" mt="40px">
    <TableContainer>
    <Table variant='striped' colorScheme='teal'>
     
      <Thead>
        <Tr>
          <Th>Movie Name</Th>
          <Th>Rating</Th>
          <Th>Genre</Th>
          <Th display="flex" alignItems={"center"}>Remove From Watch List <AiOutlineDelete/></Th>
        </Tr>
      </Thead>
      <Tbody>
        
       {
        data.data?.map((el)=>(<Tr key={el.id}>
            <Td>{el.Title}</Td>
            <Td>{el.imdbRating}</Td>
            <Td>{el.Genre}</Td>
           <Td display="flex" justifyContent={"flex-start"} ><Button onClick={()=>{

          Delete(el.id)
           }}>Remove</Button></Td> 
        </Tr>))
       }
      </Tbody>
     
    </Table>
  </TableContainer>
  </Box>
  )
}



export async function getServerSideProps() {
    // Fetch data from external API
    let res= await axios.get(`https://mockserver-rny6.onrender.com/cart`);
    let data=res.data;
  
    // Pass data to the page via props
    return { props: { data } }
  }
  





export default Watchlist