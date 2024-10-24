export type AppActions = {
  
  setToggleMenu: () => void
  setOpenContactModal: () => void
  setCloseContactModal: () => void
  
}

export type AppState = {
  
  toggleMenu: boolean
  isShowContactModal: boolean
  
}

export type AppStore = AppActions & AppState