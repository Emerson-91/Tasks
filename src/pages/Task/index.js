import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import {database, collection, getDocs} from '../../config/firebaseconfig'
import {FontAwesome} from '@expo/vector-icons'
import styles from './style'

export default function Task({/* navigation */}){
    const [task, setTask ] = useState([])

    const getTaskList = async () => {
        try{
        const querySnapshot = await getDocs(collection(database, "Tasks"));
        const tempList = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          tempList.push({
            ...doc.data(),
            id: doc.id,
          })
        });
        setTask(tempList);
      } catch (e) {
        console.error("Error getting documents: ", e);
      }
      }


      useEffect(() => {
        getTaskList();
      }, []);
    return(
        <View style={styles.container}>
            <FlatList
            data={task}
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor={item => item.id}
            />

            <TouchableOpacity style={styles.buttonNewTask}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}