import "react-native-gesture-handler";
import React, { Component } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Welcome from "./components/welcome/welcome";
import Login from "./components/login/login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "./components/register/register";
import Home from "./components/home/home.component";
import Tabs from "./components/reusables/bottomTabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bookings from "./components/bookings/bookings";
import Services from "./components/services/services";
import Notifications from "./components/notifications/notifications";
import Logout from "./components/logout/logout";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#267CE1",
        inactiveTintColor: "#717171",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: () => <AntDesign name="book" size={24} />,
        }}
      />

      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: "Services",
          tabBarIcon: () => (
            <MaterialIcons name="local-laundry-service" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: () => (
            <Ionicons name="ios-notifications-outline" size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          tabBarLabel: "Logout",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="location-exit" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });

    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            ></Stack.Screen>

            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            ></Stack.Screen>

            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="Home"
              component={BottomNav}
              options={{ headerShown: false }}
            ></Stack.Screen>
          </Stack.Navigator>
        </View>
        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}>
            </Tab.Screen>
          </Tab.Navigator> */}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },

  text: {
    color: "blue",
  },
});
