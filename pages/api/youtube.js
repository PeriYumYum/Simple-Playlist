import axios from 'axios'
const apiKey = "AIzaSyDa3PAd9t3hxms4tsuUPMjI_6YbfIv_mQU"
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:apiKey
    },
    // headers:{}
})
//.env無法使用?