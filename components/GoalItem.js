import { View, Text, StyleSheet } from 'react-native';

function GoalItem(props) {
    return (
            <View style={styles.listItem}>
                    <Text style={styles.goalText}>{props.text}</Text>
            </View>
        )
};

export default GoalItem;


const styles = StyleSheet.create({
    listItem: {
        margin: 5,
        padding: 8,
        borderRadius: 20,
        alignContent: 'center',
        backgroundColor: '#1F618D',
        },
        goalText: {
            color: '#FFFFFF',
            fontSize: 18
        }
});