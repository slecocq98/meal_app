import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import MealList from '../components/MealList/MealList';
import { MEALS } from '../data/dummy-data';

export default function FavoritesScreen() {
    const FavoritesMealContext = useContext(FavoritesContext);
    const ids = FavoritesMealContext.ids;

    if (ids.length === 0) {
        return (
            <View style={styles.MessageContainer}>
                <Text style={styles.MessageText}>No favorite meals found. Start adding some!</Text>
            </View>
        );
    }

    const displayedMeals = MEALS.filter((meal) => ids.includes(meal.id));
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