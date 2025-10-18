import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
    return data.map((item) => (
        <View style={styles.itmeContainer} key={item}>
            <Text style={styles.itemText}> {item}</Text>
        </View>
    ))
}

export default List;

const styles = StyleSheet.create({
    itmeContainer: {
        maxWidth: '80%',
        marginHorizontal: 24,
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        backgroundColor: '#B3A093',
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
    },
});