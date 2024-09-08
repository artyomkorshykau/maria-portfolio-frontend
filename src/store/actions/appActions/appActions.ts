import { Store } from 'use-global-hook'
import { Actions, State } from '@/store/types'


const appActions = {
  
  toggleMenu( store: Store<State, Actions> ) {
    
    store.setState( { appState: { isOpenMenu: !store.state.appState.isOpenMenu } } )
    
  }
  
}

export default appActions