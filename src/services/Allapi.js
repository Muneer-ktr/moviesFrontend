import { baseURL } from "./BaseURL"
import { commonAPI } from "./commanApi"

export const allmovies = async()=>{
    return await commonAPI('GET',`${baseURL}/getallmovies`,"","")
}