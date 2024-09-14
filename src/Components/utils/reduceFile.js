export const initialState = {
  theme: "light",
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE-THEME": {
      const newTheme = state.theme === "light" ? "dark" : "light";
      return {
        ...state,
        theme: newTheme,
      };
    }

    case "LOAD-DATA": {
      return {
        ...state,
        data: action.payload,
      };
    }

    case "ADD-FAV": {
      const updatedFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return {
        ...state,
        favs: updatedFavs,
      };
    }

    case "REMOVE-FAV": {
      const updatedFavs = state.favs.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return {
        ...state,
        favs: updatedFavs,
      };
    }

    case "CLEAN-FAVS": {
      localStorage.removeItem("favs");
      return {
        ...state,
        favs: [],
      };
    }

    default:
      throw new Error("Acción no permitida");
  }
};
