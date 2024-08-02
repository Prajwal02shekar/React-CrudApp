const AuthReducer = (state, action) => {
	let { type, payload } = action;
	switch (type) {
		case "SIGNUP":
			return {
				...state,
				payload,
				isLoading:false,
			}
		case "LOGIN":
			return {
				...state,
				payload,
				isLoading:false,
            }
        case "ACCESS_TOKEN":
            return {
                ...state,
                payload,
            }
        case "LOGOUT":
            return {
                ...state,
                payload,
            }
        case "GETME":
            return {
                ...state,
                profile:payload,
            }
        default:
            return {
                state
            }
	}
}
export default AuthReducer;
