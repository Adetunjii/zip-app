import React, { Component } from "react";
import { View, ScrollView, Text, Image, AsyncStorage } from "react-native";
import { Content, Item, Input, Icon, Button } from "native-base";
import {AntDesign} from '@expo/vector-icons';
import styles from "./register.stylesheet";
import authService from '../../http-services/index';



class Register extends Component<any, any> {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    errorText: ''
  };


  async register() {
    const {navigation} = this.props
    const {firstName, lastName, email, phoneNumber, username, password} = this.state;
    const fullName = firstName.trim() + " " + lastName.trim();
    const payload = {
      fullName: fullName,
      email,
      phoneNumber,
      username,
      password
    }

    console.log(payload);

    
    const response = await authService.signup(payload)
    if(response.ok) {
      await AsyncStorage.setItem('customer', JSON.stringify(response.data));
      navigation.navigate("Home");
    }
    else {
      this.setState({errorText: 'Invalid Details!! Please check your details and try again'})
    }

  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={{ paddingVertical: 60, paddingHorizontal: 40 }}>
          <Text style={styles.text}>Register</Text>
        </View>
        <View style={{ paddingHorizontal: 40 }}>
          <Item style={{ borderBottomColor: "#267CE1", borderBottomWidth: 1 }}>
            <Icon active name="person" style={{ color: "#267CE1" }} />
            <Input placeholder="First Name" onChangeText={(text) => this.setState({firstName: text}) }/>
          </Item>

          <Item style={{ borderBottomColor: "#267CE1", borderBottomWidth: 1,               marginTop: 30,
 }}>
            <Icon active name="person" style={{ color: "#267CE1" }} />
            <Input placeholder="Last Name" onChangeText={(text) => this.setState({lastName: text}) }/>
          </Item>

          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginTop: 30,
            }}
          >
            <Icon active name="mail" style={{ color: "#267CE1" }} />
            <Input placeholder="Email" onChangeText={(text) => this.setState({email: text})}/>
          </Item>

          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginTop: 30,
            }}
          >
            <AntDesign active name="phone" size={20} style={{ color: "#267CE1" }} />
            <Input placeholder="Phone Number" onChangeText={(text) => this.setState({phoneNumber: text})}/>
          </Item>

          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginTop: 30,
            }}
          >
            <Icon active name="person" style={{ color: "#267CE1" }} />
            <Input placeholder="create a username" onChangeText={(text) => this.setState({username: text})}/>
          </Item>


          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginTop: 30,
            }}
          >
            <Icon active name="lock" style={{ color: "#267CE1" }} />
            <Input placeholder="Create a Password" onChangeText={text => this.setState({password: text})} secureTextEntry={true}/>
          </Item>



        
        </View>

        <View style={{flex: 1, justifyContent: "center", flexDirection: "row", marginTop: 10}}>
         { (this.state.errorText === '') ? (<React.Fragment></React.Fragment>) : (
            <View style={{backgroundColor: "#ffb99a", padding: 5, borderRadius: 5}}>
          <Text style={{color: "red" }}>{this.state.errorText}</Text>
              </View>
          )
         }
        </View>

        <View
          style={{
            marginVertical: 50,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button rounded style={{ backgroundColor: "#267CE1", width: "auto" }} onPress={() => this.register()}>
            <Text
              style={{
                color: "white",
                paddingHorizontal: 100,
                fontWeight: "700",
              }}
            >
              Get Started
            </Text>
          </Button>
        </View>

        <View
          style={{
            marginVertical: 50,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>
            Already have an account ?
            <Text
              style={{ color: "#267CE1", padding: 10 }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              {" "}
              Login{" "}
            </Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Register;
