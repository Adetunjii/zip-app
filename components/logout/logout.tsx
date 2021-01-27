import React, { Component } from "react";
import { View } from "react-native";

class Logout extends Component<any, any> {

  componentDidMount() {
    const {navigation} = this.props;
    navigation.navigate('/');
  }

  render() {
    return <View></View>;
  }
}

export default Logout;
