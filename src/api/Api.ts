import { io, Socket } from 'socket.io-client'
import { apiUri } from '../config'
import { connect, newMessage } from '../handlers'

const handlers = [
  newMessage,
  connect
]

class Api {
  socket: Socket | undefined

  private emit(event: string, ...args: any[]) {
    return new Promise(resolve => this.socket?.emit(event, ...args, resolve))
  }

  connect (query: { nickname: string }) {
    this.socket = io(apiUri, {
      query
    })

    handlers.forEach(handler =>
      this.socket?.on(handler.trigger, handler.handler)
    )
  }

  sendMessage (message: string) {
    return this.emit('new_message', message)
  }

  getMessages () {
    return this.emit('get_messages')
  }
}

export const api: Api = new Api()
