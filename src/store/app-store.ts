import { create } from 'zustand'
import { AppStore } from '@/store/types/app-store'


export const useAppStore = create<AppStore>( ( set ) => ( {
  
  toggleMenu: false,
  isShowContactModal: false,
  
  setToggleMenu: () => set( ( state ) => ( { toggleMenu: !state.toggleMenu } ) ),
  setOpenContactModal: () => set( { isShowContactModal: true } ),
  setCloseContactModal: () => set( { isShowContactModal: false } )
  
} ) )
