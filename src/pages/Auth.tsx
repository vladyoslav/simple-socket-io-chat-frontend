import React, { useState } from 'react'
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

export const Auth: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  const [nickname, setNickname] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  return (
    <Panel nav={nav}>
      <PanelHeader>Авторизация</PanelHeader>
      <Group>
        <FormLayout>
          <FormItem
            top='Никнейм'
            placeholder='Введите никнейм'
          >
            <Input
              value={nickname}
              onChange={onChange}
            />
          </FormItem>
          <FormItem>
            <Button
              size='l'
              stretched
            >
              Далее
            </Button>
          </FormItem>
        </FormLayout>
      </Group>
    </Panel>
  )
}
