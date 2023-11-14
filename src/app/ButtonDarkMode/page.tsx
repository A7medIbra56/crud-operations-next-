'use client'

import {
  Button,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
      {children}
  )
}

export default function ButtonDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
         <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
    </>
  )
}

/* 


































 */