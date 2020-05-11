const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FAVORITE":
            return (
                state.myList.find((item) => item.id === action.payload.id) ?
                    state :
                    {
                        ...state,
                        myList: [...state.myList, action.payload],
                    }
            );
        case "UNSET_FAVORITE":
            return {
                ...state,
                myList: state.myList.filter((video) => (video.id !== action.payload)),
            };
        case "SUBMIT_USER":
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };
        case "TOGGLE_LOG":
            return {
                ...state,
                user: {
                    ...state.user,
                    loggedIn: action.payload,
                },
            };
        case "SET_PLAYING_STATE":
            return {
                ...state,
                playing:
                    state.trends.find((item) => item.id === Number(action.payload)) ||
                    state.originals.find((item) => item.id === Number(action.payload)) ||
                    undefined,
            };
        default:
            return state;
    }
};

export default reducer;