import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'


export async function POST( req: NextRequest ) {
  
  const { email, message } = await req.json()
  
  if( !email || !message ) {
    
    return NextResponse.json(
      { message: 'Email и сообщение обязательны' },
      { status: 400 },
    )
    
  }
  
  // Настройка транспортера для отправки почты
  const transporter = nodemailer.createTransport( {
    
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
      
    }
    
  } )
  
  try {
    
    // Настройка отправляемого письма
    await transporter.sendMail( {
      
      from: email,
      to: process.env.EMAIL_TO,
      subject: 'Новое сообщение с портфолио',
      text: message
      
    } )
    
    return NextResponse.json( { message: 'Сообщение отправлено' }, { status: 200 } )
    
  } catch( error ) {
    
    console.error( error )
    
    return NextResponse.json( { message: 'Ошибка отправки сообщения' }, { status: 500 } )
    
  }
  
}
