import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Center, Flex, Spacer, Text } from '@chakra-ui/layout';
import React, { useContext } from 'react'
import { productContext } from '../../contexts/product-provider.context';
import { ProductContext } from '../../types/product.type';
import styles from './Header.module.css';

function Header() {
  const { searchTerm, setSearchTerm } = useContext<ProductContext>(productContext);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }
  return (
    <header id={styles.header}>
      <Flex h='100%' bg='#a0b0a4' >
         <Center minWidth='100px'>
          <Text fontSize='3xl'>JAP</Text>
        </Center>
        <Spacer />
        <Center w='50%'>
          <InputGroup size='md'>
            <Input
              variant='filled'
              placeholder='Search our products ...'
              size='md'
              value={searchTerm}
              onChange={handleSearch}
            />
          </InputGroup>
        </Center>
        <Spacer />
      </Flex>
    </header>
  )
}

export default Header