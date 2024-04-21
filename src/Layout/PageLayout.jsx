import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'

const PageLayout = ({children}) => {
  return (
    <Flex flexDir={"row"}>
        <Box w={{base: "70px", md: "240px"}}>
            <Sidebar/>

        </Box>

        <Box flex={1} w={{base:"calc(100% -70px)", md: "calc(100% -240px)"}}>
            {children}
        </Box>

    </Flex>
  )
}

export default PageLayout
