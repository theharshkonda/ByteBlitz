import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const data = [
    { id: '1', name: 'Ayurvedic Insights' },
    { id: '2', name: 'Mental Health Support' },
    { id: '3', name: 'Doctor Appointments' },
    { id: '4', name: 'Organ Donation Awareness' },
    { id: '5', name: 'Nearby Hospital Information' },
    { id: '6', name: 'Medication Reminders' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log(`Navigate to ${item.name}`)} // Add navigation logic here
    >
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Adjust the number of columns as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 20,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
