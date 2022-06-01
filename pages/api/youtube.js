import axios from 'axios'
const apiKey = process.env.NEXT_PUBLIC_MY_API_KEY
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: apiKey,
  },
  // headers:{}
})
//.env無法使用?
