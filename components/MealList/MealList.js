import { View, Text, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

function MealList({ itemDataProps }) {

    function renderMealItem(itemData) {
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
            id: itemData.item.id,
        }
        return (
            <MealItem
                {...mealItemProps}
            />
        )
    }

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={itemDataProps}
                    renderItem={renderMealItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    )
}

export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});