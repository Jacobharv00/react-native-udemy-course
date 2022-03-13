import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

export default function ComponentsScreen () {
  const jacob = 'Jacob'

  return (
    <View style={ { backgroundColor: 'lightgreen', padding: 5 } }>
      <Text style={ styles.textStyle }>Getting started with react native!</Text>
      <Text style={ styles.subHeaderStyle }>My name is { jacob }</Text>
    </View>
  )
}

const styles = StyleSheet.create( {
  textStyle: {
    fontSize: 45,
    color: 'darkblue'
  },
  subHeaderStyle: {
    fontSize: 20
  }
} )