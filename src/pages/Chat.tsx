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
import { api } from '../api/Api'
import { useAtomValue } from '@mntm/precoil'
import { messagesAtom, nicknameAtom } from '../store'

export const Chat: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  const [value, setValue] = useState('')

  const ref: Ref<HTMLDivElement> = useRef<HTMLDivElement>(null)

  const messages = useAtomValue(messagesAtom)

  const { viewWidth } = useAdaptivity()
  const isDesktop: boolean = (viewWidth ?? 0) >= ViewWidth.SMALL_TABLET

  const nickname = useAtomValue(nicknameAtom)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const sendMessage = () => {
    if (!value) return
    console.log(value)
    api.sendMessage(value)
    setValue('')
  }

  return (
    <Panel nav={nav} className='ChatPanel'>
      <PanelHeader fixed>Чат</PanelHeader>
      <div className='Chat'>
        <div className='Chat__ChatBox'>
          {messages.map(message =>
            <Message
              key={message.id}
              mine={message.nickname === nickname}
              nickname={message.nickname}
              text={message.text}
            />
          )}
        </div>
        <div style={{ height: ref.current?.clientHeight }} />
        <WriteBar
          className='Chat__WriteBar'
          placeholder='Сообщение'
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          getRootRef={ref}
          style={{ width: isDesktop ? '550px' : '100%' }}
          after={
            <WriteBarIcon
              type='submit'
              mode='send'
              disabled={value.length === 0}
              onClick={sendMessage}
            />
          }
        />
      </div>
    </Panel>
  )
}
