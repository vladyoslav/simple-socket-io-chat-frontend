import React from 'react'
import './Message.css'

type MessageProps = {
  mine?: boolean,
  nickname: string,
  text: string
}

export const Message: React.FC<MessageProps> = ({ mine = false, nickname, text }: MessageProps) => {
  return (
    <div className={'Message' + (mine ? ' Message--mine' : '')}>
      <div className='Message__nickname'>
        {nickname}
      </div>
      <div className='Message__text'>
        {text}
      </div>
    </div>
  )
}
