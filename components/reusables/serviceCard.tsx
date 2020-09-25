import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Card } from "native-base";

const ServiceCard = () => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Card style={{ flex: 1, flexDirection: "row", borderRadius: 10 }}>
        <View>
          <Image source={require("../../assets/car_wash.jpg")} />
        </View>
        <View style={{ paddingVertical: 20, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "500", color: "#000237" }}>
            Car Wash
          </Text>
          <Text style={{ fontSize: 13, color: "#717171", paddingVertical: 10 }}>
            Starts from ₦500
          </Text>
          <Text style={{ color: "#267CE1" }}>Get 20% off on first service</Text>
        </View>
      </Card>
    </View>
  );
};

export default ServiceCard;
