import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Content, Item, Input, Icon, Button } from "native-base";
import styles from "./register.stylesheet";

class Register extends Component<any, any> {
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
            <Input placeholder="Full Name" />
          </Item>

          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginTop: 30,
            }}
          >
            <Icon active name="mail" style={{ color: "#267CE1" }} />
            <Input placeholder="Email" />
          </Item>
          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginTop: 30,
            }}
          >
            <Icon active name="lock" style={{ color: "#267CE1" }} />
            <Input placeholder="Password" />
          </Item>

          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginTop: 30,
            }}
          >
            <Icon active name="lock" style={{ color: "#267CE1" }} />
            <Input placeholder="Confirm Password" />
          </Item>
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
          <Button rounded style={{ backgroundColor: "#267CE1", width: "auto" }}>
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
