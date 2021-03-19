import React,{ useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import * as Location from 'expo-location';
import api, { key } from '../../services/api';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

export default function Home() {
  const [errorMsg,setErrorMsg ] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});

  useEffect(() => {

    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if(status !== 'granted'){
        setErrorMsg('Permissão negada para acessar localização.');
        setLoading(false);
        return
      }

      let location = await Location.getCurrentPositionAsync({});

      const {latitude, longitude} = location.coords;
      const response = await api.get(`/weather?key=${key}&lat=${latitude}&lon=${longitude}`);
      setWeather(response.data.results);
      setLoading(false);

    })();

  },[]);

  if(loading){
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 17, fontStyle: 'italic'}}>Carregando dados...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header weather={weather} />
      <Conditions weather={weather}/>
      <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{paddingBottom: '5%'}}
        style={styles.list}
        data={weather.forecast}
        keyExtractor={item => item.date}
        renderItem={({item}) => <Forecast data={item}/>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%',
  },
  list: {
    marginTop: 10,
    marginLeft: 10
  }
})