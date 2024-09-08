import GlobalHook from 'use-global-hook'
import appState from '@/store/states/appState/appState'
import appActions from '@/store/actions/appActions/appActions'
import { Actions, State } from '@/store/types'


const states: State = {
  
  appState: appState
  
}

const actions: Actions = {
  
  appActions: appActions
  
}

const useGlobal = GlobalHook<State, Actions>( states, actions )

export default useGlobal