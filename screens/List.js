import { useSelector } from "react-redux"
import { View } from "react-native"
import ListItem from "./ListItem"

const List = () =>{
    const todoList = useSelector(state => state.todos)
return <View>
    {todoList.map(item => <ListItem key={item.id} {...item}/>)}
</View>
}

export default List