import { ipcMain } from 'electron'
import native from '../native'

export default (app) => {
  // 推送桌面通知
  ipcMain.on('notification', (e, arg) => {
    native.notification(arg.title, arg.body)
  })
  // 窗口最小化
  ipcMain.on('minimize', () => {
    app.minimize()
  })
}
