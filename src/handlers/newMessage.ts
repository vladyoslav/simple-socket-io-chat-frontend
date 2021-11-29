import { Handler } from '../api/Handler'
import { message } from '../types'
import { useSetAtomState } from '@mntm/precoil'
import { messagesAtom } from '../store'

export const newMessage = new Handler({
  trigger: 'new_message',
  handler: (message: message) => {
    const setMessages = useSetAtomState(messagesAtom)
    setMessages(messages => [...messages, message])
  }
})
