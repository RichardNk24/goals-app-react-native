import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [franceGoals, setFranceGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler() {
    setFranceGoals(currentFranceGoals => [
      ...franceGoals, {text: enteredGoalText, id: Math.random().toString()}
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course goal!' 
          onChangeText={goalInputHandler} 
        />
        <Button title='Add Goal'  onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer} >
        <FlatList data={franceGoals} 
        renderItem={(itemData) => {
          return (
            <View style={styles.listItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
        alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    height:'35%' ,
    width: '70%',
    marginRight: 2
  },
  goalsContainer: {
    flex: 7
  },
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