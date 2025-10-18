import { View, Text, StyleSheet, Image, Button, ScrollView } from "react-native";
import { useLayoutEffect } from "react";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";

function MealScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const FavoritesMealContext = useContext(FavoritesContext);

    const ids = FavoritesMealContext.ids;
    const isFavorite = ids.includes(mealId);

    function ChangeFavoriteStatus() {
        console.log('Button pressed');
        if (isFavorite) {
            FavoritesMealContext.removeFavorite(mealId);
        } else {
            FavoritesMealContext.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => {
                return <IconButton
                    icon={isFavorite ? 'star' : 'star-outline'}
                    color={isFavorite ? 'yellow' : 'white'}
                    onPress={ChangeFavoriteStatus} />
            }
        });
    }, [mealId, navigation, ChangeFavoriteStatus]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                style={styles.details}
                textStyle={styles.detailText}
            />
            <View style={styles.ListOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View >
            </View>
        </ScrollView>
    )

}

export default MealScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    ListOuterContainer: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
        color: 'white',
    },
    details: {
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listContainer: {
        maxWidth: '80%',
    },

});