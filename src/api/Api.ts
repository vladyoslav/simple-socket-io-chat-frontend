import { io, Socket } from 'socket.io-client'
import { apiUri } from '../config'
import { Handler } from './Handler'

const handlers: Handler[] = []

class Api {
  socket: Socket | undefined

  private emit(event: string, ...args: any[]) {
    return new Promise(resolve => this.socket?.emit(event, ...args, resolve))
  }

  connect (query: { nickname: string }) {
    this.socket = io(apiUri, {
      transports: ['websocket', 'polling'],
      query
    })

    handlers.forEach(handler =>
      this.socket?.on(handler.trigger, handler.handler)
    )
  }

  sendMessage (message: string) {
    return this.emit('new_message', message)
  }
}

export const api: Api = new Api()
