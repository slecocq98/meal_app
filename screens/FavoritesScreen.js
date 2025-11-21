import { View, Text, StyleSheet } from 'react-native';
// import { useContext } from 'react';
// import { FavoritesContext } from '../store/context/favorites-context';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList/MealList';
import { MEALS } from '../data/dummy-data';

export default function FavoritesScreen() {
    // const FavoritesMealContext = useContext(FavoritesContext);
    // const favoriteMealIds = FavoritesMealContext.ids;
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    if (favoriteMealIds.length === 0) {
        return (
            <View style={styles.MessageContainer}>
                <Text style={styles.MessageText}>No favorite meals found. Start adding some!</Text>
            </View>
        );
    }

    const displayedMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));
    console.log(displayedMeals);


    return <MealList itemDataProps={displayedMeals} />;

}

const styles = StyleSheet.create({
    MessageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    MessageText: {
        fontSize: 16,
        textAlign: 'center',
    },
});