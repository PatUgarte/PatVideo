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
        default:
            return state;
    }
};

export default reducer;