import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Page1({ navigation }) {
  const secretRef = useRef("");
  const [guess, setGuess] = useState("");

  useEffect(() => {
    // Génération du nombre secret 4 chiffres
    let s = "";
    for (let i = 0; i < 4; i++) s += Math.floor(Math.random() * 10).toString();
    secretRef.current = s;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Devine le nombre à 4 chiffres</Text>

      <TextInput
        style={styles.input}
        placeholder="Tape 4 chiffres"
        keyboardType="numeric"
        maxLength={4}
        value={guess}
        onChangeText={(t) => setGuess(t.replace(/[^0-9]/g, ""))}
      />

      <Button
        title="Vérifier"
        onPress={() => {
          if (guess.length === 4) {
            navigation.navigate("PageA", {
              guess,
              secret: secretRef.current
            });
            setGuess(""); // vider la saisie
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:22, marginBottom:20 },
  input: {
    borderWidth:1,
    padding:10,
    width:"60%",
    textAlign:'center',
    fontSize:20,
    marginBottom:20
  }
});
