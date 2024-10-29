import cover from '@/assets/works/1.jpg'


type WorksType = {
  
  id: number
  title: string
  width: number
  height: number
  cover: string;
  images: string[]
  
}

export const works: WorksType[] = [
  
  { id: 0, title: 'magazine front design', width: 600, height: 733, cover: cover.src, images: [] },
  { id: 3, title: 'product bottle design', width: 600, height: 404, cover: cover.src, images: [] },
  { id: 1, title: 'coffee bottle mockup', width: 600, height: 733, cover: cover.src, images: [] },
  { id: 4, title: 'perfume brand identity', width: 600, height: 619, cover: cover.src, images: [] },
  { id: 2, title: 'product tag mockup', width: 600, height: 506, cover: cover.src, images: [] },
  { id: 5, title: 'magazine & brochure mockup', width: 600, height: 619, cover: cover.src, images: [] }

]