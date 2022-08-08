import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [franceGoals, setFranceGoals] = useState([]);


  function addGoalHandler(enteredGoalText) {
    setFranceGoals((currentFranceGoals) => [
      ...currentFranceGoals, {text: enteredGoalText, id: Math.random().toString()}
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onChangeText={goalInputHandler} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer} >
        <FlatList data={franceGoals} 
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} />
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
  goalsContainer: {
    flex: 7
  }
  
});