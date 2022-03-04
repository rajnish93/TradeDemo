import { Block, GalioProvider } from "galio-framework";
import React from "react";
import customTheme from "./src/components/customTheme";
import Onboarding from "./src/screens/Onboarding/Onboarding";

export default function App() {
  return (
    <GalioProvider theme={customTheme}>
      <Block flex>
        <Onboarding />
      </Block>
    </GalioProvider>
  );
}
