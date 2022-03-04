import { Block, GalioProvider } from "galio-framework";
import React from "react";
import customTheme from "./src/components/customTheme";
import { AppNavigator } from "./src/navigators/AppNavigator";

export default function App() {
  return (
    <GalioProvider theme={customTheme}>
      <Block flex>
        <AppNavigator />
      </Block>
    </GalioProvider>
  );
}
