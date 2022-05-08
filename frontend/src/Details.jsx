import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Details = ({ selectedBook, ...props }) => (
  <Box as="main" { ...props }>
    <Stack spacing="8">
      <Stack spacing="3">
        <Heading as="h1" size="lg" color={useColorModeValue('gray.700', 'white')}>
          {selectedBook.title}
        </Heading>
        <Text fontSize='xl' color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}>{selectedBook.author}</Text>
      </Stack>
      <Stack
        spacing="5"
        lineHeight="1.75"
        maxW="65ch"
        color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
      >
        <Text>{selectedBook.excerpt}</Text>
      </Stack>
    </Stack>
  </Box>
)
