import React from 'react';
import { ScrollView, RefreshControl, StyleSheet, Text, View, Image } from 'react-native';

const LanguageCard = ({ language, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{language}</Text>
      <Text style={styles.experience}>{experience}</Text>
      <Image source={{ uri: logo }} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 16,
    marginVertical: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default LanguageCard;