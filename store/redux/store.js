import { configureStore } from '@reduxjs/toolkit';
import FavoritesReducer from './favorties';
export const store = configureStore({
    reducer: {
        favoriteMeals: FavoritesReducer,
    },
});

export default store;