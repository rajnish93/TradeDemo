import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding/Onboarding";
import customTheme from "../components/customTheme";
import Home from "../screens/Home/Home";
import Dashboard from "../screens/Dashboard/Dashboard";
import { StatusBar } from "react-native";
import BottomTabNavigator from "./BottomTabNavigator";

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Dashboard: undefined;
  Root: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator
        // initialRouteName="Root"
        screenOptions={{
          headerRightContainerStyle: {},
          headerLeftContainerStyle: {},
        }}
      >
        {/* <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: true }}
        /> */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              color: customTheme.COLORS.BLACK,
            },
            headerTintColor: customTheme.COLORS.TWITTER,
            headerStyle: {
              backgroundColor: customTheme.COLORS.THEME,
            },
          }}
        />
        {/* <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              color: customTheme.COLORS.BLACK,
            },
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
