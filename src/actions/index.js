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