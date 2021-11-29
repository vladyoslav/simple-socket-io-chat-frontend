import React, { useEffect, useState } from 'react'
import {
  Button,
  FormItem,
  FormLayout,
  Group,
  Input,
  Panel,
  PanelHeader,
  PanelProps
} from '@vkontakte/vkui'
import { api } from '../api/Api'
import { useAtomState } from '@mntm/precoil'
import { nicknameAtom } from '../store'
import { back, lock, push, unlock } from '@cteamdev/router'

export const Auth: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  const [nickname, setNickname] = useAtomState(nicknameAtom)
  const [error, setError] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!nickname) return

    push('/?popout=loading')
    lock()
    api.connect({ nickname: nickname })
  }

  useEffect(() => {
    api.socket?.on('connect_error', (error: Error) => {
      unlock()
      back()
      setError(error.message)
    })

    return () => { api.socket?.removeListener('connect_error') }
  }, [api.socket])

  return (
    <Panel nav={nav}>
      <PanelHeader>Авторизация</PanelHeader>
      <Group>
        <FormLayout onSubmit={onSubmit}>
          <FormItem
            top='Никнейм'
            placeholder='Введите никнейм'
            status={error ? 'error' : 'default'}
            bottom={error}
          >
            <Input
              value={nickname}
              onChange={onChange}
            />
          </FormItem>
          <FormItem>
            <Button
              type='submit'
              size='l'
              stretched
              disabled={nickname.length === 0}
            >
              Далее
            </Button>
          </FormItem>
        </FormLayout>
      </Group>
    </Panel>
  )
}
