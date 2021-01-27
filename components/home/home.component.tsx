import React, { Component } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Card, CardItem, Body, Button } from "native-base";
import styles from "./home.stylesheet";
import AppCard from "../reusables/card";
import {AsyncStorage} from 'react-native';
import { ICustomer } from "../../models/ICustomer";

interface HomeState {
  customer: ICustomer
}

class Home extends Component<any, HomeState> {

    state = {
      
    }

  async getCustomerData() {

    try {
    const value = await AsyncStorage.getItem('customer');
      if(value !== null) {
        this.setState({customer: JSON.parse(value)});
      }
  }
    catch(error) {
      console.error(error);
    }


  }

  componentDidMount() {
    const {navigation} = this.props;
    if(this.isAuthenticated() == false) {
      navigation.navigate("Login");
    }
    this.getCustomerData();

  }

 isAuthenticated() {
   const value = AsyncStorage.getItem('customer');

   if(value && value !== null) {
     return true;
   }
   return false;
 }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("Edit-Profile")}>
            <Card
              pointerEvents="none"
              style={{
                borderRadius: 16,
                shadowOffset: { width: 0, height: 0 },
              }}
            >
              <View
                style={{
                  backgroundColor: "#67FF76",
                  padding: 20,
                  borderRadius: 16,
                }}
              >
                <View style={{ flexDirection: "row", marginVertical: 20 }}>
                  <Image
                    source={require("../../assets/cleaner.jpg")}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                  <View style={{ paddingVertical: 8, paddingHorizontal: 15 }}>
                    <Text
                      style={{
                        color: "#fff",
                        textShadowOffset: { width: 1, height: 1 },
                        fontWeight: "700",
                        fontSize: 15,
                      }}
                    >
                      {'helo'}
                    </Text>
                    <View style={{ flexDirection: "row", paddingTop: 10 }}>
                      <Image
                        source={require("../../assets/user_location_icon.png")}
                      />
                      <Text
                        style={{
                          color: "#fff",
                          fontWeight: "700",
                          paddingTop: 2,
                          paddingLeft: 3,
                        }}
                      >
                        Address
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{ flexDirection: "row", justifyContent: "flex-end" }}
                >
                  <Image
                    source={require("../../assets/wallet_icon.png")}
                    style={{ marginTop: 5 }}
                  />
                  <Text
                    style={{ color: "#fff", fontWeight: "700", fontSize: 35 }}
                  >
                    1,500
                  </Text>
                </View>
              </View>
            </Card>
          </TouchableOpacity>

          <View style={{ padding: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 20,
              }}
            >
              <Text style={{ fontSize: 18, color: "#000237" }}>
                {" "}
                Recommended for you{" "}
              </Text>

              <Image source={require("../../assets/right_arrow_icon.png")} />
            </View>

            <ScrollView horizontal={true}>
              <Image
                source={require("../../assets/car_interior.jpg")}
                style={styles.imageRectangle}
              />

              <Image
                source={require("../../assets/car_wash.jpg")}
                style={styles.imageRectangle}
              />

              <Image
                source={require("../../assets/dust.jpg")}
                style={styles.imageRectangle}
              />
            </ScrollView>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 20,
              }}
            >
              <Text style={{ fontSize: 18, color: "#000237" }}>
                {" "}
                Recommended for you{" "}
              </Text>

              <Image source={require("../../assets/right_arrow_icon.png")} />
            </View>

            <AppCard />
            <AppCard />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
