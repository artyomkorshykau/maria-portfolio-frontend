type AppActions = {
  
  setToggleMenu: () => void
  setOpenContactModal: () => void
  setCloseContactModal: () => void
  
}

type AppState = {
  
  toggleMenu: boolean
  isShowContactModal: boolean
  
}

export type AppStore = AppActions & AppState