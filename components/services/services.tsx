import React, { Component } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import ServiceCard from "../reusables/serviceCard";
import authService from '../../http-services/index';

class Services extends Component<any, any> {

  state = {
    services: ''
  }

  async fetchServices() {
    await authService.getServices()
  }

  render() {
    const { navigation } = this.props; 
    return (
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 35,
          }}
        >
          <Text style={{ color: "#000237", fontSize: 25 }}> My Services</Text>
          <Image source={require("../../assets/search.png")} />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            flexDirection: "row",
            paddingVertical: 10,
          }}
        >
          <View
            style={{ borderBottomColor: "#267CE1", borderBottomWidth: 2.5 }}
          >
            <Text
              style={{
                color: "#000237",
                paddingVertical: 3,
              }}
            >
              Cleaning
            </Text>
          </View>
          <Text style={{ color: "#717171" }}>Washing</Text>
          <Text style={{ color: "#717171" }}>Favorite</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Service-Booking')}>
          <ServiceCard />
        </TouchableOpacity>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </ScrollView>
    );
  }
}

export default Services;
