import React from 'react';
import { View , Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';
import { condition_slug } from '../../utils/condition';

export default function Header({ weather }) {
  
  const backgroundLinear = {
    noite: ['#0c3741','#0f2f61'],
    dia: ['#1ed6ff','#97c1ff']
  }

  let icon = condition_slug(weather.condition_slug)

  return (
    <LinearGradient
      style={styles.header}
      colors={backgroundLinear[weather.currently]}
    >
      <Text style={styles.date}>{weather.date}</Text>
      <Text style={styles.city}>{weather.city}</Text>

      <View>
        <Ionicons 
          name={icon.name}
          color={icon.color}
          size={150}
        />
        <Text style={styles.description}>{weather.description}</Text>

      </View>

      <Text style={styles.temp}>{weather.condition_code}º</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '95%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  date: {
    color: '#fff',
    fontSize: 17
  },
  city: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  temp: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold'
  },
  description: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center'
  }
})