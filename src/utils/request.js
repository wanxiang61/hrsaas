// 引用axios
import axios from 'axios'
// 通过axios创建axios实例
const service = axios.create({
  baseUrl: '/dev',
  timeout: 5000
})
export default service
