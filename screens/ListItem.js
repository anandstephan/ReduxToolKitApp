import { StyleSheet,View,Text, Pressable } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from "react-redux";
import { changeUpdateStatus, removeTodo } from "../features/todo/todoSlice";
const ListItem = ({text,id}) =>{
    const dispatch = useDispatch()
    const onDeleteHandler = (id) =>{
        dispatch(removeTodo(id))
    }
    const onupdateHandler = (id) =>{
        // console.log(changeUpdateStatus,id)
        dispatch(changeUpdateStatus(id))
    }

return <View style={styles.rowContainer}>
    <Text style={styles.textStyle}>{text}</Text>
    <Pressable onPress={()=>onDeleteHandler(id)}>    
        <Ionicons name={"trash"} size={20} color={'#39B68D'} />
    </Pressable>
    <Pressable onPress={()=>onupdateHandler(id)}>
    <Ionicons name={"create"} size={20} color={'#39B68D'} /> 
    </Pressable>


</View>
}


const styles = StyleSheet.create({
    rowContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#39B68D",
        width:300,
        marginVertical:10
    },
    textStyle:{
        color:"#FFF",
        fontSize:20,
    }
})
export default ListItem