import { View,StyleSheet,TextInput,Text,Pressable, Alert } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { addTodo,finalUpdate } from "../features/todo/todoSlice"
const Todo = () =>{

    const [input,setInput] = useState('')
    const [updateOrNot,setUpdateOrNot] = useState(false)
    const dispatch = useDispatch()
    const onAddTodo = () =>{
        dispatch(addTodo(input))
        setInput('')
    }
    const onUpdateTodo = () =>{
        const truedItem = todoList.filter(item => item.isUpdate===true)[0]

        dispatch(finalUpdate({id:truedItem.id,todo:input}))
        setUpdateOrNot(prev => !prev)
        setInput('')
    }
    const todoList = useSelector(state => state.todos)
    useEffect(()=>{
        const truedItem = todoList.filter(item => item.isUpdate===true)[0]
        if(truedItem!==undefined){
            setInput(truedItem.text)
            setUpdateOrNot(prev => !prev)
           }
    },[todoList])

return   <View style={styles.innerContainer}>
<TextInput style={styles.textStyle} value={input} onChangeText={e =>setInput(e)} placeholderTextColor="#FFF" placeholder="Enter Your Todo..." />
<Pressable style={styles.btn} onPress={updateOrNot? onUpdateTodo:onAddTodo}>
    <Text style={{color:"#FFF"}}>{updateOrNot?"Edit":"Add"}</Text>
</Pressable>
</View>
}

export default Todo

const styles = StyleSheet.create({
    innerContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        width:'90%',
        marginVertical:20
    },
    textStyle:{
        color:"#FFF",
        width:'80%',
        backgroundColor:"gray",

    },
    btn:{
      backgroundColor: "#39B68D",
      padding: 15,
    //   marginTop: 60,
      borderRadius: 150,
      justifyContent: "center",
      alignItems: "center",
    //   marginHorizontal:150
    }
})