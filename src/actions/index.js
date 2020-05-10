export const setFavorite = (payload) => ({
    type: "SET_FAVORITE",
    payload,
});

export const unsetFavorite = (payload) => ({
    type: "UNSET_FAVORITE",
    payload,
});