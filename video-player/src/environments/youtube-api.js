import axios from 'axios'

const key = 'AIzaSyDQnE-22b17dnEz4nqg9QQ0DK4smH0aMv0'

export const defaultParams = {
  part: 'snippet',
  maxResults: 12,
  key,
}

export const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
})
