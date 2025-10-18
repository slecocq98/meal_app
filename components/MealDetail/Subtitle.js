import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#B3A093',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        margin: 8,
        marginHorizontal: 24,
        borderBottomWidth: 2,
        borderBottomColor: '#B3A093',
        paddingBottom: 8,
    },
});