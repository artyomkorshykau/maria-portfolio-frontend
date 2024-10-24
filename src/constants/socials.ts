type SocialsType = {
  
  id: number
  value: 'linkedin' | 'instagram' | 'telegram' | 'gmail'
  link: string
  target: '_blank' | '_self'
  
}

export const socials: SocialsType[] = [
  
  { id: 0, value: 'instagram', link: 'https://www.instagram.com/artms.h', target: '_blank' },
  { id: 1, value: 'telegram', link: 'https://www.t.me/mariakorshykava', target: '_blank' },
  { id: 2, value: 'linkedin', link: '', target: '_blank' },
  { id: 3, value: 'gmail', link: 'mailto:mashayurcha@gmail.com', target: '_self' }

]