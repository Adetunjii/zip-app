import React, { Component } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Text, Button, Header } from "native-base";
import styles from "./welcome.stylesheet";
import { StatusBar } from "expo-status-bar";

class Welcome extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text style={styles.header}> Welcome</Text>
        <Text style={styles.subHeader}>Continue as</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <View style={{ flex: 3 }}>
            <Button
              rounded
              block
              style={styles.btn}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={{ color: "#fff", fontWeight: "700" }}>User</Text>
            </Button>
          </View>
          <View style={{ flex: 3 }}>
            <Button rounded bordered light style={styles.btnBordered}>
              <Text style={{ color: "#000237" }}>Service Personnel</Text>
            </Button>
          </View>
        </View>
        <StatusBar style="dark" />
      </SafeAreaView>
    );
  }
}

export default Welcome;
