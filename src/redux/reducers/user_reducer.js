import { initialState } from "../store"

export const userReducer = (state = initialState.user, action) => {

    switch (action.type) {
        case 'SET_LOGGED_IN':
            return {
                ...state,
                isLogged: true
            }

        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload

            }
        case 'SET_LOGGED_OUT':
            return {
                    isLogged: false,
            }

        default: {
            return state
        }

    }
}

