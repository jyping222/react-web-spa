import{message} from 'antd'
import Axios from 'axios'
export default function ajax(url,data={},method="GET"){
    return new Promise(function(resolve,reject){
        let promise
        if(method==="GET"){
            promise=Axios.get(url,{params:data})
          }else{
            promise=Axios.post(url,data)
          }
          promise.then(response=>resolve(response)).catch(err=>message.error('出错'))
    })
       
}