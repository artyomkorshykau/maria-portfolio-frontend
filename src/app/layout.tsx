import type { Metadata } from 'next'

import { ReactNode } from 'react'

import { Manrope } from 'next/font/google'

import '@/styles/index.scss'


const manrope = Manrope( { subsets: [ 'latin' ] } )

export const metadata: Metadata = {
  
  description: 'Communication and graphic design',
  title: 'Designer Maria'
  
}

export default function RootLayout( { children }: Readonly<{
  
  children: ReactNode
  
}> ) {
  
  return (
    
    <html lang={ 'en' }>
    
    <body className={ manrope.className }>{ children }</body>
    
    </html>
  
  )
  
}
