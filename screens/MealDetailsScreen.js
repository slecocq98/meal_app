import { View, Text, StyleSheet, Image, Button, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
// import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/favorties";

import { MEALS } from "../data/dummy-data";


function MealScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);


    // const FavoritesMealContext = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    // const favoriteMealIdsr = FavoritesMealContext.ids;
    const isFavorite = favoriteMealIds.includes(mealId);

    function ChangeFavoriteStatus() {
        console.log('Button pressed');
        if (isFavorite) {
            // FavoritesMealContext.removeFavorite(mealId);
            dispatch(removeFavorite({ id: mealId }));
        } else {
            // FavoritesMealContext.addFavorite(mealId);
            dispatch(addFavorite({ id: mealId }));
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