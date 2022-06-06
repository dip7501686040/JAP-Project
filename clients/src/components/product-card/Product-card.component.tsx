import React from 'react';
import { Image } from "@chakra-ui/image"
import { Badge, Box, Center } from "@chakra-ui/layout"
import { StarIcon } from '@chakra-ui/icons'
import { productCardProps } from '../../types/product.type';


function ProductCard({product}: productCardProps) {
  return (
    <Box
      maxW='sm'
      width='300px'
      h='300px'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      marginBottom='10px'
    >
      <Center>
        <Image
        src='https://www.dabur.com/img/product/large/98-Rheumatil-Tablet.jpg'
        alt='image'
        h='150px'
      />
      </Center>

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            InStock
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {product.deal} deals &bull; {product.free} free
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {product.name}
        </Box>

        <Box>
          <Box as='span' fontSize='md'>
            Rs{'\u00A0'}
          </Box>
          <Box
            as='span'
            fontSize='md'
          >
            {product.rate}{'\u00A0'}
          </Box>
          <Box
            as='span'
            color='gray.600'
            fontSize='md'
            textDecoration='line-through'
          >
            {product.mrp}
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < 4 ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {50} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductCard