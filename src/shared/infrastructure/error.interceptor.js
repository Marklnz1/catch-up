export const errorInterceptor = {
    /*
    *
    * @param {import('axios').AxiosResponse} response - the Axios response object from the server
    * @returns {import('axios').AxiosResponse} The same response object, allowing it to be processed further.
    * */
    onResponse:(response)=>{
        response
    },
    onError:(error)=>{
        let message;
        if(error.response){
            console.error('Data: ',error.response.data);
            console.error('Status: ',error.response.status);
            console.error('Headers: ',error.response.headers);
            message = error.response.data['message'] || `Error: ${error.response.status} : ${error.response.statusText}`;
        }else if(error.request){
            console.error('Request: ',error.request);
            message = 'No response received from the server. Please check your internet connection or try again later.';
        }else{
            console.error('Error: ',error.message);
            message = error.message;
        }
        return Promise.reject(message);
    }
}