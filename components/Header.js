import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    paddingTop: 36,
    paddingBottom: 10,
    backgroundColor: Colors.primary,
    // #f7287b
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Header;
