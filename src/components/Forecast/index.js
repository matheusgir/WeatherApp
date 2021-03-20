import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Ionicons} from '@expo/vector-icons'
import {condition} from '../../utils/condition'


export default function Forecast({data}){
    let icon = condition(data.condition);

    return (
        <View style={styles.container}>
          <View style={styles.date}>
            <Text style={{ color: "#1ed6ff"}}>{data.weekday}</Text>
            <Text>{data.date}</Text>
          </View>
          <Ionicons name={icon.name} color={icon.color} size={25}/>
          <View style={styles.temp}>
            <Text>{data.min}º</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{data.max}º</Text>
          </View>
        </View>
      )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginRight: 10,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      date:{
        fontSize:14,
        justifyContent: 'center',
        alignItems: 'center',
      },
      temp: {
        alignContent: 'center'
      }
    })