import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
const Titlee = ({text}) => {
  return (
    <View>
        
        <Text style={style.text}>{text}</Text>
      
    </View>
  )
}

const style = StyleSheet.create({
text: {
    color: 'black',
    fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold',
    margin:0,
    marginBottom :0,
    alignSelf : 'flex-start', 
    },
});

export default Titlee
