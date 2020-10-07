import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { Icon, Item, Input, Button } from "native-base";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

class EditProfileComponent extends Component<any, any> {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={{ marginTop: 70, marginHorizontal: 20 }}>
          <Text style={{ color: "#000237", fontSize: 25 }}>Edit Profile</Text>
        </View>

        <View style={{ marginVertical: 20, marginHorizontal: 30 }}>
          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginVertical: 15,
            }}
          >
            <Icon active name="person" style={{ color: "#267CE1" }} />
            <Input placeholder="Full Name" />
          </Item>

          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginVertical: 15,
            }}
          >
            <Icon active name="mail" style={{ color: "#267CE1" }} />
            <Input placeholder="Email" />
          </Item>

          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginVertical: 15,
            }}
          >
            <FontAwesome
              active
              name="phone"
              style={{ color: "#267CE1", paddingHorizontal: 5 }}
              size={24}
            />
            <Input placeholder="Phone Number" />
          </Item>

          <Item
            style={{
              borderBottomColor: "#267CE1",
              borderBottomWidth: 1,
              marginVertical: 15,
            }}
          >
            <MaterialIcons
              active
              name="add-location"
              style={{ color: "#267CE1" }}
              size={24}
            />
            <Input placeholder="Location" />
          </Item>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 70,
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
              Update Profile
            </Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

export default EditProfileComponent;
