self.addEventListener('install', e => {
  // 安装成功后的回调函数
  // waitUntil：等待service worker安装完成后执行
  // 安装完成后添加缓存并自动立即激活生效
  e.waitUntil(
    preCache()
      .catch(err => {
        console.log('install error:', err)
      })
      .then(self.skipWaiting)
  )
})
