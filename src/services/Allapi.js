import { baseURL } from "./BaseURL"
import { commonAPI } from "./commonApi"

export const allmovies = async()=>{
    return await commonAPI('GET',`${baseURL}/movies/getallmovies`,"","")
}

export const addMovies = async(reqBody,reqHeader)=>{
    return await commonAPI('POST'`${baseURL}/movies/addmovies`,reqBody,reqHeader)
}

export const getMoviedetails=async(id)=>{
    return await commonAPI('GET',`${baseURL}/movies/getMovieById/${id}`,"","")
}