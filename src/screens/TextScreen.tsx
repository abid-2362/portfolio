import * as React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {useState} from 'react';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  const onPassChange = (nameVal: string) => {
    setPassword(nameVal);
  };

  return (
    <View style={styles.screen}>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        placeholder={'Enter your name'}
        autoCapitalize={'none'}
        autoCorrect={false}
        value={password}
        onChangeText={onPassChange}
      />
      {password.length < 5 ? (
        <Text style={styles.text}>Password must be 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    marginVertical: 15,
  },
  input: {
    height: 30,
    // width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
});

export default TextScreen;
