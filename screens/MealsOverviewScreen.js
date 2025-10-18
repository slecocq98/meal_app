import { MEALS } from "../data/dummy-data";
import { useEffect, useLayoutEffect } from "react";
// import {useRoute} from '@react-navigation/native';
import { CATEGORIES } from "../data/dummy-data";

import MealList from '../components/MealList/MealList';


function MealsOverviewScreen({ route, navigation }) {
    // const route = useRoute();

    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));



    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);

    return <MealList itemDataProps={displayedMeals} />;
}

export default MealsOverviewScreen;

