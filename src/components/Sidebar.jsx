import React from 'react'
import {AiFillHome} from "react-icons/ai";
import { BsBarChartLine } from "react-icons/bs";
import { Box, Flex, Tooltip, Link, Button, useColorMode } from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const Sidebar = () => {

    const {colorMode, toggleColorMode} = useColorMode();
    const lightMode = colorMode === 'light'

    const sidebarItems = [
        {
            icon: <AiFillHome size ={26}/>,
            link: '/',
            text: 'Home'
        },
        {
            icon: <BsBarChartLine/>,
            link: '/overview', // spending of charts
            text: 'Overview',
        },
    ];

  return(
    <>
        <Box
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{ base: 2, md: 4 }}
        >


        <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>

                {sidebarItems.map((item, index) => (
                <Tooltip
                    hasArrow label={item.text}
                    placement="right"
                    ml={1}
                    openDelay={500}
                    display={{base:'block', md:'none'}}
                    >
                    <Link 
                    display={"flex"} 
                    to={item.link || null} 
                    as={RouterLink} 
                    alignItems={"center"} 
                    gap={4} 
                    _hover={{bg:"whiteAlpha.400"}} 
                    borderRadius={6} 
                    p={2} 
                    w={{base:"10", md:"full"}}
                    justifyContent={{base:"center", md: "flex-start"}}
                    
                    >
                    {item.icon}
                    <Box display={{base:"none", md:"block"}}>
                        {item.text}

                    </Box>
                </Link>
            </Tooltip>
            ))}
        </Flex>

        <Tooltip>
            <Flex alignItems={"center"} gap={4} p={2}  w={{base:"10", md:"full"}} justifyContent={{base:"center", md: "flex-start"}} mt={"auto"} >
                <Button onClick={toggleColorMode}>
                 Toggle {' '}
                 {lightMode && (
                     <>
                     {"Dark"} <IoMoonOutline/>
                     </>
                 )}
                 {!lightMode && (
                     <>
                      {"Light"} <MdOutlineWbSunny/>
                       </>
                 )}
                 {/* {colorMode === 'light' ? "Dark" : "Light"} 
                 */}
                </Button>
            </Flex>
        </Tooltip>
    </Flex>
    </Box>

</>
   
  )
}

export default Sidebar
