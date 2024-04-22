import { Flex, Box, Heading, Stack, Button, useDisclosure, ScaleFade } from '@chakra-ui/react'
import React from 'react'
import { useCallback } from 'react'
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import SpendingCard from '../components/SpendingCard'
import { useExpenseStore } from '../store/expenseStore'
import { useCategoryStore } from '../store/categoryStore'




const OverviewPage = () => {

  const {isOpen, onToggle} = useDisclosure()

    const {expenseList} = useExpenseStore((state) => ({
        expenseList: state.expenseList
    }))
    const {categoryOptions} = useCategoryStore((state) => ({
        categoryOptions: state.categoryOptions
      }))

    const categoryTotals = {};

      expenseList.forEach(expense => {
        if (categoryOptions.includes(expense.category)) {
            const amount = parseFloat(expense.amount)
            if(!isNaN(amount)) {
                if (categoryTotals[expense.category]) {
                    categoryTotals[expense.category] += amount;
                  } else {
                    categoryTotals[expense.category] = amount;
                  }
            }
        }
      });

  return (
    <>
    <Flex flexDir={"column"} mt={20} alignContent={"center"} justifyContent={"center"}>
      <Flex alignContent={"center"} justifyContent={"center"} h={100} w={"100%"}>
        <Heading as={"h2"} size="xl">Spending</Heading>
        </Flex>
          <Flex alignContent={"center"} justifyContent={"center"}>
                <Flex mt={3} flexDir={"row"} alignContent={"center"} justifyContent={"center"}>
                    {Object.keys(categoryTotals).map(category => (
                        <SpendingCard key={category} title={category} amount={categoryTotals[category]}/>
                    ))}
                </Flex>
           </Flex>
        </Flex>
      <Flex>
    </Flex>
      </>
    
  )
  
}


export default OverviewPage
