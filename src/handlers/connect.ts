import { Handler } from '../api/Handler'
import { replace } from '@cteamdev/router'

export const connect = new Handler({
  trigger: 'connect',
  handler: () => {
    replace('/chat')
    console.log('connected')
  }
})
