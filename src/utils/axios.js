import axios from "axios";
import store from "../store/index";
import {Toast} from "vant";
import router from "../router/index";

// 上传文件
export const upFile = (formData) => {
    return axios({
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        url: "http://cpfx.78wa.com/public/index.php/upload/Uploads/upload",
        data: formData,
        params: {cowcms_userid: store.state.cowcms_userid}
    })
}

// 创建axios实例
const service = axios.create({
    baseURL: "http://cpfx.78wa.com/public/index.php", // api的base_url
    timeout: 500000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
    (config) => {
        config.params = {
            cowcms_userid: store.state.cowcms_userid,
            ...config.params
        }
        return config;
    },
    error => {
        // Do something with request error
        Promise.reject(error);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => {
        const data = response.data;
        if(data.err!==0 && data.content){
            Toast(data.content);
            if(data.err==1 && data.content=="needAgainLogin"){
                let str = "登录失效，请重新登录";
                router.push("/login?msg="+str);
            }
        }
        return data;
    },
    error => {
        Toast(error.message);
        return Promise.reject(error);
    }
);

export default service;


