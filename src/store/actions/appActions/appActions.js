
const appActions = {
  
  toggleMenu( store ) {
    
    store.setState( { appState: { isOpenMenu: !store.state.appState.isOpenMenu } } )
    
  }
  
}

export default appActions