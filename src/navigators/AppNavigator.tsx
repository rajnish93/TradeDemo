import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding/Onboarding";
import customTheme from "../components/customTheme";
import Home from "../screens/Home/Home";

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRightContainerStyle: {},
          headerLeftContainerStyle: {},
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              color: customTheme.COLORS.WHITE,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
