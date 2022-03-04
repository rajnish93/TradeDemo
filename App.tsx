import { Block, GalioProvider } from "galio-framework";
import React from "react";
import customTheme from "./components/customTheme";
import Onboarding from "./screens/Onboarding/Onboarding";

export default function App() {
  return (
    <GalioProvider theme={customTheme}>
      <Block flex>
        <Onboarding />
      </Block>
    </GalioProvider>
  );
}
