import React, { useState } from "react";
import { Input, Text } from '@chakra-ui/react'




export const ControlledInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event) => setInputValue(event.target.value)

  
  return (
    <>
      <Text mb='1rem'>Value: {inputValue}</Text>
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder='Here is a sample controlled input'
        size='md'
      />
  </>
  )
}
