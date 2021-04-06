import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        setTodos(prev => [{
            id: Date.now().toString(),
            title
        }, ...prev])
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <View>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={todos}
                    renderItem={({item}) => <Todo
                        todo={item}
                        onRemove={removeTodo}
                    />}
                />
                {/*<View>
                    {todos.map(todo => (
                        <Todo todo={todo} key={todo.id}/>
                    ))}
                </View>*/}
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
