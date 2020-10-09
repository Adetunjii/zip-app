import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";

class Notifications extends Component<any, any> {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={{ marginTop: 50, marginHorizontal: 30 }}>
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{ color: "#000237", fontSize: 22, marginVertical: 10 }}
            >
              Today
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "300" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              eligendi neque doloribus, illo in animi totam impedit ut error
              omnis aliquam eius vero autem corporis delectus quia suscipit
              maiores pariatur!
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "300", paddingVertical: 10 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              accusamus perspiciatis a vero, eum, molestiae vitae asperiores
              iste facere ipsam voluptatem autem possimus labore magnam iusto
              repellendus mollitia quidem tenetur?
            </Text>
          </View>

          <View style={{ marginVertical: 20 }}>
            <Text
              style={{ color: "#000237", fontSize: 22, marginVertical: 10 }}
            >
              02-09-2020
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "300" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              eligendi neque doloribus, illo in animi totam impedit ut error
              omnis aliquam eius vero autem corporis delectus quia suscipit
              maiores pariatur!
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "300", paddingVertical: 10 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              accusamus perspiciatis a vero, eum, molestiae vitae asperiores
              iste facere ipsam voluptatem autem possimus labore magnam iusto
              repellendus mollitia quidem tenetur?
            </Text>
          </View>

          <View style={{ marginVertical: 20 }}>
            <Text
              style={{ color: "#000237", fontSize: 22, marginVertical: 10 }}
            >
              01-09-2020
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "300" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              eligendi neque doloribus, illo in animi totam impedit ut error
              omnis aliquam eius vero autem corporis delectus quia suscipit
              maiores pariatur!
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "300", paddingVertical: 10 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              accusamus perspiciatis a vero, eum, molestiae vitae asperiores
              iste facere ipsam voluptatem autem possimus labore magnam iusto
              repellendus mollitia quidem tenetur?
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Notifications;
