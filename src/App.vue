<script setup lang="ts">
import {onLaunch, onShow, onHide} from '@dcloudio/uni-app'
import {useUserStore} from '@/store'
import {login_qq} from '@/api/user'

const userStore = useUserStore()

onLaunch(() => {
	console.log('App Launch')
	if (!userStore.isLogin) {
		login_qq()
	}
	console.log(userStore.UnionId)
}) 
 
onShow(() => {
	console.log('App Show') 
})

onHide(() => {
	console.log('App Hide')
})
</script>
<style lang="scss">
/*每个页面公共css */
@import "@/static/iconfont2/iconfont.css";

/* #ifdef H5 */
uni-page-head {
  display: none;
}

/* #endif */

.clear-btn {
  @apply p-0;
  background: transparent;
  border: none;

  &::after {
    border: none;
  }
}

.bg-1 {
	@apply text-white;
	background-image: linear-gradient(134deg, #6D6BE3 0%, #A565E4 100%);
}

.bg-2 {
	@apply text-gray-400;
	background-image: linear-gradient(134deg, #8785e4 0%, #b983ef 100%);
}
</style>
 