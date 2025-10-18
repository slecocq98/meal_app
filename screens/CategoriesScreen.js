import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategorygridTile from '../components/CategorygridTile';




function CategoriesScreen({ navigation }) {

    function RenderCategoryItem(itemData) {
        function handleCategoryPress() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            });
        }

        return (
            <CategorygridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={handleCategoryPress} />
        )
    }


    return (
        <View style={styles.container}>
            <FlatList style={styles.flatList}
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => RenderCategoryItem({ item })}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        flex: 1,
    }
})

export default CategoriesScreen;