import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

interface ToDo {
  text: string;
  completed: boolean;
}

export default function App() {
  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<ToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);

  const handleSubmit = (): void => {
    if (value)
      setToDos([...toDoList, { text: value, completed: false }]);
    else showError(true);
    setValue("");
  };

//for removing cross 
  const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter your task..."
          value={value}
          onChangeText={a => {
            setValue(a);
            showError(false);
          }}
          style={styles.inputBox}
        />

        
        <Button title="Add Task" onPress={handleSubmit} />
      </View>
      {error && (
        <Text style={styles.error}>Error: Input field is empty...</Text>
      )}

      <Text style={styles.subtitle}>Your Tasks</Text>
      {toDoList.length === 0 && <Text>No tasks</Text>}
      {toDoList.map((toDo: ToDo, index: number) => (
        <View style={styles.listItem} key={`${index}_${toDo.text}`}>
          <Text style={styles.task}>
            {toDo.text}
          </Text>

          <Button
            title="X"
            onPress={() => {removeItem(index);
            }}
            color="red"
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 45,
    alignItems: "center"
  },
  input: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  inputBox: {
    width: 200,
    borderColor: "black",
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8
  },
  title: {
    fontSize: 50,
    marginBottom: 40,
    fontWeight: "bold",
    
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: "black"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10
  },
  addButton: {
    alignItems: "flex-end"
  },
  task: {
    width: 200
  },
  error: {
    color: "red"
  }
});

