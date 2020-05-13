export const setFavorite = (payload) => ({
    type: "SET_FAVORITE",
    payload,
});

export const unsetFavorite = (payload) => ({
    type: "UNSET_FAVORITE",
    payload,
});

export const submitUser = (payload) => ({
    type: "SUBMIT_USER",
    payload,
});

export const toggleLog = (payload) => ({
    type: "TOGGLE_LOG",
    payload,
});

export const setPlayingState = (payload) => ({
    type: "SET_PLAYING_STATE",
    payload,
});

export const setSearchResult = (payload) => ({
    type: "SET_SEARCH_RESULT",
    payload,
});