import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {AiOutlineHeart} from "react-icons/ai";
const Navbar = () => {
    const router=useRouter()
    console.log(router)
  return (
    <Box zIndex={"20"} bg="black"  fontFamily={"apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"} position={"fixed"} fontWeight="bold" top="0px" left={"0px"} height="40px" w="100%" display={"flex"} border="1px solid black"  color="white" justifyContent="space-evenly" alignItems={"center"}>
        <Text cursor={"pointer"} onClick={()=>{router.push("/")}} color={router.asPath==="/" ? "white":"grey"}>All Movies</Text>
        <Text onClick={()=>{router.push("/watchlist")}} cursor={"pointer"} color={router.asPath==="/watchlist" ? "white":"grey"} display="flex" alignItems={"center"} gap="3px">Watch List <AiOutlineHeart /></Text>
    </Box>
  )
}

export default Navbar