import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text style={{margin: 5, padding: 5}}>Select a Number</Text>
        <TextInput placeholder="Type a Number" />
        <View style={styles.buttonContainer}>
          <View style={{width: '40%'}}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={{width: '40%'}}>
            <Button title="Confirm" onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    margin: 10,
  },
});

export default StartGameScreen;
