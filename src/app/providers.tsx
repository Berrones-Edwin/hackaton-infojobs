'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Navbar from './components/Navbar'

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider >
        <ColorModeScript initialColorMode={'dark'} />
        <Navbar />
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}