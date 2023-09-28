export const NEXT_MOVIE = "Sonraki film";
export const PREV_MOVIE = "Önceki film";
export const ADD_FAVORITE = "Favorilere ekle";
export const REMOVE_FAVORITE = "Favorilerden çıkar";
export const FIRST_MOVIE = "İlk film";

export const nextMovie = () => {
  return {
    type: NEXT_MOVIE,
  };
};

export const prevMovie = () => {
  return {
    type: PREV_MOVIE,
  };
};

export const addFavorite = (movie) => {
  return {
    type: ADD_FAVORITE,
    payload: movie,
  };
};

export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};

export const firstMovie = () => {
  return {
    type: FIRST_MOVIE,
  };
};
