import React, { useReducer } from 'react'
import { View, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const reducer = ( state, action ) => {
  switch ( action.type ) {
    case 'red':
      if ( state.red + action.payload > 255 || state.red + action.payload < 0 ) {
        return state
      }
      return { ...state, red: state.red + action.payload }
    case 'green':
      if ( state.green + action.payload > 255 || state.green + action.payload < 0 ) {
        return state
      }
      return { ...state, green: state.green + action.payload }
    case 'blue':
      if ( state.blue + action.payload > 255 || state.blue + action.payload < 0 ) {
        return state
      }
      return { ...state, blue: state.blue + action.payload }
    default:
      return state
  }
}

const SquareScreen = () => {
  const [ state, dispatch ] = useReducer( reducer, { red: 0, green: 0, blue: 0 } )
  const { red, green, blue } = state

  return (
    <View>
      <ColorCounter
        onIncrease={ () => dispatch( { type: 'red', payload: COLOR_INCREMENT } ) }
        onDecrease={ () => dispatch( { type: 'red', payload: -1 * COLOR_INCREMENT } ) }
        color='Red'
      />
      <ColorCounter
        onIncrease={ () => dispatch( { type: 'green', payload: COLOR_INCREMENT } ) }
        onDecrease={ () => dispatch( { type: 'green', payload: -1 * COLOR_INCREMENT } ) }
        color='Green'
      />
      <ColorCounter
        onIncrease={ () => dispatch( { type: 'blue', payload: COLOR_INCREMENT } ) }
        onDecrease={ () => dispatch( { type: 'blue', payload: -1 * COLOR_INCREMENT } ) }
        color='Blue'
      />
      <View style={ {
        height: 150,
        width: 150,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      } }
      />
    </View>
  )
}

const styles = StyleSheet.create( {} )

export default SquareScreen