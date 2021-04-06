import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
    const [todos, setTodos] = useState([
        {id: "1", title: 'Study ReactNative'},
        {id: "2", title: 'Create App'}
    ])
    const [todoId, setTodoId] = useState(null)

    const addTodo = (title) => {
        setTodos(prev => [{
            id: Date.now().toString(),
            title
        }, ...prev])
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    let content = (
        <MainScreen todos={todos}
                    addTodo={addTodo}
                    removeTodo={removeTodo}
                    openTodo={setTodoId}
        />
    )

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo}/>
    }

    return (
        <View>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                {content}
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
