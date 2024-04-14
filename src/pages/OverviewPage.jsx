import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/Sidebar'
import SpendingCard from '../components/SpendingCard'

const OverviewPage = () => {
  return (
   
      <Flex>
          <Box p='15'>
            <Sidebar />
            </Box>
          <h1>Spending</h1>

          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <SpendingCard title={"Food"} amount={560}/>
            </SimpleGrid>
      </Flex>
    
  )
}

export default OverviewPage
