import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Manrope } from 'next/font/google'
import '@/styles/global.scss'
import Head from 'next/head'

const manrope = Manrope( { subsets: [ 'latin' ] } )

export const metadata: Metadata = {
  
  description: 'Communication and graphic design',
  title: 'Maria Designer'
  
}

export default function RootLayout( { children }: Readonly<{
  
  children: ReactNode;
  
}> ) {
  
  return (
    
    <html lang={ 'en' }>
    
      <Head>
        
        <link rel="icon" href="/favicon.ico" type="image/png" sizes="16x16 32x32 48x48"/>
        
      </Head>
      
      <body className={ manrope.className }>
      
        { children }
      
      </body>
    
    </html>
    
  )
  
}
