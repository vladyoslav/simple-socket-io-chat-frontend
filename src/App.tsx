import React, { useEffect } from 'react'
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  PlatformType
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import { View } from '@cteamdev/router'
import { Auth, Chat } from './pages'
import { Navigation } from './components/navigation'
import { getPlatform } from './utils'
import { useSetAtomState } from '@mntm/precoil'
import { vkUserAtom } from './store'
import bridge, { UserInfo } from '@vkontakte/vk-bridge'

export const App: React.FC = () => {
  const platform: PlatformType = getPlatform()
  const setVkUser = useSetAtomState(vkUserAtom)

  useEffect(() => {
    const load = async () => {
      const vkUser: UserInfo = await bridge.send('VKWebAppGetUserInfo')
      setVkUser(vkUser)
    }

    load()
  }, [])

  return (
    <ConfigProvider platform={platform}>
      <AdaptivityProvider>
        <AppRoot>
          <Navigation>
            <View nav='/'>
              <Auth nav='/' />
              <Chat nav='/chat' />
            </View>
          </Navigation>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}
