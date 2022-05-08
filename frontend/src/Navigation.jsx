import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FiArrowUpRight,
  FiBookmark,
  FiBookOpen,
  FiCamera,
  FiFigma,
  FiFilm,
  FiGithub,
  FiMessageCircle,
  FiMessageSquare,
  FiMic,
  FiShield,
  FiTwitter,
  FiX,
} from 'react-icons/fi'
import { ColumnHeader, ColumnIconButton } from './Column'

export const Navbar = ({title, ...props}) => (
  <Flex as="nav" height="full" direction="column" justify="space-between" {...props}>
    <Stack spacing="3">
      <ColumnHeader>
        <HStack spacing="3">
          <ColumnIconButton
            onClick={props.onClose}
            aria-label="Close navigation"
            icon={<FiX />}
            display={{
              base: 'inline-flex',
              lg: 'none',
            }}
          />
          <Text fontWeight="bold" fontSize="sm" lineHeight="1.25rem">
            {title}
          </Text>
        </HStack>
      </ColumnHeader>

      <Stack px="3" spacing="6">
        <Stack spacing="1">
          <NavLink icon={FiBookOpen} aria-current="page">
            All Books
          </NavLink>
        </Stack>
        <Stack spacing="3">
          <NavHeading>Me</NavHeading>
          <Stack spacing="1">
            <NavLink icon={FiBookmark}>BookMarks</NavLink>
            <NavLink icon={FiCamera}>Photography</NavLink>
            <NavLink icon={FiMessageCircle}>Chat</NavLink>
          </Stack>
        </Stack>
        <Stack spacing="3">
          <NavHeading>Projects</NavHeading>
          <Stack spacing="1">
            <NavLink icon={FiMic} isExternal>
              Podcasts
            </NavLink>
            <NavLink icon={FiFigma} isExternal>
              Figma Plugins
            </NavLink>
            <NavLink icon={FiShield}>Security Checklist</NavLink>
            <NavLink icon={FiMessageSquare}>Hacker News</NavLink>
            <NavLink icon={FiFilm}>Movie Guide</NavLink>
          </Stack>
        </Stack>
        <Stack spacing="3">
          <NavHeading>Online</NavHeading>
          <Stack spacing="1">
            <NavLink icon={FiTwitter} isExternal>
              Twitter
            </NavLink>
            <NavLink icon={FiGithub} isExternal>
              GitHub
            </NavLink>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Box borderTopWidth="1px">
      <NavButton>Sign In</NavButton>
    </Box>
  </Flex>
)

const NavButton = (props) => (
  <Button
    isFullWidth
    borderRadius="0"
    variant="ghost"
    size="lg"
    fontSize="sm"
    _hover={{
      bg: mode('gray.100', 'gray.700'),
    }}
    _active={{
      bg: mode('gray.200', 'gray.600'),
    }}
    _focus={{
      boxShadow: 'none',
    }}
    _focusVisible={{
      boxShadow: 'outline',
    }}
    {...props}
  />
)

export const NavLink = (props) => {
  const { icon, ...linkProps } = props
  return (
    <Link
      px="2"
      py="1.5"
      borderRadius="md"
      _hover={{
        bg: mode('gray.100', 'gray.700'),
      }}
      _activeLink={{
        bg: 'gray.700',
        color: 'white',
      }}
      {...linkProps}
    >
      <HStack justify="space-between">
        <HStack as="a" spacing="3">
          <Icon as={icon} />
          <Text as="span" fontSize="sm" lineHeight="1.25rem">
            {props.children}
          </Text>
        </HStack>
        {props.isExternal && (
          <Icon as={FiArrowUpRight} boxSize="4" color={mode('gray.600', 'gray.400')} />
        )}
      </HStack>
    </Link>
  )
}

export const NavHeading = (props) => (
  <Text
    as="h4"
    fontSize="xs"
    fontWeight="semibold"
    px="2"
    lineHeight="1.25"
    color={mode('gray.600', 'gray.400')}
    {...props}
  />
)
