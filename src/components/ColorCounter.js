import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ColorCounter = ( { color, onIncrease, onDecrease } ) => {
  return (
    <View>
      <Text style={ styles.textStyle }>{ color }</Text>
      <Button onPress={ () => onIncrease() } title={ `Increase ${color}` } />
      <Button onPress={ () => onDecrease() } title={ `Decrease ${color}` } />
    </View>
  )
}

const styles = StyleSheet.create( {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 30,
    backgroundColor: 'yellow',
    padding: 10
  },
} )

export default ColorCounter