import React from 'react'
import Tracker from './Tracker'
import Sidebar from '../components/Sidebar'
import { Flex, Box, Spacer, Container} from '@chakra-ui/react'

const ProfilePage = () => {
  return (
    <>
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
            <Tracker/>
        </Box>
        <Box>
          {/* Could put another compenent here as functionality grows */}
        </Box>
      </Flex>
    </Container>

</>
  )
}

export default ProfilePage
