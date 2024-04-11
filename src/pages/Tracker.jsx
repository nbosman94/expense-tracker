import React from 'react'
import { Select, InputGroup, InputLeftElement, Button, Stack, Input, Text, Box, Flex, getToastPlacement} from '@chakra-ui/react'
import ExpenseList from '../components/ExpenseList'
import { useState } from 'react'




const Tracker = () => {
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const options = ["Food", "Bills", "Petrol"]

    const [expenseList, setExpenseList] = useState([]);
    const [category, setCategory] = useState(options[0]);

   
    // const myCategories = [{name: "Food"}, {name: "Bills"}, {name: "Petrol"}]

    let expenseId = 0;

    // const handleAddExpense = () => {
    //     setExpenseList([
    //         ...expenseList,
    //         {id: expenseId++, expense: amount}
    //     ])
    // }
    
    const handleAddAmount = () => {
        setTotal(Number(total)+Number(amount))

        setExpenseList([
            ...expenseList,
            {id: expenseId++, expense: amount, category: category}
        ]);
    }

  return (
      <>
      
      <Flex alignItems={"center"} justifyContent={"center"} p={4}>
      <Box h='140px' >
      <Text as='b' fontSize='4xl' >$ {total} </Text>

      {/* <ul>
          {expenseList.map(l =>(
              <li key={l.id}>{l.expense}</li>
          ))}
      </ul> */}
   
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
        <Select placeholder='Select category' onChange={(e) => setCategory(e.target.value)}>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
          
        </Select>
   <Button onClick={handleAddAmount}>Add</Button>
  </InputGroup>
</Stack>  
      <ExpenseList expenses={expenseList} />

    </>
  )
}

export default Tracker
