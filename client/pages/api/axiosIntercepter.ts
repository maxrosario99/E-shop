import axios from "axios";
// Add a response interceptor

axios.interceptors.response.use(
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    function (response){
        return response
    }
    ,
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.error('Axios response error:', error)
    function(error) {
        const {response} = error;
        console.log(response)
        return Promise.reject(response.data)
    }
)


