const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
export const YOUTUBE_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${YOUTUBE_API_KEY}`
