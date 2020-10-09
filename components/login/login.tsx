import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Content, Item, Input, Icon, Button } from "native-base";
import styles from "./login.stylesheet";
import { ILogin } from "../../models/ILogin";
import authService from "../../http-services/index";
import {AsyncStorage} from 'react-native';



class Login extends Component<any, ILogin> {

  state = {
      username: "",
      password: "",
  };

  async login(){
    const {username, password} = this.state;
    const {navigation} = this.props;

    const payload: ILogin = { username, password};
    console.log(payload);
    const response = await authService.login(payload);

    if(response.ok) {
      await AsyncStorage.setItem('customer', JSON.stringify(response.data));
      navigation.navigate("Home")
    }
    else {
      console.log(response.data);
    }
  
  };


  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={{ paddingVertical: 100, paddingHorizontal: 40 }}>
          <Text style={styles.text}>Hello</Text>
          <Text style={styles.text}>
            There
            <Image source={require("../../assets/Ellipse2.png")} />
          </Text>
        </View>
        <View style={{ paddingHorizontal: 40 }}>
          <Item style={{ borderBottomColor: "#267CE1", borderBottomWidth: 1 }}>
            <Icon active name="person" style={{ color: "#267CE1" }} />
            <Input
             placeholder="Email" 
             onChangeText={text => this.setState({username: text})}
             />
          </Item>

          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginTop: 30,
            }}
          >
            <Icon active name="lock" style={{ color: "#267CE1" }} />
            <Input 
            placeholder="**************"
            onChangeText={text => this.setState({password: text})}
            />
          </Item>
        </View>

        <View
          style={{
            alignItems: "flex-end",
            paddingRight: 40,
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: "#267CE1", fontWeight: "700" }}>
            Forgot Password?
          </Text>
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
          <Button
            rounded
            onPress={() => this.login()}
            style={{
              backgroundColor: "#267CE1",
              width: "auto",
              shadowColor: "#000 ",
              shadowOffset: {
                width: 1,
                height: 10,
              },
              shadowRadius: 60,
              shadowOpacity: 0.12,
            }}
          >
            <Text
              style={{
                color: "white",
                paddingHorizontal: 100,
                fontWeight: "700",
              }}
            >
              Login
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
            New to ZIP CarWash?
            <Text
              style={{ color: "#267CE1", padding: 10 }}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Register
            </Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Login;
