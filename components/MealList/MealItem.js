import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import MealDetails from "../MealDetails";
import { BlurView } from 'expo-blur';

function MealItem({ title, imageUrl, duration, complexity, affordability, id }) {

    const navigation = useNavigation();

    function handlePress() {
        console.log('i\'m going to the meal screen withr id', id);
        navigation.navigate('MealDetails', {
            mealId: id,
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [styles.buttonStyle, pressed ? styles.buttonPressed : null]}
                onPress={handlePress}
            >
                <View style={styles.innerContainer}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />

            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowRadius: 16,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
});