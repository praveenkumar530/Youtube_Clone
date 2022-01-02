import axios from 'axios'

console.log("process.env.REACT_YOUTUBE_API_KEY ", process.env.REACT_YOUTUBE_API_KEY)

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        // key: process.env.REACT_YOUTUBE_API_KEY
        key: 'AIzaSyD68yHHaOoyEr1nD4OceKtQv-Y7i7ilysM'
        // key: 'AIzaSyCitEcdaW74r0W9AKEyJ_PaPjfgTKNIZ5k'
    }
})

export default request