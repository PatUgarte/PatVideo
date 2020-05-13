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
        case "SET_SEARCH_RESULT":
            const searchBy = action.payload.searchBy ? action.payload.searchBy : "title";
            return {
                ...state,
                searchParams: action.payload,
                searchResults: searchBy === "id" || searchBy === "year" ? [
                    ...state.trends.filter((item) => item[searchBy] === Number(action.payload.query)),
                    ...state.originals.filter((item) => item[searchBy] === Number(action.payload.query)),
                ] : [
                    ...state.trends.filter((item) => (item[searchBy].toLowerCase()).includes(action.payload.query.toLowerCase())),
                    ...state.originals.filter((item) => (item[searchBy].toLowerCase()).includes(action.payload.query.toLowerCase())),
                ],
            };
        default:
            return state;
    }
};

export default reducer;