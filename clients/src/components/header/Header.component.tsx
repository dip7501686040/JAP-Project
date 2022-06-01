import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Center, Flex, Spacer, Text } from '@chakra-ui/layout';
import React from 'react'
import styles from './Header.module.css';

function Header() {
  return (
    <header id={styles.header}>
      <Flex h='100%' bg='#a0b0a4' >
         <Center minWidth='100px'>
          <Text>JAP</Text>
        </Center>
        <Spacer />
        <Center w='50%'>
          <InputGroup size='md'>
          <Input variant='filled' placeholder='Search our products ...' size='md' />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm'>
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </Center>
        <Spacer />
      </Flex>
    </header>
  )
}

export default Header