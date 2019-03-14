import React, { Component } from 'react';
import {TextInput, Button, Text, View } from 'react-native';

export default class App extends React.Component {

  //States are first defined in a constructor of props
  constructor(props){
    super(props);

    //We define the initial state
    this.state = {
      firstInput: null,
      lastInput: null,
      stateChanged: false
    }

  }



  //Definition of a method we want to trigger when the state changes
  displayResult(){

    //We validate if the input changed
    if((this.state.firstInput !== null)&&(this.state.lastInput !== null)){

      //If so, we change the stateChanged flag
      this.setState({stateChanged: true});
    }

    else{
      this.setState({stateChanged: false});
    }
  }

  render() {
    return (
      <View style={{padding: 50}}>
        <View>
          <Text >Enter your name</Text>
          <TextInput style={{backgroundColor: 'grey'}} onChangeText={(inputValue) => this.setState({firstInput: inputValue})}  />
        </View>
        <View>
          <Text >Enter your lastname</Text>
          <TextInput style={{backgroundColor: 'grey'}} onChangeText={(inputValue) => this.setState({lastInput: inputValue})}  />
        </View>

        <View>
          <Button onPress={() => {this.displayResult()}} title="Press Here"  />
        </View>

         <View >
          <Text > Your full name is: {this.state.stateChanged ? this.state.firstInput : "" } {this.state.stateChanged ? this.state.lastInput : "" }</Text>
          <Text >  </Text>
         </View>

      </View>
    );
  }
}
