import React from 'react'
import { Card, CardHeader, Heading, CardBody, Text, CardFooter,Button, Modal, ModalBody, ModalContent, ModalHeader, ModalFooter, ModalOverlay, useDisclosure, ModalCloseButton} from '@chakra-ui/react'
import Trend from './Trend';
import { useState } from 'react';

const SpendingCard = ({title, amount}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Card p={2} m={4}>
                    <CardHeader>
                    <Heading size='md'> {title}</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text>$ {amount} </Text>
                    </CardBody>
                    <CardFooter>
                        {/* This will click to a graph of spending in each category */}
                    <Button onClick={onOpen}>View trends</Button> 
                    </CardFooter>   
    </Card>
   
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Trend/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    
    </>

  )



}


export default SpendingCard
