import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function CounterScreen () {
  const [ count, setCount ] = useState( 0 )

  const increment = () => setCount( count + 1 )

  const decrement = () => setCount( count - 1 )

  return (
    <View>
      <Button
        title='Increase'
        onPress={ increment }
      />
      <Button
        title='Decrease'
        onPress={ decrement }
      />
      <Text>Current Count: { count }</Text>
    </View>
  )
}

const styles = StyleSheet.create( {

} )