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
import FundWallet from "./components/fund-wallet/fundWallet";
import EditProfileComponent from "./components/edit-profile/edit-profile";
import BookingDetails from "./components/booking-details/booking-details";
import ServiceBooking from "./components/service-booking/service-booking";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const BookingStack = createStackNavigator();
const ServiceStack = createStackNavigator();

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
        component={HomeNav}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingNav}
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: () => <AntDesign name="book" size={24} />,
        }}
      />

      <Tab.Screen
        name="Services"
        component={ServiceNav}
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
          tabBarBadge: "3",
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

function HomeNav() {
  return (
    <View style={styles.container}>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="Edit-Profile"
          component={EditProfileComponent}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    </View>
  );
}

function BookingNav() {
  return (
    <BookingStack.Navigator>
      <BookingStack.Screen
        name="Bookings"
        component={Bookings}
        options={{ headerShown: false }}
      />
      <BookingStack.Screen
        name="Booking-Details"
        component={BookingDetails}
        options={{ headerShown: false }}
      />
    </BookingStack.Navigator>
  );
}

function ServiceNav() {
  return (
    <ServiceStack.Navigator>
      <ServiceStack.Screen
        name="services"
        component={Services}
        options={{ headerShown: false }}
      />
      <ServiceStack.Screen
        name="Service-Booking"
        component={ServiceBooking}
        options={{ headerShown: false }}
      />
    </ServiceStack.Navigator>
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
