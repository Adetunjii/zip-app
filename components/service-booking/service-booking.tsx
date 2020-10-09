import React, { Component } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
class ServiceBooking extends Component<any, any> {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View>
          <View
            style={{ marginTop: 70, marginBottom: 50, marginHorizontal: 20 }}
          >
            <Text style={{ color: "#000237", fontSize: 25 }}>My Bookings</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: "column", marginHorizontal: 20 }}
          >
            <View style={{ flex: 4, flexDirection: "row" }}>
              <Image
                source={require("../../assets/cleaner.jpg")}
                style={{ width: 70, height: 70, borderRadius: 50 }}
              />
              <View style={{ paddingLeft: 15, paddingVertical: 10 }}>
                <Text style={{ color: "#727272" }}>Worker's name</Text>
                <Text
                  style={{ color: "#000273", fontWeight: "700", fontSize: 18 }}
                >
                  Adekunle Lawal
                </Text>
                {/* <Text>Worker's name</Text> */}
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 40 }}>
          <Text
            style={{
              color: "#000237",
              fontWeight: "bold",
              fontSize: 18,
              marginVertical: 10,
            }}
          >
            Schedule
          </Text>

          <View style={{ marginVertical: 20, flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "#267CE1",
                width: 60,
                height: 60,
                borderRadius: 10,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <FontAwesome name="calendar" color="#fff" size={35} />
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text>Enter Date</Text>
              <Text style={{ color: "#000", fontWeight: "700", fontSize: 20 }}>
                Enter Time{" "}
              </Text>
            </View>
          </View>

          <View style={{ marginVertical: 20, flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "#B557FF",
                width: 60,
                height: 60,
                borderRadius: 10,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="location-on" size={35} color="#fff" />
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text>Location</Text>
              <Text style={{ color: "#000", fontWeight: "700", fontSize: 20 }}>
                Gets Location{" "}
              </Text>
            </View>
          </View>

          <View style={{ marginVertical: 20, flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "#FF5656",
                width: 60,
                height: 60,
                borderRadius: 10,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="cash-multiple"
                size={35}
                color="#fff"
              />
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text>Service Amount</Text>
              <Text style={{ color: "#000", fontWeight: "700", fontSize: 20 }}>
                Gets Amount{" "}
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 20, flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "#ff8540",
                width: 60,
                height: 60,
                borderRadius: 10,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="plus-minus"
                size={35}
                color="#fff"
              />
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text>Number of Cars</Text>
              <Text style={{ color: "#000", fontWeight: "700", fontSize: 20 }}>
                Enter Number{" "}
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 20, flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "#2FDA4A",
                width: 60,
                height: 60,
                borderRadius: 10,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="credit-card-multiple-outline"
                size={35}
                color="#fff"
              />
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <Text>Payment Method</Text>
              <Text style={{ color: "#000", fontWeight: "700", fontSize: 20 }}>
                Choose payment method{" "}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ServiceBooking;
