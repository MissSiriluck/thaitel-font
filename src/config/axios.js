import axios from 'axios';
import { getToken, removeToken } from '../service/localStorage';
import { API_URL } from './env'

axios.defaults.baseURL =  API_URL;

// บอกว่าถ้าต้องส่งข้อมูลไป จะมีการส่ง request header ซึ่งจะ config ทุก request
axios.interceptors.request.use(config => {
    config.headers.authorization = 'Bearer ' + getToken();
    config.headers.test = 'Test Interceptor';
    return config // ถ้า config เสร็จแล้วจะต้อง return
    }, 
(err) => Promise.reject(err)
)

axios.interceptors.response.use(response => {
    return response; // ถ้าไม่มี err จะ return part นี้ออกไป
}, err => {
    if (err.response && err.response.status === 401 ) { // ดัก err 401 
        removeToken();
        window.location.reload();
        return; // return undefined จะได้ไม่ต้องไปทำงานในส่วนของการส่ง err
    }
    return Promise.reject(err)
})

export default axios;