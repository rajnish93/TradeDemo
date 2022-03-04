import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/common";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  width: 100%;
  flex: 1;
`;

const Welcome: FC = () => {
  return (
    <WelcomeContainer>
      <StatusBar style="dark" />
    </WelcomeContainer>
  );
};

export default Welcome;
