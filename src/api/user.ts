import {request} from '@/utils/request'
import {useUserStore} from '@/store'

export const login_qq = () => {
	return new Promise((resolve, reject) => {
		uni.login({
			provider: 'weixin',
	  		success: (loginRes) => { 
				console.log(loginRes)      
				request('/web/wxLogin', {
					method: 'POST', 
					data: {code: loginRes.code}
				}).then(({data}: any) => {
					const userStore = useUserStore()
					userStore.setInfo(
						data.userInfo
					)
				}, (err) => {
					console.log(err)
				})
			}
		})
	})
}

export const wxResign = (data: { nickname: string, avatar: string }) => {
	return new Promise((resolve, reject) => {
		request('/user/resign', {method: 'POST', data: data}).then((res => {
			console.log(res)
		}))
	})
}

export const Justlogin = () => {
	return new Promise((resolve, reject) => {
		login_qq().then((res) => {
			// @ts-ignore
			resolve(res.data)
		}).catch(e => {
			reject(e)
		})
	})
}


export const getUserInfo = (data: any) => {
	console.log(data)
	return request(`/get-user`, {
		method: 'Post',
		data: data
	})
}

export const editUserInfo = (data: any) => {
	return request(`/api/edit-user`, {
		method: 'Post',
		data: data
	})
}
