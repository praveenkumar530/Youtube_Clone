import { HOME_VIDEOS_SUCCESS, HOME_VIDEOS_REQUEST, HOME_VIDEOS_FAIL } from "../actionTypes"

const initialState = {
    videos: [],
    loading: false,
    error: '',
    nextPageToken: null

}

export const homeVideosReducer = (prevState = initialState, action) => {

    const { type, payload } = action

    switch (type) {

        case HOME_VIDEOS_REQUEST:
            return {
                ...prevState,
                loading: true
            }
        case HOME_VIDEOS_SUCCESS:
            console.log(payload)
            console.log(prevState)
            return {
                ...prevState,
                videos: payload.videos,
                nextPageToken: payload.nextPageToken,
                loading: false
            }

        case HOME_VIDEOS_FAIL:
            return {
                ...prevState,
                loading: false,
                error: payload
            }

        default:
            return prevState
    }
}

