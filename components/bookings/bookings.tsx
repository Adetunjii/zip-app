import React, { Component } from "react";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import AppCard from "../reusables/card";

class Bookings extends Component<any, any> {
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
          <Text style={{ color: "#000237", fontSize: 25 }}> My Bookings</Text>
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
              Upcoming
            </Text>
          </View>
          <Text style={{ color: "#717171" }}>Ongoing</Text>
          <Text style={{ color: "#717171" }}>Previous</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Booking-Details")}>
        <AppCard />
        </TouchableOpacity>
        <AppCard />
        <AppCard />
        <AppCard />
      </ScrollView>
    );
  }
}

export default Bookings;
