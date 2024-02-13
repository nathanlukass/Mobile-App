import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
const Title = ({text}) => {
  return (
    <View>
        <Text style={style.text}> {text}</Text>
    </View>
  )
}

const style = StyleSheet.create({
text: {
    color: 'white',
    fontSize: 35,
    lineHeight: 75,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'orange',
    alignSelf : 'auto',
    borderRadius: 90,
    },
});

export default Title
