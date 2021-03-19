import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api, { key } from "../../services/api";

import Header from '../../components/Header';
import Conditions from "../../components/Conditions";

export default function Search() {
  const navigation = useNavigation();

  const [input, setInput] = useState("");
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  async function handleSearch() {
    setError(null);
    setCity(null);

    const response = await api.get(`/weather?key=${key}&city_name=${input}`);
    
    if (response.data.by === "default") {
      setError("Ops, cidade não encontrada!");
      setInput('');
      setCity(null);
      Keyboard.dismiss();
      return;
    }

    setCity(response.data.results);
    setInput('');
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Feather name="chevron-left" size={32} color="#000" />
        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(valor) => setInput(valor)}
          placeholder="Ex: Campinas, SP"
        />
        <TouchableOpacity style={styles.icon} onPress={handleSearch}>
          <Feather name="search" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {error && <Text style={{ marginTop: 25, fontSize: 18 }}>{error}</Text>}

      {city && (
        <View style={styles.foundCity}>
          <Header weather={city}/>
          <Conditions weather={city}/>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "10%",
    backgroundColor: "#e8f0ff",
  },
  backButton: {
    flexDirection: "row",
    marginLeft: 15,
    alignSelf: "flex-start",
    alignItems: "center",
    marginBottom: 30,
  },
  searchBox: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#DDD",
    width: "90%",
    height: 50,
    borderRadius: 8,
  },
  input: {
    width: "85%",
    height: 50,
    backgroundColor: "#fff",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 7,
  },
  icon: {
    width: "15%",
    backgroundColor: "#1ed6ff",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  foundCity: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: 25,
  }
});