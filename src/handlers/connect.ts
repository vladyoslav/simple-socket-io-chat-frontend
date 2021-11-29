import { Handler } from '../api/Handler'
import { lock, push, unlock } from '@cteamdev/router'

export const connect = new Handler({
  trigger: 'connect',
  handler: () => {
    unlock()
    push('/chat')
    lock()
    console.log('connected')
  }
})
