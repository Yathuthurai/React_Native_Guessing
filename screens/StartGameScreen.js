import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = inputText => {
    setEnteredValue(inputText);
    // setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={{margin: 2, padding: 2}}>Select a Number</Text>
          <Input
            keyboardType="number-pad"
            style={styles.input}
            maxLength={2}
            blurOnSubmit
            onChange={numberInputHandler}
            value={enteredValue}
          />
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
    </TouchableWithoutFeedback>
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
  input: {
    width: 60,
    padding: 5,
    textAlign: 'center',
  },
});

export default StartGameScreen;
