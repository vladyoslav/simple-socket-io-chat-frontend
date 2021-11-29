import React from 'react'
import { PopoutProps } from '../types'
import { ScreenSpinner } from '@vkontakte/vkui'

export const Loading: React.FC<PopoutProps> = () => {

  return (
    <ScreenSpinner />
  )
}
