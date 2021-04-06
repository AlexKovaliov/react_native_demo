import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'


export const Todo = ({todo, onRemove}) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }
    return (
        <TouchableOpacity
            onPress={() => Alert.alert(todo.id)}
            onLongPress={longPressHandler}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})
