import { StyleSheet , TextInput } from 'react-native'
import React from 'react';

const Input = ({placeholder}) => {
  return (
        <TextInput placeholder={placeholder} style={style.inputUsername} />
        );
    };

const style = StyleSheet.create({
    inputUsername: {
        borderColor: 'grey',
        borderWidth: 3,
        borderRadius: 10,
        padding: 10,
        marginBottom : 10,
        marginTop: 0,
      },
});

export default Input
