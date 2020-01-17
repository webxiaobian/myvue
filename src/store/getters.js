export default {
  userInfo: state => state.userInfo.c,
  userAuth: state => state.userInfo.userAuth,
  nickName: state => state.userInfo.nickName,
  img_url: state => state.userInfo.img_url,
  roles: state => state.userInfo.roles
}
