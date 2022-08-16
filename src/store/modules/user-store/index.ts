import {defineStore} from 'pinia'
import UserState from './types'

export const useUserStore = defineStore('user', {
	state: (): UserState => ({
		ID: undefined,
		Avatar: undefined,
		CreatedAt: undefined,
		DeletedAt: undefined,
		IsAdmin: undefined,
		Nickname: undefined,
		SessionKey: undefined,
		State: undefined,
		UnionId: undefined,
		UpdatedAt: undefined,
		WxOpenid: undefined,
		Token: undefined,
		access_token: undefined,
		username: undefined,
		role: ''
	}),
	getters: {
		userProfile(state: UserState): UserState {
			return {...state}
		},
		isLogin() {
			if (typeof this.ID === 'undefined') {
				return false
			} else {
				return true
			}
		}
	},
	actions: {
		switchRoles() {
			return new Promise((resolve) => {
				this.role = this.IsAdmin ? 'admin' : 'user'
				resolve(this.IsAdmin)
			})
		},
		// 设置用户的信息
		setInfo(partial: Partial<UserState>) {
			console.log('设置vuex')
			this.$patch(partial)
		},
		// 重置用户信息
		resetInfo() {
			this.$reset()
		},
		// 获取用户信息
		async info() {
		
		}
	}
})
