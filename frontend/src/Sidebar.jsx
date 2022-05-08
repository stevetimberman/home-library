import { Link, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import React from 'react'
import { books } from './mockData'

export const Sidebar = ({ selectedBook, setSelectedBook, ...props }) => {
  return (
    <Stack
      spacing={{
        base: '1px',
        lg: '1',
      }}
      px={{
        lg: '3',
      }}
      py="3"
      {...props}
    >
      {books.map((book) => (
        <Link
          key={book.id}
          aria-current={book.id === selectedBook.id ? 'page' : undefined}
          _hover={{
            textDecoration: 'none',
            bg: mode('gray.100', 'gray.700'),
          }}
          _activeLink={{
            bg: 'gray.700',
            color: 'white',
          }}
          borderRadius={{
            lg: 'lg',
          }}
          onClick={() => setSelectedBook(book)}
        >
          <Stack
            spacing="1"
            py={{
              base: '3',
              lg: '2',
            }}
            px={{
              base: '3.5',
              lg: '3',
            }}
            fontSize="sm"
            lineHeight="1.25rem"
          >
            <Text fontWeight="medium">{book.title}</Text>
            <Text opacity={0.8}>{book.excerpt}</Text>
            <Text opacity={0.6}>{book.author}</Text>
          </Stack>
        </Link>
      ))}
    </Stack>
  )
}
