import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

export default function ColorScreen () {
  const [ colors, setColors ] = useState( [] )

  return (
    <View style={ { flex: 1 } }>
      <Text>Color Screen</Text>
      <Button
        title='Add A Color'
        onPress={ () => {
          setColors( [ ...colors, randomRGBColor() ] )
        } }
      />
      <FlatList
        keyExtractor={ item => item }
        data={ colors }
        renderItem={ ( { item } ) => (
          <View
            style={ {
              marginLeft: 15,
              height: 100,
              width: 100,
              backgroundColor: item
            } } />
        ) }
      />
    </View>
  )
}

const randomRGBColor = () => {
  const red = Math.floor( Math.random() * 256 )
  const green = Math.floor( Math.random() * 256 )
  const blue = Math.floor( Math.random() * 256 )
  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create( {} )