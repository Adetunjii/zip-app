import React from "react";
import { View, Text, Image } from "react-native";
import { Card, CardItem } from "native-base";

const AppCard = (props: any) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Card style={{ padding: 10, borderRadius: 8 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#141414",
                  height: 52,
                  width: 52,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    paddingVertical: 5,
                  }}
                >
                  Wed
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  23
                </Text>
              </View>

              <View style={{ padding: 10 }}>
                <Text
                  style={{
                    color: "#000237",
                    fontWeight: "500",
                    fontSize: 15,
                  }}
                >
                  House Cleaning
                </Text>
                <Text style={{ color: "#6d6d6d", fontSize: 12 }}>
                  1:00pm - 3:00pm
                </Text>
              </View>
            </View>

            <Text style={{ color: "#000237", fontSize: 18 }}>₦700</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ paddingTop: 15 }}>
              <Text style={{ color: "#6d6d6d" }}>Cleaner</Text>
              <Text style={{ color: "#000237", fontSize: 15 }}>
                Jemimah Campbell
              </Text>
            </View>
            <View>
              <Image
                source={require("../../assets/ariana.jpg")}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default AppCard;
