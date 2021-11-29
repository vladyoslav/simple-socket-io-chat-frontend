
type handler = (...args: any[]) => void

type HandlerProps = {
  trigger: string,
  handler: handler
}

export class Handler {
  trigger: string
  handler: handler

  constructor ({ trigger, handler }: HandlerProps) {
    this.trigger = trigger
    this.handler = handler
  }
}