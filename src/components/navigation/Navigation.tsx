import React, { ReactNode } from 'react'
import {
  PanelHeader,
  SplitCol,
  SplitLayout,
  useAdaptivity,
  ViewWidth
} from '@vkontakte/vkui'
import { Modals } from '../../modals'
import { CustomSnackbar } from '../snackbar/CustomSnackbar'
import { Structure, Root } from '@cteamdev/router'
import { Popouts } from '../../popouts'


type NavigationProps = {
  children: ReactNode
}

export const Navigation: React.FC<NavigationProps> = ({ children }: NavigationProps) => {
  const { viewWidth } = useAdaptivity()
  const isDesktop: boolean = (viewWidth ?? 0) >= ViewWidth.SMALL_TABLET

  return (
    <Structure>
      <SplitLayout
        header={!isDesktop && <PanelHeader separator={false} />}
        style={{ justifyContent: 'center' }}
        modal={<Modals />}
        popout={<Popouts />}
      >
        <SplitCol
          animate={!isDesktop}
          width={isDesktop ? '550px' : '100%'}
          maxWidth={isDesktop ? '550px' : '100%'}
        >
          <Root>
            {children}
          </Root>
          <CustomSnackbar isDesktop={isDesktop} />
        </SplitCol>
      </SplitLayout>
    </Structure>
  )
}
