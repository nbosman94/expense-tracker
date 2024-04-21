import React from 'react'
import { Select, InputGroup, InputLeftElement, Button, Stack, Input, Text, Box, Flex, Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, ModalOverlay, Wrap, WrapItem, FormControl, FormLabel} from '@chakra-ui/react'
import ExpenseList from '../components/ExpenseList'
import { useState } from 'react'
import { useExpenseStore } from '../store/expenseStore'
import { useTotalStore } from '../store/totalsStore'
import { useCategoryStore } from '../store/categoryStore'
import { useDisclosure } from '@chakra-ui/react'

const Tracker = () => {

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.400'
      backdropFilter='blur(10px) hue-rotate(10deg)'
    />
  )

    const [amount, setAmount] = useState(0);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)

    const {categoryOptions, addCategory} = useCategoryStore((state) => ({
      categoryOptions: state.categoryOptions, 
      addCategory: state.addCategory,
    }))

    const [category, setCategory] = useState(categoryOptions[0]);
    const [categoryToAdd, setCategoryToAdd] = useState('');

    const {addExpense} = useExpenseStore((state)=>({
      addExpense: state.addExpense
  
    }));

    const {total, increaseTotal} = useTotalStore((state) => ({
      total: state.total,
      increaseTotal: state.increaseTotal
    }))

    const handleAddExpense = () => {
      increaseTotal(amount);
      addExpense(amount, category);
    }

    const handleAddCategory = () => {
      addCategory(categoryToAdd);
      onClose();
    }

  return (
      <>
    
      <Flex alignItems={"center"} justifyContent={"center"} p={4} >
        <Box h='90px' >
        <Text as='b' fontSize='4xl' >$ {total} </Text> 
        <Text as='sub'>Total</Text>
        </Box>
      
        </Flex>

      <Stack spacing={4}>
        

       <InputGroup>
         <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
           >
          $
        </InputLeftElement>
        <Input placeholder='Enter amount' value={amount} onChange={e => setAmount(e.target.value)} />
        <Select ml={2} placeholder='Select category' value={category} onChange={(e) => setCategory(e.target.value)}>
             {categoryOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))} 
        </Select>


        <Wrap spacing={4}>
        <WrapItem>
        <Button onClick={handleAddExpense} ml={2} size={"md"} p={3}>Add Expense </Button>
        <Button  variant='outline'  onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}ml={2} size="md" p={3} > Add Category</Button>
       </WrapItem>
       </Wrap>
      </InputGroup>
    </Stack>  


      <ExpenseList/>


      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add New Expense Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input placeholder='Category' value={categoryToAdd} onChange={e => setCategoryToAdd(e.target.value)} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleAddCategory} >Save</Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default Tracker
