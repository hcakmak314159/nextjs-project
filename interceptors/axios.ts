import axios from "axios";

axios.defaults.baseURL = 'https://assignment-api.piton.com.tr/api/v1/';

axios.interceptors.response.use(resp => resp,  async error =>{
    if(error.response.status === 401){
        const response = await axios.post('refresh',{},{withCredentials:true})

        if (response.status === 200){
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;

            return axios(error.config);
        }
    }

    return error;
});