import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

function CategorygridTile({ title, color, onPress }) {
    // const navigation = useNavigation();
    return (
        <View style={styles.gridItem}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [styles.buttonStyle, pressed ? styles.buttonPressed : null]} >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )

}

export default CategorygridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 16,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    buttonStyle: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 16,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})
