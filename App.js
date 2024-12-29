import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default class App extends React.Component{
  state = {
    value:0,
    total_taps:0
  }

  incrementValue = () =>{
    this.setState({
      value:this.state.value + 1,
      total_taps: this.state.total_taps + 1
    })
    console.log("value: " + (this.state.value + 1))
  }

  decrementValue = () =>{
    this.setState({
      value:this.state.value - 1,
      total_taps: this.state.total_taps + 1
    })
    console.log("value: " + (this.state.value - 1))
  }


  render( ){
    return (
      <View style={styles.container}>
        <Text style={{fontSize:60, marginBottom:0}}>{this.state.value}</Text>
        <Text style={{fontSize:12, marginBottom:20,color:'black'}}>{"Total Taps " 
          + this.state.total_taps}</Text>
        <StatusBar styles="auto" />
        <View style={{flexDirection:'row'}}>
          <Button onPress={this.decrementValue} title="Decrease" />
          <Text>   </Text>
          <Button onPress={this.incrementValue} title="Increase" />

        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  }
})