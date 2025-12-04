import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

let history = []; // historique global

export default function PageA({ route, navigation }) {
  const { guess, secret } = route.params;

  const [result, setResult] = useState("");

  useEffect(() => {
    const res = [];
    const secretArr = secret.split('');
    const taken = [false, false, false, false];

    // 1) Les +
    for (let i = 0; i < 4; i++) {
      if (guess[i] === secret[i]) {
        res[i] = '+';
        taken[i] = true;
      } else {
        res[i] = null;
      }
    }

    // 2) Les -
    for (let i = 0; i < 4; i++) {
      if (res[i] === '+') continue;
      let found = false;
      for (let j = 0; j < 4; j++) {
        if (!taken[j] && guess[i] === secretArr[j]) {
          found = true;
          taken[j] = true;
          break;
        }
      }
      res[i] = found ? '-' : ' ';
    }

    const finalResult = res.join('');
    setResult(finalResult);

    // Enregistrer dans l'historique global
    history.unshift({ guess, result: finalResult });

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Résultat de l'essai :</Text>

      <Text style={styles.text}>
        Proposition : {guess}
      </Text>

      <Text style={styles.result}>
        → {result}
      </Text>

      <View style={{height:20}} />

      <Text style={styles.title}>Historique :</Text>
      {history.length === 0 && <Text>Aucun essai</Text>}
      {history.map((h, i) => (
        <Text key={i} style={styles.historyLine}>
          {h.guess} → {h.result}
        </Text>
      ))}

      <View style={{height:20}} />

      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', padding:20 },
  title: { fontSize:20, fontWeight:'bold', marginTop:10 },
  text: { fontSize:18, marginTop:10 },
  result: { fontSize:40, fontWeight:'bold', marginVertical:20 },
  historyLine: { fontSize:18, marginTop:5 }
});
