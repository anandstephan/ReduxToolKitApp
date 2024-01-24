import { Text, View,StyleSheet, TextInput, Pressable } from "react-native"
import { Provider, useDispatch } from "react-redux"
import { store } from "./app/store"
import List from "./screens/List"
import Todo from "./screens/Todo"

const App = () =>{

return <Provider store={store}>
 <View style={styles.container}>
        <Text style={styles.heading}>TodoList RTK</Text>
      <Todo/>
      <List/>
</View>
</Provider>
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000",
        alignItems:'center'
    },
    heading:{
        color:"#39B68D",
        fontSize:30,
        marginBottom:30,
        fontWeight:"bold"
    }

})
