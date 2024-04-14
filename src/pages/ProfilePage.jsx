import React from 'react'
import Tracker from './Tracker'
import Sidebar from '../components/Sidebar'
import { Flex, Box, Spacer} from '@chakra-ui/react'

const ProfilePage = () => {
  return (
    <>
<Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='15'>
  <Sidebar />
  </Box>
  <Spacer />
  <Flex alignItems={"center"} justifyItems={"flex-start"}>
  <Box p='15' position='relative'>
  <Tracker/>
  </Box>
  </Flex>
</Flex>

    {/* items to use */}
    {/* <Sidebar />
<Tracker/> */}
</>
  )
}

export default ProfilePage
