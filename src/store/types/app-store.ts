export type AppActions = {
  
  setToggleMenu: () => void
  
}

export type AppState = {
  
  toggleMenu: boolean
  
}

export type AppStore = AppActions & AppState