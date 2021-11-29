import React from 'react'
import { PopoutRoot } from '@cteamdev/router'
import { Loading } from './Loading'

export const Popouts = () => {
  return (
    <PopoutRoot>
      <Loading nav='loading' />
    </PopoutRoot>
  )
}
