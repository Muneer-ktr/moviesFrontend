import axios from "axios";

export const commonAPI = async(httpmethod,url,reqbody,reqHeader)=>{
    let reqConfig = {
        method: httpmethod,
        url,
        data:reqbody,
        headers: reqHeader? reqHeader : {"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}