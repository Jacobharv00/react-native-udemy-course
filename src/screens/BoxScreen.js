import React from 'react'
import { View, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={ styles.parentStyle }>
      <View style={ styles.view1Style } />
      <View style={ styles.view2Style } />
      <View style={ styles.view3Style } />
    </View>
  )
}

const styles = StyleSheet.create( {
  parentStyle: {
    borderWidth: 5,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view1Style: {
    borderWidth: 3,
    borderColor: 'red',
    height: 50,
    width: 50,
  },
  view2Style: {
    borderWidth: 3,
    borderColor: 'green',
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
  view3Style: {
    borderWidth: 3,
    borderColor: 'purple',
    height: 50,
    width: 50,
  },
} )

export default BoxScreen
