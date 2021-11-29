import { atom } from '@mntm/precoil'
import { UserInfo } from '@vkontakte/vk-bridge'
import { message, Snackbar } from '../types'

export const vkUserAtom = atom<UserInfo>({} as UserInfo, 'vkUser')

export const snackbarAtom = atom<Snackbar | undefined>(undefined, 'snackbar')

export const messagesAtom = atom<message[]>([], 'messages')

export const connectionErrorAtom = atom<string>('', 'connectionError')

export const nicknameAtom = atom<string>('', 'nickname')
