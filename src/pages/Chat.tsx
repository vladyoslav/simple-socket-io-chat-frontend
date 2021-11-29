import React, { Ref, useRef, useState } from 'react'
import {
  Panel,
  PanelHeader,
  PanelProps, useAdaptivity, ViewWidth,
  WriteBar,
  WriteBarIcon
} from '@vkontakte/vkui'
import './Chat.css'
import { Message } from '../components/message'

export const Chat: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  const [message, setMessage] = useState('')
  const ref: Ref<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const { viewWidth } = useAdaptivity()
  const isDesktop: boolean = (viewWidth ?? 0) >= ViewWidth.SMALL_TABLET

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const sendMessage = () => {
    console.log(message)
  }

  return (
    <Panel nav={nav} className='ChatPanel'>
      <PanelHeader fixed>Чат</PanelHeader>
      <div className='Chat'>
        <div className='Chat__ChatBox'>
          <Message nickname='test' text='test' />
        </div>
        <div style={{ height: ref.current?.clientHeight }} />
        <WriteBar
          className='Chat__WriteBar'
          placeholder='Сообщение'
          value={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
          getRootRef={ref}
          style={{ width: isDesktop ? '550px' : '100%' }}
          after={
            <WriteBarIcon
              type='submit'
              mode='send'
              disabled={message.length === 0}
              onClick={sendMessage}
            />
          }
        />
      </div>
    </Panel>
  )
}
